import fs from 'node:fs/promises'
const base = 'https://test1-kimsims0918-5871s-projects.vercel.app'
const description = '클래식한 감성과 섬세한 선으로 만드는 일러스트레이션, 벡터 그래픽과 브랜드 디자인. REVINCI Studio.'
const pages = {'/':'Classic Mood Illustration & Visual Design','/about':'About','/services':'Services','/contact':'Contact','/privacy':'Privacy','/work':'Work','/work/illustration':'Revinci Illustration','/work/vector-assets':'Revinci Vector & Assets','/work/brand-projects':'Revinci Brand Projects'}
for (const name of await fs.readdir('src/content/projects')) {if(name.endsWith('.json') && !name.startsWith('._')) {const p=JSON.parse(await fs.readFile('src/content/projects/'+name,'utf8'));pages['/project/'+p.id]=p.title}}
const html=await fs.readFile('dist/index.html','utf8')
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;')
for(const [path,title] of Object.entries(pages)) {
 const meta=`<link rel="icon" type="image/svg+xml" href="/favicon.svg"/><link rel="canonical" href="${base+path}"/><meta property="og:type" content="website"/><meta property="og:site_name" content="REVINCI Studio"/><meta property="og:title" content="${escape(title)} — REVINCI Studio"/><meta property="og:description" content="${description}"/><meta property="og:url" content="${base+path}"/><meta property="og:image" content="${base}/images/projects/christmas-cake-full.webp"/><meta name="twitter:card" content="summary_large_image"/>`
 const result=html.replace(/<title>.*?<\/title>/,`<title>${escape(title)} — REVINCI Studio</title>`).replace('</head>',meta+'</head>')
 const dir=path==='/'?'dist':'dist'+path;await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/index.html',result)
}
