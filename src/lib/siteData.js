// Central data for the Hindustan Motors site — one place to update
// branch contacts, models, and shared links so every section stays in sync.


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
//  - highlights: 3 short chips shown on the card
//  - specs / warranty: rows of the spec table (from the company's spec sheets)
//  - colors: [{ name, hex }] shown as swatches
// Only list what is on the company's spec sheets or visible on the vehicle.
// Chetak and Loader have no spec sheet yet, so they only show highlights.
export const ACCESSORIES = [
  'फ्रंट ग्लास',
  'टूल किट / जैक',
  'फायर एक्सटिंग्विशर',
  'केबिन लाइट',
  'म्यूज़िक सिस्टम',
  'फुट मैट',
  'लगेज कैरियर',
  'फॉग लाइट',
]

const SHEET_COLORS = [
  { name: 'Cherry', hex: '#ED1C24' },
  { name: 'Blue', hex: '#3953A4' },
  { name: 'Purple', hex: '#6B3F98' },
  { name: 'Orange', hex: '#F05A3C' },
  { name: 'Green', hex: '#00A651' },
  { name: 'Gray', hex: '#6D6E70' },
  { name: 'Metallic Gold', hex: '#D4AF37' },
]

const WARRANTY = [
  ['कंट्रोलर वारंटी', '6 महीने'],
  ['मोटर वारंटी', '6 महीने'],
  ['Badshah मीटर', '5000 km / 3 महीने'],
]

const tyreSpecs = [
  ['टायर', 'CEAT / MRF / JK'],
  ['टायर साइज़', '3.75×12 mm'],
  ['स्टेपनी कवर', 'Rexine / ABS'],
]

export const MODELS = [
  {
    slug: 'badshah',
    brand: 'Badshah',
    name: 'Badshah MS',
    nameHi: 'बादशाह MS',
    img: '/models/badshah.jpg',
    gallery: ['/models/badshah.jpg'],
    featured: true,
    tag: 'फ्लैगशिप',
    desc: 'ब्लू बॉडी, स्टेनलेस फ्रेम व रूफ कैरियर वाला फ्लैगशिप मॉडल।',
    highlights: ['1100 W मोटर', 'CEAT/MRF/JK टायर', 'मोटर वारंटी 6 महीने'],
    colors: SHEET_COLORS,
    specs: [['मोटर', 'CY Gold / Badshah · 1100 W'], ['कंट्रोलर', 'CY Gold / Badshah'], ...tyreSpecs, ...WARRANTY],
    accessories: ACCESSORIES,
  },
  {
    slug: 'chetak',
    brand: 'Badshah',
    name: 'Chetak',
    nameHi: 'चेतक',
    img: '/models/chetak.jpg',
    gallery: ['/models/chetak.jpg'],
    featured: true,
    tag: 'फुल फीचर्ड',
    desc: 'टील-ब्लू बॉडी, ब्लैक कैनोपी और कुशन सीटें।',
    highlights: ['फायर एक्सटिंग्विशर', 'म्यूज़िक सिस्टम', 'रूफ फैन'],
    colors: [{ name: 'Teal Blue', hex: '#1B8DB0' }],
    specs: [],
    accessories: [],
  },
  {
    slug: 'smart',
    brand: 'Badshah',
    name: 'Smart',
    nameHi: 'स्मार्ट',
    img: '/models/smart-orange.jpg',
    video: '/video/badshah-smart-ss.mp4',
    gallery: ['/models/smart-orange.jpg', '/models/smart-ss.jpg', '/models/smart.jpg'],
    featured: true,
    tag: 'MS · SS (स्टेनलेस)',
    desc: 'चमकता स्टेनलेस स्टील फ्रेम — Smart MS व Smart SS।',
    highlights: ['1100 W मोटर', 'CEAT/MRF/JK टायर', 'मोटर वारंटी 6 महीने'],
    colors: SHEET_COLORS,
    specs: [['मोटर', 'CY Gold / Badshah / Nanya · 1100 W'], ['कंट्रोलर', 'CY Gold / Badshah / Nanya'], ...tyreSpecs, ...WARRANTY],
    accessories: ACCESSORIES,
  },
  {
    slug: 'queen',
    brand: 'Badshah',
    name: 'Queen MS',
    nameHi: 'क्वीन MS',
    img: '/models/queen-blue.jpg',
    gallery: ['/models/queen-blue.jpg', '/models/queen.jpg'],
    featured: true,
    tag: 'रूफ कैरियर',
    desc: 'लाइट ब्लू बॉडी, रूफ कैरियर व बॉटल होल्डर। रेड में भी।',
    highlights: ['1100 W मोटर', 'CEAT/MRF/JK टायर', 'रूफ कैरियर'],
    colors: [{ name: 'Light Blue', hex: '#8FC8EE' }, { name: 'Red', hex: '#B3262E' }],
    specs: [['मोटर', 'CY Gold / Nanya · 1100 W'], ['कंट्रोलर', 'CY Gold / Nanya'], ...tyreSpecs],
    accessories: ACCESSORIES,
  },
  {
    slug: 'royal-smart',
    brand: 'Badshah',
    name: 'Smart Royal SS',
    nameHi: 'स्मार्ट रॉयल SS',
    img: '/models/royal-smart.jpg',
    gallery: ['/models/royal-smart.jpg'],
    featured: true,
    tag: 'प्रीमियम स्टेनलेस',
    desc: 'ग्रीन बॉडी, अंबर कैनोपी व अलॉय व्हील।',
    highlights: ['1100 W मोटर', 'CEAT/MRF/JK टायर', 'अलॉय व्हील'],
    colors: [{ name: 'Green', hex: '#4CB848' }],
    specs: [['मोटर', 'CY Gold / Nanya · 1100 W'], ['कंट्रोलर', 'CY Gold / Nanya'], ...tyreSpecs],
    accessories: ACCESSORIES,
  },
  {
    slug: 'loader',
    brand: 'Badshah',
    name: 'Loader',
    nameHi: 'लोडर',
    img: '/models/loader.jpg',
    gallery: ['/models/loader.jpg'],
    featured: true,
    tag: 'माल ढुलाई',
    desc: 'बंद कार्गो बॉक्स वाला माल ढुलाई का मॉडल।',
    highlights: ['बंद कार्गो बॉक्स', 'ब्लैक कैनोपी', 'सेफ्टी गार्ड'],
    colors: [{ name: 'Red', hex: '#C4161C' }],
    specs: [],
    accessories: [],
  },
]

export const getModel = (slug) => MODELS.find((m) => m.slug === slug)
export const modelWhatsApp = (m) => buildWhatsAppLink(COMPANY.customerCareNumber, WA(`${m.nameHi} (${m.name})`))

export const LINEUP_IMAGE = '/models/lineup.jpg'
export const ABOUT_IMAGE = '/models/about-us.jpg' // full original group photo with the "About Us" banner
// Hero clips play one after another, in this order, then loop.
export const HERO_CLIPS = [
  { src: '/video/smart-ss.mp4', poster: '/video/smart-ss.jpg', name: 'Badshah Smart SS', to: '/models/smart', bg: '#DE6448' },
  { src: '/video/royal-queen.mp4', poster: '/video/royal-queen.jpg', name: 'Badshah Queen', to: '/models/queen', bg: '#42DEF1' },
  { src: '/video/royal-smart.mp4', poster: '/video/royal-smart.jpg', name: 'Badshah Royal Smart', to: '/models/royal-smart', bg: '#12E19B' },
]

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
