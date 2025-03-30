// Çeviri verileri (script.js)
const translations = {
    en: {
        // Header
        "home": "Home",
        "categories": "Categories",
        "submit": "Submit",
        "about": "About",
        "search-placeholder": "Search media...",
        
        // About Page
        "hero-title": "About Us",
        "hero-subtitle": "Our mission to preserve lost media culture",
        "about-heading": "Who We Are?",
        "about-text-1": "Not Found So Far was founded in 2023...",
        "mission-heading": "Our Mission",
        "media-items": "Media Items",
        "community-members": "Community Members",
        "found-items": "Found Items",
        "countries": "Countries",
        "team-heading": "Core Team",
        "founder-name": "Kairas5361",
        "founder-role": "Founder & Archive Manager",
        "researcher-name": "Zeynep K.",
        "researcher-role": "Senior Researcher",
        "dev-name": "Emre T.",
        "dev-role": "Web Developer",
        "faq-heading": "Frequently Asked Questions",
        "faq1-q": "What is lost media?",
        "faq1-a": "Lost media refers to film, TV shows...",
        "faq2-q": "What about copyright status?",
        "faq2-a": "Content in our archive is for research...",
        "faq3-q": "How can I contribute?",
        "faq3-a": "You can add information through our 'Submit' page...",
        
        // Footer
        "about-lma": "About LostMediaArchive",
        "quick-links": "Quick Links",
        "terms": "Terms of Use",
        "privacy": "Privacy Policy",
        "contact": "Contact",
        "faq": "FAQ",
        "contact-us": "Contact Us",
        "rights": "All rights reserved.",
        "non-profit": "This site is non-profit."
    },
    tr: {
        // Header
        "home": "Ana Sayfa",
        "categories": "Kategoriler",
        "submit": "Gönderi Yap",
        "about": "Hakkında",
        "search-placeholder": "Medya ara...",
        
        // About Page
        "hero-title": "Hakkımızda",
        "hero-subtitle": "Kayıp medya kültürünü koruma misyonumuz",
        "about-heading": "Biz Kimiz?",
        "about-text-1": "Not Found So Far, 2023 yılında...",
        "mission-heading": "Misyonumuz",
        "media-items": "Medya Öğesi",
        "community-members": "Topluluk Üyesi",
        "found-items": "Bulunan Eser",
        "countries": "Ülke",
        "team-heading": "Temel Ekip",
        "founder-name": "Kairas5361",
        "founder-role": "Kurucu & Arşiv Yöneticisi",
        "researcher-name": "Zeynep K.",
        "researcher-role": "Kıdemli Araştırmacı",
        "dev-name": "Emre T.",
        "dev-role": "Web Geliştirici",
        "faq-heading": "Sıkça Sorulan Sorular",
        "faq1-q": "Kayıp medya nedir?",
        "faq1-a": "Kayıp medya, varlığı bilinen ancak...",
        "faq2-q": "İçeriklerin telif hakkı durumu nedir?",
        "faq2-a": "Arşivimizdeki içerikler yalnızca araştırma...",
        "faq3-q": "Nasıl katkıda bulunabilirim?",
        "faq3-a": "'Gönderi Yap' sayfamızdan bilgi ekleyebilir...",
        
        // Footer
        "about-lma": "Not Found So Far Hakkında",
        "quick-links": "Hızlı Linkler",
        "terms": "Kullanım Şartları",
        "privacy": "Gizlilik Politikası",
        "contact": "İletişim",
        "faq": "SSS",
        "contact-us": "Bize Ulaşın",
        "rights": "Tüm hakları saklıdır.",
        "non-profit": "Bu site kâr amacı gütmemektedir."
    }
};

// Dil kontrol fonksiyonu
function applyLanguage(lang) {
    // Sayfa başlığı
    document.title = lang === 'en' ? 'Not Found So Far | About' : 'Not Found So Far | Hakkında';
    
    // Tüm çeviri öğelerini güncelle
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Özel durumlar
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = translations[lang]['search-placeholder'];
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Dil seçici event
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLang = this.value;
            localStorage.setItem('language', selectedLang);
            applyLanguage(selectedLang);
        });
        
        // Kayıtlı dili yükle
        const savedLang = localStorage.getItem('language') || 'tr';
        languageSelector.value = savedLang;
        applyLanguage(savedLang);
    }
});
