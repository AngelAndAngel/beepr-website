'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 翻译数据
const translations = {
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.business': 'Business Model',
    'nav.expansion': 'Global Expansion',
    'nav.fleet': 'Fleet',
    'nav.partnership': 'Partner with us',
    'nav.contact': 'Contact Us',
    'nav.career': 'Career',
    
    // Hero Section
    'hero.badge': 'Global BEV Smart Shared Mobility Solution Provider',
    'hero.title': 'Every Mile is A Promise',
    'hero.description': 'Creating high-quality green shared mobility ecosystems through owned fleet + cross-platform synergy, delivering differentiated mobility experiences with premium electric vehicles.',
    'hero.cta': 'Explore Partnership',
    'hero.learn-more': 'View Business Plan',
    
    // Business Plan Section
    'business.title': 'BUSINESS PLAN',
    'business.subtitle': 'Highlights',
    'business.strategy.title': 'Corporate Strategy and Positioning',
    'business.strategy.point1': 'As a global creator of high-quality green shared mobility ecosystems, our core model revolves around \'owned fleet + cross-platform synergy\', focusing on operating premium electric vehicle (EV) models to deliver differentiated mobility experiences through upgraded vehicle quality and standardized services.',
    'business.strategy.point2': 'We closely engage with ride-hailing platforms and aggregators (To be a Car Partners +Driver Partners) to accurately match regional market demands and build an integrated digital ecosystem spanning \'people/driver-vehicles-depots-platforms\'.',
    'business.strategy.point3': 'Our mission: Every mile is a promise.',
    
    // Mission & Vision Section
    'mission.title': 'Our Mission',
    'mission.description': 'Every Mile is A Promise - delivering sustainable mobility solutions that create value for drivers, partners, and communities.',
    'vision.title': 'Our Vision',
    'vision.description': 'To be One of the TOP 10 C+D Partners WorldWide, leading the transformation to sustainable mobility.',
    'position.title': 'Our Position',
    'position.description': 'Global BEV Smart Shared Mobility Solution Provider focused on premium electric vehicle operations.',
    
    // Early Mover Advantages Section
    'advantages.title': 'Early Mover Advantages',
    'advantages.subtitle': 'Early mover in the sustainable BEV Shared Mobility Industry market',
    'advantages.service.title': 'Target Tier One Service',
    'advantages.service.description': 'Select high-quality BEVs and establish industry-leading service standards across dimensions like vehicle delivery timeliness, full-cycle maintenance response, and customized service solutions.',
    'advantages.expansion.title': 'Global Expansion Strategy',
    'advantages.expansion.description': 'By laying out key overseas markets, we tap into the differentiated demands and growth potential of BEV CP + DP mode in different regions, and preemptively secure international market shares.',
    'advantages.ecosystem.title': 'Iconic ECO SYSTEM',
    'advantages.ecosystem.description': 'Through data interconnection and process collaboration, we reduce costs, improve efficiency, and optimize the entire operational value chain with greater efficiency and operational optimization.',
    
    // Global Expansion Section
    'expansion.title': 'Global Expansion Strategy',
    'expansion.subtitle': 'Strategic market entry across key regions to capture differentiated demands and growth potential',
    'expansion.phase1.title': 'Indonesia Market Penetration',
    'expansion.phase1.description': 'Initial 1,000 vehicles expanding to 10,000–15,000 vehicles with deep market penetration strategy.',
    'expansion.phase2.title': 'Southeast Asia Expansion',
    'expansion.phase2.description': 'Singapore, Malaysia, Thailand, Vietnam - replicating the Indonesia model via local partnerships.',
    'expansion.phase3.title': 'Global Markets',
    'expansion.phase3.description': 'Netherlands & Pan-EU, Latin America & Mexico - exploring new energy hubs and demographic dividends.',
    'expansion.financial.title': 'Financial Projection',
    'expansion.financial.subtitle': '1,000 Vehicle Fleet - 3 Year Model',
    'expansion.financial.2025': '2025 (Launch Year)',
    'expansion.financial.2026': '2026E',
    'expansion.financial.2027': '2027E (Breakeven)',
    'expansion.financial.2028': '2028E',
    
    // Fleet Section
    'fleet.title': 'Premium Electric Fleet',
    'fleet.subtitle': '100% BEV fleet with high-quality models across different service tiers',
    'fleet.comfort.title': 'Entry Level',
    'fleet.comfort.description': 'Reliable and efficient electric vehicles for everyday mobility needs',
    'fleet.premium.title': 'Mid-Tier',
    'fleet.premium.description': 'Enhanced comfort and technology for premium mobility experiences',
    'fleet.luxury.title': 'High-End',
    'fleet.luxury.description': 'Luxury electric vehicles with premium features and superior comfort',
    
    // News Section
    'news.title': 'NEWS',
    'news.card1.title': 'Global Expansion Update',
    'news.card1.description': 'Latest developments in our international market expansion strategy',
    'news.card2.title': 'Fleet Technology Advancement',
    'news.card2.description': 'New electric vehicle models and smart mobility solutions',
    'news.card3.title': 'Partnership Announcements',
    'news.card3.description': 'Strategic partnerships driving sustainable transportation',
    
    // Partnership Section
    'partnership.title': 'Co-create a Green Mobility Future',
    'partnership.description': 'Join Beepr Trans and Share Global Growth Dividends. Partner with us to revolutionize sustainable transportation.',
    'partnership.inquiry': 'Partnership Inquiry',
    'partnership.download': 'Download Business Plan',
    'partnership.contact': 'Contact:',
    
    // Contact Information
    'contact.email.partnership': 'Company Email for partnership: project_bt_sea@beeprtrans.com',
    'contact.email.career': 'Company Email for career: recruitment@beeprtrans.com',
    'contact.whatsapp': 'Company Whatsapp: 081234567890',
    'contact.address': 'Address: Citra Tower, Lantai 26, North Office Tower, Jl. Benyamin Sueb, Kebon Kosong, Kemayoran, Jakarta Pusat',
    'contact.connect': 'Connect with us!',
    
    // Footer Section
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.business': 'Business Model',
    'footer.strategy': 'Global Strategy',
    'footer.services': 'Services',
    'footer.fleet': 'Electric Fleet',
    'footer.driver': 'Driver Partnership',
    'footer.platform': 'Platform Integration',
    'footer.contact': 'Contact',
    'footer.hq': 'Hong Kong (Global HQ)',
    'footer.indonesia': 'Indonesia (Phase 1)',
    'footer.copyright': '© 2025 Beepr Trans SEA Investment Limited. Every Mile is A Promise.',
    
    // Language Switcher
    'language.english': 'English',
    'language.indonesian': 'Indonesian',
  },
  id: {
    // Navigation
    'nav.about': 'Tentang Kami',
    'nav.business': 'Model Bisnis',
    'nav.expansion': 'Ekspansi Global',
    'nav.fleet': 'Armada',
    'nav.partnership': 'Kemitraan',
    'nav.contact': 'Hubungi Kami',
    'nav.career': 'Karir',
    
    // Hero Section
    'hero.badge': 'Penyedia Solusi Mobilitas Berbagi Cerdas BEV Global',
    'hero.title': 'Setiap Mil adalah Janji',
    'hero.description': 'Menciptakan ekosistem mobilitas berbagi hijau berkualitas tinggi melalui armada milik + sinergi lintas platform, memberikan pengalaman mobilitas yang berbeda dengan kendaraan listrik premium.',
    'hero.cta': 'Jelajahi Kemitraan',
    'hero.learn-more': 'Lihat Rencana Bisnis',
    
    // Business Plan Section
    'business.title': 'RENCANA BISNIS',
    'business.subtitle': 'Sorotan',
    'business.strategy.title': 'Strategi dan Posisi Perusahaan',
    'business.strategy.point1': 'Sebagai pencipta global ekosistem mobilitas berbagi hijau berkualitas tinggi, model inti kami berkisar pada \'armada milik + sinergi lintas platform\', berfokus pada pengoperasian model kendaraan listrik (EV) premium untuk memberikan pengalaman mobilitas yang berbeda melalui peningkatan kualitas kendaraan dan layanan yang terstandarisasi.',
    'business.strategy.point2': 'Kami terlibat erat dengan platform ride-hailing dan agregator (Menjadi Mitra Mobil + Mitra Pengemudi) untuk mencocokkan permintaan pasar regional secara akurat dan membangun ekosistem digital terintegrasi yang mencakup \'orang/pengemudi-kendaraan-depot-platform\'.',
    'business.strategy.point3': 'Misi kami: Setiap mil adalah janji.',
    
    // Mission & Vision Section
    'mission.title': 'Misi Kami',
    'mission.description': 'Setiap Mil adalah Janji - memberikan solusi mobilitas berkelanjutan yang menciptakan nilai bagi pengemudi, mitra, dan komunitas.',
    'vision.title': 'Visi Kami',
    'vision.description': 'Menjadi Salah Satu dari TOP 10 Mitra C+D di Seluruh Dunia, memimpin transformasi menuju mobilitas berkelanjutan.',
    'position.title': 'Posisi Kami',
    'position.description': 'Penyedia Solusi Mobilitas Berbagi Cerdas BEV Global yang berfokus pada operasi kendaraan listrik premium.',
    
    // Early Mover Advantages Section
    'advantages.title': 'Keunggulan Penggerak Awal',
    'advantages.subtitle': 'Penggerak awal di pasar Industri Mobilitas Berbagi BEV berkelanjutan',
    'advantages.service.title': 'Layanan Tingkat Satu Target',
    'advantages.service.description': 'Memilih BEV berkualitas tinggi dan menetapkan standar layanan terdepan di industri di berbagai dimensi seperti ketepatan waktu pengiriman kendaraan, respons pemeliharaan siklus penuh, dan solusi layanan yang disesuaikan.',
    'advantages.expansion.title': 'Strategi Ekspansi Global',
    'advantages.expansion.description': 'Dengan memetakan pasar luar negeri utama, kami memanfaatkan permintaan yang berbeda dan potensi pertumbuhan mode BEV CP + DP di berbagai wilayah, dan mengamankan pangsa pasar internasional secara preventif.',
    'advantages.ecosystem.title': 'SISTEM ECO Ikonik',
    'advantages.ecosystem.description': 'Melalui interkoneksi data dan kolaborasi proses, kami mengurangi biaya, meningkatkan efisiensi, dan mengoptimalkan seluruh rantai nilai operasional dengan efisiensi yang lebih besar dan optimasi operasional.',
    
    // Global Expansion Section
    'expansion.title': 'Strategi Ekspansi Global',
    'expansion.subtitle': 'Masuk pasar strategis di wilayah kunci untuk menangkap permintaan yang berbeda dan potensi pertumbuhan',
    'expansion.phase1.title': 'Penetrasi Pasar Indonesia',
    'expansion.phase1.description': 'Awal 1.000 kendaraan berkembang menjadi 10.000–15.000 kendaraan dengan strategi penetrasi pasar yang mendalam.',
    'expansion.phase2.title': 'Ekspansi Asia Tenggara',
    'expansion.phase2.description': 'Singapura, Malaysia, Thailand, Vietnam - mereplikasi model Indonesia melalui kemitraan lokal.',
    'expansion.phase3.title': 'Pasar Global',
    'expansion.phase3.description': 'Belanda & Pan-EU, Amerika Latin & Meksiko - menjelajahi pusat energi baru dan dividen demografis.',
    'expansion.financial.title': 'Proyeksi Keuangan',
    'expansion.financial.subtitle': 'Armada 1.000 Kendaraan - Model 3 Tahun',
    'expansion.financial.2025': '2025 (Tahun Peluncuran)',
    'expansion.financial.2026': '2026E',
    'expansion.financial.2027': '2027E (Impas)',
    'expansion.financial.2028': '2028E',
    
    // Fleet Section
    'fleet.title': 'Armada Listrik Premium',
    'fleet.subtitle': 'Armada 100% BEV dengan model berkualitas tinggi di berbagai tingkat layanan',
    'fleet.comfort.title': 'Tingkat Dasar',
    'fleet.comfort.description': 'Kendaraan listrik yang andal dan efisien untuk kebutuhan mobilitas sehari-hari',
    'fleet.premium.title': 'Tingkat Menengah',
    'fleet.premium.description': 'Kenyamanan dan teknologi yang ditingkatkan untuk pengalaman mobilitas premium',
    'fleet.luxury.title': 'Tingkat Tinggi',
    'fleet.luxury.description': 'Kendaraan listrik mewah dengan fitur premium dan kenyamanan superior',
    
    // News Section
    'news.title': 'BERITA',
    'news.card1.title': 'Update Ekspansi Global',
    'news.card1.description': 'Perkembangan terbaru dalam strategi ekspansi pasar internasional kami',
    'news.card2.title': 'Kemajuan Teknologi Armada',
    'news.card2.description': 'Model kendaraan listrik baru dan solusi mobilitas cerdas',
    'news.card3.title': 'Pengumuman Kemitraan',
    'news.card3.description': 'Kemitraan strategis yang mendorong transportasi berkelanjutan',
    
    // Partnership Section
    'partnership.title': 'Bersama Menciptakan Masa Depan Mobilitas Hijau',
    'partnership.description': 'Bergabunglah dengan Beepr Trans dan Bagikan Dividen Pertumbuhan Global. Bermitra dengan kami untuk merevolusi transportasi berkelanjutan.',
    'partnership.inquiry': 'Pertanyaan Kemitraan',
    'partnership.download': 'Unduh Rencana Bisnis',
    'partnership.contact': 'Kontak:',
    
    // Contact Information
    'contact.email.partnership': 'Email Perusahaan untuk kemitraan: project_bt_sea@beeprtrans.com',
    'contact.email.career': 'Email Perusahaan untuk karir: recruitment@beeprtrans.com',
    'contact.whatsapp': 'Whatsapp Perusahaan: 081234567890',
    'contact.address': 'Alamat: Citra Tower, Lantai 26, North Office Tower, Jl. Benyamin Sueb, Kebon Kosong, Kemayoran, Jakarta Pusat',
    'contact.connect': 'Terhubung dengan kami!',
    
    // Footer Section
    'footer.company': 'Perusahaan',
    'footer.about': 'Tentang Kami',
    'footer.business': 'Model Bisnis',
    'footer.strategy': 'Strategi Global',
    'footer.services': 'Layanan',
    'footer.fleet': 'Armada Listrik',
    'footer.driver': 'Kemitraan Pengemudi',
    'footer.platform': 'Integrasi Platform',
    'footer.contact': 'Kontak',
    'footer.hq': 'Hong Kong (Kantor Pusat Global)',
    'footer.indonesia': 'Indonesia (Fase 1)',
    'footer.copyright': '© 2025 Beepr Trans SEA Investment Limited. Setiap Mil adalah Janji.',
    
    // Language Switcher
    'language.english': 'Bahasa Inggris',
    'language.indonesian': 'Bahasa Indonesia',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // 从localStorage加载语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // 保存语言设置到localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}