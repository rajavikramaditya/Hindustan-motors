// Central data for the Hindustan Motors site — one place to update
// branch contacts, models, and shared links so every section stays in sync.

import inpowerPlusPhoto from '@/assets/inpowerPlusPhoto'
import inpowerProPhoto from '@/assets/inpowerProPhoto'

export const COMPANY = {
  legalName: 'Hindustan Motors Company',
  gstin: '09AAOFH4128C1ZG',
  hqAddress: '00, Nadigaon Road, Mauja Badanpura, Konch, Dist. Jalaun, Uttar Pradesh 285205',
  founderName: 'Shaan Mohammad',
  founderTitle: 'Founder',
  mdName: 'Rustam Mansoori',
  mdTitle: 'Managing Director',
  customerCareNumber: '9140485988',
  distributorTags: ['Bundelkhand Distributor', 'Bundelkhand Service'],
  brands: ['Badshah', 'M-Power'],
};

export const WHATSAPP_NUMBER = '919140485988';

export function buildWhatsAppLink(number, message) {
  const digits = String(number).replace(/\D/g, '');
  const withCountryCode = digits.startsWith('91') ? digits : `91${digits}`;
  return `https://wa.me/${withCountryCode}?text=${encodeURIComponent(message)}`;
}

export function buildCallLink(number) {
  const digits = String(number).replace(/\D/g, '');
  const withCountryCode = digits.startsWith('91') ? digits : `91${digits}`;
  return `tel:+${withCountryCode}`;
}

export function buildMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// The 11 dealer points, from the client's own branch contact sheet.
// isHQ marks the GST-registered principal place of business (Konch).
export const BRANCHES = [
  {
    town: 'Konch',
    inCharge: 'Nosad Khan',
    phone: '9956518209',
    isHQ: true,
    address: '00, Nadigaon Road, Mauja Badanpura, Konch, Dist. Jalaun, UP 285205',
  },
  {
    town: 'Jalaun',
    inCharge: 'Khushbo Jha',
    phone: '6392941992',
    isHQ: false,
    address: 'Mohalla Rawatan, Sengar Colony ke saamne, Jalaun, UP 285123',
  },
  {
    town: 'Madhogarh',
    inCharge: 'Raj Mohammad',
    phone: '9236193895',
    isHQ: false,
    address: null,
  },
  {
    town: 'Kalpi',
    inCharge: 'Irfan Khan',
    phone: '6388870872',
    isHQ: false,
    address: null,
  },
  {
    town: 'Orai',
    inCharge: 'Rustam Mansoori',
    phone: '7007725196',
    isHQ: false,
    address: '582, Jail Road, Infront of Ram Kund, Orai, Dist. Jalaun, UP 285001',
  },
  {
    town: 'Ait',
    inCharge: 'Bhaiyaji Patel',
    phone: '7355414943',
    isHQ: false,
    address: null,
  },
  {
    town: 'Moth',
    inCharge: 'Jaan Mohammad',
    phone: '9651458975',
    isHQ: false,
    address: null,
  },
  {
    town: 'Gursarai',
    inCharge: 'Wahid Mansoori',
    phone: '9369456729',
    isHQ: false,
    address: null,
  },
  {
    town: 'Garautha',
    inCharge: 'Jaan Mohammad',
    phone: '9651458975',
    isHQ: false,
    address: null,
  },
  {
    town: 'Chirgaon',
    inCharge: 'Jaan Mohammad',
    phone: '9651458975',
    isHQ: false,
    address: null,
  },
  {
    town: 'Jhansi',
    inCharge: 'Shaan Mohammad',
    phone: '9140485988',
    isHQ: false,
    address: 'Main Road, Bamhroli, Jhansi, UP 284303',
  },
];

const WA = (name) => `नमस्ते, मुझे ${name} के बारे में जानकारी चाहिए।`

