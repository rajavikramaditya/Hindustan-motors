// Central data for the Hindustan Motors site — one place to update
// branch contacts, models, and shared links so every section stays in sync.

import badshahMsPhoto from '@/assets/badshahMsPhoto'
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
// `img` = public/ path or imported photo. `video` is optional.
export const MODELS = [
  {
    slug: 'smart-ss',
    brand: 'Badshah',
    name: 'Badshah Smart SS',
    nameHi: 'बादशाह स्मार्ट SS',
    icon: 'Sparkles',
    img: '/models/smart-ss.jpg',
    video: '/video/badshah-smart-ss.mp4',
    featured: true,
    tag: 'नया · स्टेनलेस स्टील',
    desc: 'चमकदार स्टेनलेस स्टील बॉडी, रेड फिनिश और फुल कैनोपी — सवारी भी, शो-ऑफ भी। रोज़ की कमाई वाली गाड़ी जो दूर से अलग दिखे।',
    points: ['स्टेनलेस स्टील फ्रेम व कैनोपी', 'रूफ पर LED लाइट बार', 'आरामदायक कुशन सीटिंग'],
    features: ['स्टेनलेस स्टील फ्रेम, रूफ व पैसेंजर रेलिंग', 'रूफ पर LED लाइट बार', 'गोल हेडलाइट व ऑरेंज इंडिकेटर', 'फ्रंट पर "BADSHAH" नेमप्लेट', 'फुल कैनोपी के साथ पैसेंजर सीटिंग', 'रेड बॉडी, पीला-लाल रिफ्लेक्टिव बॉर्डर'],
    colors: ['रेड'],
  },
  {
    slug: 'chetak',
    brand: 'Badshah',
    name: 'Badshah Chetak',
    nameHi: 'बादशाह चेतक',
    icon: 'Zap',
    img: '/models/chetak.jpg',
    featured: true,
    tag: 'नया · फुल फीचर्ड',
    desc: 'ब्लू बॉडी, ब्लैक कुशन सीटें और फुल कैनोपी — चेतक में वो सब कुछ जो सवारी को आरामदायक और आपको सुरक्षित रखे।',
    points: ['ब्लैक कुशन सीटें व ग्रैब हैंडल', 'म्यूज़िक सिस्टम व रूफ फैन', 'फायर एक्सटिंग्विशर व वाइपर'],
    features: ['कुशन वाली ब्लैक पैसेंजर सीटें', 'सवारियों के लिए पीले ग्रैब हैंडल', 'फायर एक्सटिंग्विशर साथ में', 'म्यूज़िक सिस्टम व रूफ फैन', 'विंडशील्ड वाइपर के साथ फुल कैनोपी', 'रूफ पर LED लाइट बार व सामान रखने का कैरियर'],
    colors: ['ब्लू'],
  },
  {
    slug: 'queen',
    brand: 'Badshah',
    name: 'Badshah Queen',
    nameHi: 'बादशाह क्वीन',
    icon: 'Crown',
    img: '/models/queen.jpg',
    featured: true,
    tag: 'स्टेनलेस स्टील · 3 स्पॉटलाइट',
    desc: 'रेड बॉडी, स्टेनलेस स्टील छत और तीन ब्लू स्पॉटलाइट — शहर की भीड़ में भी सबसे अलग दिखने वाला मॉडल।',
    points: ['रूफ पर 3 स्पॉटलाइट', 'स्टेनलेस स्टील रेलिंग व छत', 'साउंड/म्यूज़िक पैनल'],
    features: ['रूफ पर 3 स्पॉटलाइट व LED बार', 'स्टेनलेस स्टील रेलिंग व कैनोपी', 'रेड बॉडी, ऑरेंज रिफ्लेक्टिव स्ट्राइप', 'म्यूज़िक/साउंड पैनल', 'चौड़ी पैसेंजर सीटिंग', 'अलॉय स्टाइल फ्रंट व्हील'],
    colors: ['रेड'],
  },
  {
    slug: 'smart',
    brand: 'Badshah',
    name: 'Badshah Smart',
    nameHi: 'बादशाह स्मार्ट',
    icon: 'Star',
    img: '/models/smart.jpg',
    featured: false,
    tag: 'ब्लैक-ब्लू',
    desc: 'ब्लैक फ्रेम व ब्लू बॉडी, बड़ी गोल हेडलाइट और LED बार — स्मार्ट लुक के साथ मजबूत बनावट।',
    points: ['LED रूफ लाइट बार', 'बड़ी गोल हेडलाइट', 'फ्रंट म्यूज़िक पैनल'],
    features: ['LED रूफ लाइट बार', 'बड़ी गोल हेडलाइट व इंडिकेटर', 'ब्लैक कैनोपी फ्रेम', 'फ्रंट पर म्यूज़िक पैनल', 'दमदार फ्रंट सस्पेंशन', 'ब्लू बॉडी पैनल'],
    colors: ['ब्लैक-ब्लू'],
  },
  {
    slug: 'royal',
    brand: 'Badshah',
    name: 'Badshah Royal',
    nameHi: 'बादशाह रॉयल',
    icon: 'Gem',
    img: '/models/royal-purple.jpg',
    featured: false,
    tag: 'पर्पल · रूफ कैरियर',
    desc: 'डीप पर्पल बॉडी, सफेद कुशन सीटें और रूफ कैरियर — पैसेंजर के साथ सामान ढोने वालों की पहली पसंद।',
    points: ['रूफ पर सामान का कैरियर', 'व्हाइट कुशन सीटें', 'साउंड सिस्टम पैनल'],
    features: ['रूफ पर सामान रखने का कैरियर', 'सफेद कुशन पैसेंजर सीटें', 'रूफ LED लाइट बार', 'साइड मिरर के साथ फुल कैनोपी', 'म्यूज़िक/साउंड सिस्टम पैनल', 'पर्पल बॉडी, पीला रिफ्लेक्टिव बॉर्डर'],
    colors: ['पर्पल'],
  },
  {
    slug: 'badshah-ms',
    brand: 'Badshah',
    name: 'Badshah MS',
    nameHi: 'बादशाह MS',
    icon: 'Users',
    img: badshahMsPhoto,
    featured: false,
    tag: 'प्रीमियम पैसेंजर',
    desc: 'रोज़ की पैसेंजर सवारी के लिए प्रीमियम मॉडल — मजबूत बॉडी, फुल कैनोपी छत और आरामदायक सीटिंग के साथ।',
    points: ['प्रीमियम पैसेंजर बॉडी', 'फुल कैनोपी व फ्रंट लाइटिंग', 'फाइनेंस व RTO सपोर्ट के साथ'],
    features: ['प्रीमियम पैसेंजर बॉडी', 'फुल कैनोपी छत', 'फ्रंट लाइटिंग', 'आरामदायक सीटिंग', 'फाइनेंस व RTO सपोर्ट'],
    colors: [],
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
    features: ['100-120 km रेंज प्रति चार्ज', 'टॉप स्पीड 25 km/hr तक', 'EASTMAN/LIVGUARD बैटरी', 'FM रेडियो', 'मोबाइल चार्जर', 'लगेज स्पेस'],
    colors: [],
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
    features: ['1100 वॉट पावरफुल मोटर', 'ब्रांडेड टायर (TVS/CEAT/RALCO)', 'वारंटी-बैक्ड मोटर', 'मजबूत सस्पेंशन'],
    colors: [],
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
