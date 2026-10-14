// Runs after `vite build` and the SSR build.
// 1) puts the server-rendered home page into dist/index.html so crawlers (Googlebot,
//    AdsBot-Google) see real text without running JavaScript;
// 2) writes plain static pages for /contact and /privacy-policy.
import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = process.cwd()
const { render, BRANCHES, COMPANY } = await import(pathToFileURL(path.join(root, '.ssr/entry-server.js')).href)

const indexPath = path.join(root, 'dist/index.html')
const template = await readFile(indexPath, 'utf8')
if (!template.includes('<div id="root"></div>')) throw new Error('root div not found in dist/index.html')
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
await writeFile(indexPath, html)

const e = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const shell = (title, description, canonical, body) => `<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${e(title)}</title>
<meta name="description" content="${e(description)}" />
<link rel="canonical" href="${COMPANY.siteUrl}${canonical}" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<style>
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#101828;background:#f7f9fb;line-height:1.65}
  header{background:#0b2a5b;color:#fff}
  .wrap{max-width:860px;margin:0 auto;padding:0 16px}
  header .wrap{display:flex;flex-wrap:wrap;gap:12px 24px;align-items:center;justify-content:space-between;padding:14px 16px}
  header a{color:#fff;text-decoration:none;font-weight:600}
  header nav{display:flex;gap:18px;flex-wrap:wrap}
  h1{font-size:1.9rem;margin:28px 0 8px} h2{font-size:1.2rem;margin:26px 0 6px;color:#0b2a5b}
  main{padding-bottom:32px} a{color:#0b2a5b}
  .card{background:#fff;border:1px solid #dde3ea;border-radius:12px;padding:16px;margin:12px 0}
  table{border-collapse:collapse;width:100%} td,th{border-bottom:1px solid #eef2f6;padding:8px 6px;text-align:left;vertical-align:top}
  footer{background:#0b2a5b;color:#dbe4f3;padding:20px 0;font-size:.9rem} footer a{color:#fff}
</style>
</head>
<body>
<header><div class="wrap"><a href="/">${e(COMPANY.legalName)}</a>
<nav><a href="/">होम</a><a href="/#/models">मॉडल्स</a><a href="/contact">संपर्क</a><a href="/privacy-policy">Privacy Policy</a></nav></div></header>
<main><div class="wrap">${body}</div></main>
<footer><div class="wrap">
<strong>${e(COMPANY.legalName)}</strong><br />
${e(COMPANY.hqAddress)}<br />
फोन: <a href="tel:+91${COMPANY.customerCareNumber}">${e(COMPANY.customerCareNumber)}</a> · समय: ${e(COMPANY.hours)} · GSTIN: ${e(COMPANY.gstin)}<br />
<a href="/privacy-policy">Privacy Policy</a> · <a href="/contact">संपर्क</a> · <a href="/">होम</a>
</div></footer>
</body>
</html>
`

const rows = BRANCHES.map(
  (b) =>
    `<tr><td>${e(b.town)}${b.isHQ ? ' (मुख्यालय)' : ''}</td><td>${e(b.inCharge)}</td><td><a href="tel:+91${b.phone}">${e(b.phone)}</a></td><td>${e(b.address ?? 'पता जानने के लिए कॉल करें')}</td></tr>`
).join('')

const contact = shell(
  'संपर्क करें | Hindustan Motors Company',
  `Hindustan Motors Company का पता, फोन ${COMPANY.customerCareNumber}, समय ${COMPANY.hours} और सभी 11 शोरूम की जानकारी।`,
  '/contact',
  `<h1>संपर्क करें</h1>
<div class="card">
<strong>${e(COMPANY.legalName)}</strong><br />
${e(COMPANY.hqAddress)}<br />
फोन / WhatsApp: <a href="tel:+91${COMPANY.customerCareNumber}">${e(COMPANY.customerCareNumber)}</a><br />
समय: ${e(COMPANY.hours)}<br />
GSTIN: ${e(COMPANY.gstin)}
</div>
<h2>हमारे 11 शोरूम</h2>
<div class="card"><table><thead><tr><th>शहर</th><th>इंचार्ज</th><th>फोन</th><th>पता</th></tr></thead><tbody>${rows}</tbody></table></div>`
)

const privacy = shell(
  'Privacy Policy | Hindustan Motors Company',
  'Hindustan Motors Company की वेबसाइट Privacy Policy — हम कौन सी जानकारी लेते हैं और उसका उपयोग कैसे करते हैं।',
  '/privacy-policy',
  `<h1>Privacy Policy</h1>
<p>अंतिम अपडेट: अक्टूबर 2026</p>
<p>यह वेबसाइट ${e(COMPANY.legalName)} (${e(COMPANY.hqAddress)}) द्वारा चलाई जाती है। आपकी निजता हमारे लिए ज़रूरी है।</p>
<h2>हम कौन सी जानकारी लेते हैं</h2>
<p>वेबसाइट के पूछताछ/शिकायत फ़ॉर्म में आप अपना नाम, फ़ोन नंबर, शहर और संदेश भरते हैं। ये फ़ॉर्म आपके चुने हुए शोरूम के WhatsApp नंबर पर संदेश तैयार करके WhatsApp खोल देते हैं; यह जानकारी हमारी वेबसाइट के सर्वर पर सेव नहीं की जाती। संदेश आपके भेजने पर ही WhatsApp के माध्यम से हम तक पहुँचता है।</p>
<h2>जानकारी का उपयोग</h2>
<p>आपकी दी हुई जानकारी का उपयोग केवल आपकी पूछताछ का जवाब देने, गाड़ी की जानकारी, फाइनेंस, RTO रजिस्ट्रेशन या सर्विस में मदद करने के लिए किया जाता है। हम आपकी जानकारी बेचते नहीं हैं।</p>
<h2>कुकीज़ और स्टोरेज</h2>
<p>वेबसाइट आपके ब्राउज़र में केवल थीम (लाइट/डार्क) की पसंद सेव कर सकती है। वेबसाइट को चलाने के लिए होस्टिंग सेवा (Vercel) सामान्य सर्वर लॉग रख सकती है।</p>
<h2>तीसरे पक्ष</h2>
<p>वेबसाइट पर फ़ॉन्ट Google Fonts से लोड होते हैं, और WhatsApp लिंक WhatsApp की सेवा खोलते हैं; उनकी अपनी privacy policies लागू होती हैं।</p>
<h2>आपके अधिकार</h2>
<p>आप अपनी दी हुई जानकारी हटवाने या सुधारने के लिए हमसे संपर्क कर सकते हैं।</p>
<h2>संपर्क</h2>
<p>${e(COMPANY.legalName)}, ${e(COMPANY.hqAddress)}<br />फोन: <a href="tel:+91${COMPANY.customerCareNumber}">${e(COMPANY.customerCareNumber)}</a> · समय: ${e(COMPANY.hours)}</p>`
)

await writeFile(path.join(root, 'dist/contact.html'), contact)
await writeFile(path.join(root, 'dist/privacy-policy.html'), privacy)
console.log('prerendered: index.html (%d bytes), contact.html, privacy-policy.html', html.length)