// Every e-rickshaw on the site. Add a model here and it appears on the home
// page, the /models page and gets its own /models/<slug> page automatically.
//  - img / gallery: paths in public/ (or an imported photo)
//  - groups: feature cards on the detail page, [{ title, icon, items }]
//  - specs: rows of the specification table, [label, value]
// Only list what is visible on the vehicle or confirmed by the company.
const COMMON_SPECS = [
  ['ब्रांड', 'Badshah'],
  ['डीलर', 'हिंदुस्तान मोटर्स (बुंदेलखंड)'],
  ['फाइनेंस', '₹34,999 से डाउन पेमेंट, 0% ब्याज पर EMI'],
  ['RTO रजिस्ट्रेशन', 'हमारी टीम द्वारा'],
  ['सर्विस', '3 महीने फ्री सर्विस (ऑयल सहित)'],
  ['गारंटी', '1 महीने की फुल गारंटी'],
  ['कीमत', 'शोरूम पर संपर्क करें'],
]

export const MODELS = [
  {
    slug: 'badshah',
    brand: 'Badshah',
    name: 'Badshah',
    nameHi: 'बादशाह',
    icon: 'Crown',
    img: '/models/badshah.jpg',
    gallery: ['/models/badshah.jpg'],
    featured: true,
    tag: 'फ्लैगशिप · ब्लू स्टेनलेस',
    desc: 'ब्रांड का नाम ही जिसकी पहचान — ब्लू बॉडी, चमकता स्टेनलेस स्टील फ्रेम, रूफ कैरियर और रेड कॉइल-स्प्रिंग सस्पेंशन के साथ दमदार लुक।',
    points: ['स्टेनलेस स्टील फ्रेम व रूफ कैरियर', 'रेड कॉइल-स्प्रिंग सस्पेंशन', 'म्यूज़िक सिस्टम, फैन व LED बार'],
    colors: ['ब्लू'],
    groups: [
      { title: 'बॉडी व फ्रेम', icon: 'Crown', items: ['ब्लू बॉडी पैनल, स्टेनलेस स्टील कैनोपी व रेलिंग', 'रूफ पर सामान रखने का कैरियर', 'आगे ब्लैक सेफ्टी गार्ड', 'साइड पर Badshah क्राउन ब्रांडिंग'] },
      { title: 'आराम व सुरक्षा', icon: 'ShieldCheck', items: ['कुशन वाली ब्लैक पैसेंजर सीटें', 'सवारियों के लिए पीले ग्रैब हैंडल', 'फायर एक्सटिंग्विशर साथ में', 'रूफ फैन व क्रोम रियर-व्यू मिरर'] },
      { title: 'लाइट व म्यूज़िक', icon: 'Zap', items: ['रूफ पर LED लाइट बार', 'फ्रंट म्यूज़िक/साउंड सिस्टम पैनल', 'गोल हेडलाइट, ऑरेंज इंडिकेटर'] },
      { title: 'पहिए व सस्पेंशन', icon: 'Bike', items: ['रेड कॉइल-स्प्रिंग फ्रंट सस्पेंशन', 'चौड़ा फ्रंट टायर', 'पीला-लाल फ्लोर बॉर्डर'] },
    ],
    specs: [['टाइप', 'पैसेंजर e-Rickshaw'], ['कैनोपी', 'स्टेनलेस स्टील, फुल रूफ'], ['कलर', 'ब्लू'], ...COMMON_SPECS],
  },
  {
    slug: 'chetak',
    brand: 'Badshah',
    name: 'Chetak',
    nameHi: 'चेतक',
    icon: 'Zap',
    img: '/models/chetak.jpg',
    gallery: ['/models/chetak.jpg'],
    featured: true,
    tag: 'फुल फीचर्ड',
    desc: 'टील-ब्लू बॉडी, ब्लैक कैनोपी और ब्लैक कुशन सीटें — चेतक में वो सब कुछ जो सवारी को आरामदायक और आपको सुरक्षित रखे।',
    points: ['ब्लैक कुशन सीटें व ग्रैब हैंडल', 'म्यूज़िक सिस्टम व रूफ फैन', 'फायर एक्सटिंग्विशर व वाइपर'],
    colors: ['टील ब्लू'],
    groups: [
      { title: 'बॉडी व फ्रेम', icon: 'Crown', items: ['टील-ब्लू बॉडी, ब्लैक फ्रेम की कैनोपी', 'रूफ पर कैरियर रेलिंग', 'आगे सेफ्टी गार्ड'] },
      { title: 'आराम व सुरक्षा', icon: 'ShieldCheck', items: ['कुशन वाली ब्लैक पैसेंजर सीटें', 'पीले ग्रैब हैंडल', 'फायर एक्सटिंग्विशर', 'रूफ फैन व विंडशील्ड वाइपर'] },
      { title: 'लाइट व म्यूज़िक', icon: 'Zap', items: ['रूफ पर LED लाइट बार', 'म्यूज़िक सिस्टम पैनल', 'गोल हेडलाइट व ऑरेंज इंडिकेटर'] },
      { title: 'पहिए व सस्पेंशन', icon: 'Bike', items: ['कॉइल-स्प्रिंग फ्रंट सस्पेंशन', 'चौड़ा फ्रंट टायर', 'पीला-लाल फ्लोर बॉर्डर'] },
    ],
    specs: [['टाइप', 'पैसेंजर e-Rickshaw'], ['कैनोपी', 'ब्लैक फ्रेम, फुल रूफ'], ['कलर', 'टील ब्लू'], ...COMMON_SPECS],
  },
  {
    slug: 'smart',
    brand: 'Badshah',
    name: 'Smart',
    nameHi: 'स्मार्ट',
    icon: 'Sparkles',
    img: '/models/smart-orange.jpg',
    video: '/video/badshah-smart-ss.mp4',
    gallery: ['/models/smart-orange.jpg', '/models/smart-ss.jpg', '/models/smart.jpg'],
    featured: true,
    tag: 'स्टेनलेस स्टील (SS)',
    desc: 'ऑरेंज-रेड बॉडी पर शीशे जैसा चमकता स्टेनलेस स्टील फ्रेम — सवारी भी, शो-ऑफ भी। Smart SS के रूप में रेड और ब्लैक-ब्लू कलर में भी उपलब्ध।',
    points: ['स्टेनलेस स्टील फ्रेम व कैनोपी', 'रूफ पर LED लाइट बार', 'म्यूज़िक सिस्टम व रूफ फैन'],
    colors: ['ऑरेंज-रेड', 'रेड (Smart SS)', 'ब्लैक-ब्लू'],
    groups: [
      { title: 'बॉडी व फ्रेम', icon: 'Crown', items: ['स्टेनलेस स्टील फ्रेम, कैनोपी व पैसेंजर रेलिंग', 'फ्रंट पर "SMART" व "BADSHAH" नेमप्लेट', 'ऑरेंज-रेड बॉडी पैनल'] },
      { title: 'आराम व सुरक्षा', icon: 'ShieldCheck', items: ['कुशन वाली ब्लैक पैसेंजर सीटें', 'पीले ग्रैब हैंडल', 'फायर एक्सटिंग्विशर', 'रूफ फैन व विंडशील्ड वाइपर'] },
      { title: 'लाइट व म्यूज़िक', icon: 'Zap', items: ['रूफ पर LED लाइट बार', 'म्यूज़िक सिस्टम पैनल', 'बड़ी गोल हेडलाइट, ऑरेंज इंडिकेटर'] },
      { title: 'पहिए व सस्पेंशन', icon: 'Bike', items: ['कॉइल-स्प्रिंग फ्रंट सस्पेंशन', 'ब्लैक फ्रंट फेंडर', 'स्टेनलेस स्टील फुट-बोर्ड बॉर्डर'] },
    ],
    specs: [['टाइप', 'पैसेंजर e-Rickshaw'], ['कैनोपी', 'स्टेनलेस स्टील, फुल रूफ'], ['कलर', 'ऑरेंज-रेड, रेड, ब्लैक-ब्लू'], ...COMMON_SPECS],
  },
  {
    slug: 'queen',
    brand: 'Badshah',
    name: 'Queen',
    nameHi: 'क्वीन',
    icon: 'Crown',
    img: '/models/queen-blue.jpg',
    gallery: ['/models/queen-blue.jpg', '/models/queen.jpg'],
    featured: true,
    tag: 'रूफ कैरियर · बॉटल होल्डर',
    desc: 'लाइट ब्लू बॉडी, स्टेनलेस स्टील फ्रेम और रूफ कैरियर — पैसेंजर के साथ सामान ढोने वालों की पहली पसंद। रेड कलर (3 स्पॉटलाइट के साथ) में भी उपलब्ध।',
    points: ['रूफ कैरियर व LED लाइट बार', 'स्टेनलेस स्टील फ्रेम व रेलिंग', 'म्यूज़िक सिस्टम, फैन व बॉटल होल्डर'],
    colors: ['लाइट ब्लू', 'रेड'],
    groups: [
      { title: 'बॉडी व फ्रेम', icon: 'Crown', items: ['स्टेनलेस स्टील फ्रेम, कैनोपी व रेलिंग', 'रूफ पर सामान रखने का कैरियर', 'फ्रंट पर "QUEEN" व "BADSHAH" नेमप्लेट', 'पीला-ऑरेंज रिफ्लेक्टिव स्ट्राइप'] },
      { title: 'आराम व सुरक्षा', icon: 'ShieldCheck', items: ['कुशन वाली ब्लैक पैसेंजर सीटें', 'पीले ग्रैब हैंडल', 'फायर एक्सटिंग्विशर', 'रूफ फैन'] },
      { title: 'लाइट व म्यूज़िक', icon: 'Zap', items: ['रूफ पर LED लाइट बार (रेड मॉडल में 3 स्पॉटलाइट)', 'म्यूज़िक सिस्टम पैनल', 'गोल हेडलाइट व इंडिकेटर'] },
      { title: 'सुविधाएं', icon: 'Wrench', items: ['साइड में बॉटल होल्डर', 'लॉक वाला स्टोरेज', 'कॉइल-स्प्रिंग फ्रंट सस्पेंशन'] },
    ],
    specs: [['टाइप', 'पैसेंजर e-Rickshaw'], ['कैनोपी', 'स्टेनलेस स्टील, फुल रूफ'], ['कलर', 'लाइट ब्लू, रेड'], ...COMMON_SPECS],
  },
  {
    slug: 'royal-smart',
    brand: 'Badshah',
    name: 'Royal Smart',
    nameHi: 'रॉयल स्मार्ट',
    icon: 'Gem',
    img: '/models/royal-smart.jpg',
    gallery: ['/models/royal-smart.jpg'],
    featured: true,
    tag: 'प्रीमियम · स्टेनलेस स्टील',
    desc: 'ग्रीन बॉडी, अंबर कैनोपी और चमकता स्टेनलेस स्टील — रॉयल लुक के साथ अलॉय व्हील, रूफ कैरियर और पूरे फीचर्स।',
    points: ['अलॉय व्हील व स्टेनलेस स्टील फ्रेम', 'रूफ कैरियर व LED लाइट बार', 'म्यूज़िक सिस्टम, फैन व बॉटल होल्डर'],
    colors: ['ग्रीन'],
    groups: [
      { title: 'बॉडी व फ्रेम', icon: 'Crown', items: ['ग्रीन बॉडी पैनल, स्टेनलेस स्टील फ्रेम व रेलिंग', 'अंबर कलर की कैनोपी', 'रूफ पर सामान रखने का कैरियर', 'फ्रंट पर "SMART" व "BADSHAH" नेमप्लेट'] },
      { title: 'आराम व सुरक्षा', icon: 'ShieldCheck', items: ['कुशन वाली ब्लैक पैसेंजर सीटें', 'पीले ग्रैब हैंडल', 'फायर एक्सटिंग्विशर', 'रूफ फैन व विंडशील्ड वाइपर'] },
      { title: 'लाइट व म्यूज़िक', icon: 'Zap', items: ['रूफ पर LED लाइट बार', 'म्यूज़िक सिस्टम पैनल', 'बड़ी गोल हेडलाइट, ऑरेंज इंडिकेटर'] },
      { title: 'पहिए व सस्पेंशन', icon: 'Bike', items: ['स्पोक डिज़ाइन अलॉय फ्रंट व्हील', 'कॉइल-स्प्रिंग फ्रंट सस्पेंशन', 'साइड में बॉटल होल्डर', 'पीला-लाल फ्लोर बॉर्डर'] },
    ],
    specs: [['टाइप', 'पैसेंजर e-Rickshaw'], ['कैनोपी', 'स्टेनलेस स्टील, अंबर रूफ'], ['कलर', 'ग्रीन'], ...COMMON_SPECS],
  },
  {
    slug: 'loader',
    brand: 'Badshah',
    name: 'Loader',
    nameHi: 'लोडर',
    icon: 'Store',
    img: '/models/loader.jpg',
    gallery: ['/models/loader.jpg'],
    featured: true,
    tag: 'माल ढुलाई · कार्गो',
    desc: 'सामान ढोने वाले व्यापारियों के लिए — बंद कार्गो बॉक्स, ड्राइवर केबिन की छत और मजबूत बॉडी के साथ रोज़ की ढुलाई आसान।',
    points: ['बंद मेटल कार्गो बॉक्स', 'ड्राइवर केबिन की छत', 'मजबूत सेफ्टी गार्ड व सस्पेंशन'],
    colors: ['रेड'],
    groups: [
      { title: 'कार्गो बॉडी', icon: 'Store', items: ['पीले बॉर्डर वाला बंद मेटल कार्गो बॉक्स', 'सामान की सुरक्षा के लिए पैनल बॉडी', 'साइड/रियर पर Badshah E-Rickshaw ब्रांडिंग'] },
      { title: 'ड्राइवर केबिन', icon: 'ShieldCheck', items: ['ब्लैक फ्रेम की कैनोपी, ऊपर छत', 'कुशन वाली ब्लैक सीट', 'रियर-व्यू मिरर', 'सफेद "BADSHAH" नेमप्लेट'] },
      { title: 'लाइट व कंट्रोल', icon: 'Zap', items: ['गोल हेडलाइट व ऑरेंज इंडिकेटर', 'म्यूज़िक/रिमोट कंट्रोल', 'आगे ब्लैक सेफ्टी गार्ड'] },
      { title: 'पहिए व सस्पेंशन', icon: 'Bike', items: ['कॉइल-स्प्रिंग फ्रंट सस्पेंशन', 'क्रोम अलॉय स्टाइल रियर व्हील', 'चौड़ा फ्रंट टायर'] },
    ],
    specs: [['टाइप', 'लोडर (माल ढुलाई) e-Rickshaw'], ['बॉडी', 'बंद मेटल कार्गो बॉक्स'], ['कलर', 'रेड'], ...COMMON_SPECS],
  },
  {
    slug: 'inpower-plus',
    brand: 'M-Power',
    name: 'Inpower Plus',
    nameHi: 'इनपावर प्लस',
    icon: 'Zap',
    img: inpowerPlusPhoto,
    featured: false,
    tag: '100-120 km रेंज',
    desc: 'रोज़ाना शहर में चलने के लिए — एक बार चार्ज में 100-120 km तक रेंज, टॉप स्पीड 25 km/hr तक।',
    points: ['100-120 km रेंज प्रति चार्ज', 'EASTMAN/LIVGUARD बैटरी', 'FM रेडियो, मोबाइल चार्जर व लगेज स्पेस'],
    colors: [],
    groups: [],
    features: ['100-120 km रेंज प्रति चार्ज', 'टॉप स्पीड 25 km/hr तक', 'EASTMAN/LIVGUARD बैटरी', 'FM रेडियो', 'मोबाइल चार्जर', 'लगेज स्पेस'],
    specs: [['ब्रांड', 'M-Power'], ['रेंज', '100-120 km प्रति चार्ज'], ['टॉप स्पीड', '25 km/hr तक'], ['बैटरी', 'EASTMAN / LIVGUARD'], ['कीमत', 'शोरूम पर संपर्क करें']],
  },
  {
    slug: 'inpower-pro',
    brand: 'M-Power',
    name: 'Inpower Pro',
    nameHi: 'इनपावर प्रो',
    icon: 'Award',
    img: inpowerProPhoto,
    featured: false,
    tag: '1100 वॉट मोटर',
    desc: 'ज़्यादा माइलेज और मजबूती चाहने वालों के लिए — पावरफुल मोटर और ब्रांडेड टायर के साथ।',
    points: ['1100 वॉट पावरफुल मोटर', 'ब्रांडेड टायर (TVS/CEAT/RALCO)', 'वारंटी-बैक्ड मोटर व मजबूत सस्पेंशन'],
    colors: [],
    groups: [],
    features: ['1100 वॉट पावरफुल मोटर', 'ब्रांडेड टायर (TVS/CEAT/RALCO)', 'वारंटी-बैक्ड मोटर', 'मजबूत सस्पेंशन'],
    specs: [['ब्रांड', 'M-Power'], ['मोटर', '1100 वॉट'], ['टायर', 'TVS / CEAT / RALCO'], ['कीमत', 'शोरूम पर संपर्क करें']],
  },
]

