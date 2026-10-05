#!/usr/bin/env python3
"""Validate generated pages, metadata, assets, internal links, redirects and sitemap."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, re, sys, xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
BASE='https://rvlitigation.com'
errors=[]
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__(); self.links=[];self.ids=set();self.canon=[];self.refresh=[];self.h1=0;self.desc=[];self.ld=[];self.ldbuf=None;self.forms=[];self.title='';self.intitle=False;self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.add(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='title':self.intitle=True
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if tag=='meta' and a.get('name')=='description':self.desc.append(a.get('content'))
  if tag=='meta' and a.get('http-equiv','').lower()=='refresh':self.refresh.append(a.get('content'))
  if tag=='script' and a.get('type')=='application/ld+json':self.ldbuf=''
  if tag=='form':self.forms.append(a)
  if tag in ['a','link'] and a.get('href'):self.links.append(a['href'])
  if tag in ['img','script','source']:
   for key in ['src','srcset']:
    if a.get(key):self.links.append(a[key])
 def handle_endtag(self,tag):
  if tag=='title':self.intitle=False
  if tag=='script' and self.ldbuf is not None:self.ld.append(json.loads(self.ldbuf));self.ldbuf=None
 def handle_data(self,data):
  if self.ldbuf is not None:self.ldbuf+=data
  if self.intitle:self.title+=data

def resolve(path):
 f=ROOT/unquote(path.lstrip('/'))
 if f.is_dir():return f/'index.html'
 if f.exists():return f
 if not f.suffix and f.with_suffix('.html').exists():return f.with_suffix('.html')
 return f
files=[p for p in ROOT.rglob('*.html') if not any(x in ['content','.git'] for x in p.relative_to(ROOT).parts)]
parsed={p:Page(p.read_text()) for p in files}
titles=set()
for p,s in parsed.items():
 label=str(p.relative_to(ROOT))
 if len(s.canon)!=1:errors.append(label+': canonical count')
 if s.refresh:
  if not re.match(r'^0; url=https://rvlitigation.com/',s.refresh[0]):errors.append(label+': invalid refresh')
  dest=resolve(urlsplit(s.canon[0]).path)
  if dest not in parsed or parsed[dest].refresh:errors.append(label+': redirect target missing or chained')
 else:
  if s.h1!=1:errors.append(label+f': {s.h1} H1 headings')
  if not s.ld:errors.append(label+': missing schema')
  if len(s.desc)!=1:errors.append(label+': description count')
  if s.title in titles:errors.append(label+': duplicate title')
  titles.add(s.title)
  for form in s.forms:
   if form.get('action')!='https://formsubmit.co/David@RVLitigation.com' or form.get('method','').lower()!='post':errors.append(label+': unexpected form endpoint')
 for link in s.links:
  u=urlsplit(link)
  if u.scheme in ['mailto','tel','data'] or u.netloc and u.netloc!='rvlitigation.com':continue
  if not u.path:dest=p
  elif u.path.startswith('/'):dest=resolve(u.path)
  else:dest=resolve('/'+str((p.parent/u.path).relative_to(ROOT)))
  if not dest.exists():errors.append(label+': missing '+link)
  elif u.fragment and dest in parsed and u.fragment not in parsed[dest].ids:errors.append(label+': missing fragment '+link)
  if not s.refresh and dest in parsed and parsed[dest].refresh:errors.append(label+': internal link to redirect '+link)
root=ET.parse(ROOT/'sitemap.xml').getroot();urls=[x.text for x in root.findall('{*}url/{*}loc')]
if len(urls)!=len(set(urls)):errors.append('duplicate sitemap URLs')
for url in urls:
 f=resolve(urlsplit(url).path)
 if f not in parsed or parsed[f].refresh or parsed[f].canon!=[url]:errors.append('invalid sitemap page '+url)
for f,s in parsed.items():
 if not s.refresh and f.name not in ['404.html','thank-you.html'] and s.canon[0] not in urls:errors.append('active page missing from sitemap '+str(f))
migration=json.loads((ROOT/'content/url-migration.json').read_text())
for url in migration['retired']:
 if resolve(url).exists():errors.append('retired page remains: '+url)
if errors:
 print('\n'.join(errors));sys.exit(1)
print(f'PASS: {len(parsed)} HTML files; {len(urls)} canonical sitemap pages; metadata, schema, internal links, fragments, assets, forms, redirect targets and removals verified.')
