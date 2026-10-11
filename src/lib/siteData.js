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

export const MODELS = [
  {
    key: 'badshah-ms',
    brand: 'Badshah',
    name: 'Badshah MS',
    nameHi: 'बादशाह MS',
    icon: 'Users',
    photo: badshahMsPhoto,
    desc: 'रोज़ की पैसेंजर सवारी के लिए प्रीमियम मॉडल — मजबूत बॉडी, फुल कैनोपी छत और आरामदायक सीटिंग के साथ।',
    points: ['प्रीमियम पैसेंजर बॉडी', 'फुल कैनोपी व फ्रंट लाइटिंग', 'फाइनेंस व RTO सपोर्ट के साथ'],
  },
  {
    key: 'inpower-plus',
    brand: 'M-Power',
    name: 'Inpower Plus',
    nameHi: 'इनपावर प्लस',
    icon: 'Zap',
    photo: inpowerPlusPhoto,
    desc: 'रोज़ाना शहर में चलने के लिए — एक बार चार्ज में 100-120 km तक रेंज, टॉप स्पीड 25 km/hr तक।',
    points: ['100-120 km रेंज प्रति चार्ज', 'EASTMAN/LIVGUARD बैटरी', 'FM रेडियो, मोबाइल चार्जर व लगेज स्पेस'],
  },
  {
    key: 'inpower-pro',
    brand: 'M-Power',
    name: 'Inpower Pro',
    nameHi: 'इनपावर प्रो',
    icon: 'Star',
    photo: inpowerProPhoto,
    desc: 'ज़्यादा माइलेज और मजबूती चाहने वालों के लिए — पावरफुल मोटर और ब्रांडेड टायर के साथ।',
    points: ['1100 वॉट पावरफुल मोटर', 'ब्रांडेड टायर (TVS/CEAT/RALCO)', 'वारंटी-बैक्ड मोटर व मजबूत सस्पेंशन'],
  },
];

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