export const getModel = (slug) => MODELS.find((m) => m.slug === slug)
export const modelWhatsApp = (m) => buildWhatsAppLink(COMPANY.customerCareNumber, WA(`${m.nameHi} (${m.name})`))

export const LINEUP_IMAGE = '/models/lineup.jpg'
export const ABOUT_IMAGE = '/models/about-us.jpg' // full original group photo with the "About Us" banner
export const HERO_VIDEO = { src: '/video/badshah-smart-ss.mp4', poster: '/video/badshah-smart-ss-poster.jpg' }

export const SERVICES = [
  {
    icon: 'Percent',
    title: 'आसान फाइनेंस',
    desc: '₹34,999 से डाउन पेमेंट शुरू, 0% ब्याज दर पर आसान किस्तों में — बिना झंझट के अपनी गाड़ी घर लाएं।',
  },
  {
    icon: 'FileCheck2',
    title: 'RTO रजिस्ट्रेशन',
    desc: 'गाड़ी की पूरी RTO रजिस्ट्रेशन प्रक्रिया हमारी टीम खुद पूरी करती है — आपको कहीं भागदौड़ नहीं करनी।',
  },
  {
    icon: 'Wrench',
    title: '3 महीने फ्री सर्विस',
    desc: 'खरीद के बाद 3 महीने तक फ्री सर्विस, ऑयल सहित — शुरुआती दिनों की टेंशन खत्म।',
  },
  {
    icon: 'ShieldCheck',
    title: '1 महीने की फुल गारंटी',
    desc: 'हर गाड़ी पर 1 महीने की पूरी गारंटी — भरोसे के साथ खरीदारी।',
  },
  {
    icon: 'Store',
    title: 'डीलर पॉइंट खोलें',
    desc: 'अपने क्षेत्र में खुद का शोरूम खोलना चाहते हैं? फाइनेंस और रजिस्ट्रेशन सपोर्ट के साथ हमसे जुड़ें।',
  },
];
