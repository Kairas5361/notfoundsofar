// Çeviri verileri
const translations = {
    en: {
        "page-title": "Not Found So Far | Categories",
        "search-placeholder": "Search Categories...",
        "hero-title": "Media Categories",
        "hero-subtitle": "Explore lost media by type",
        "home": "Home",
        "categories": "Categories",
        "submit": "Submit",
        "about": "About",
        "main-categories": "Main Categories",
        "subcategories": "Subcategories",
        "media-count": "{count} media",
        "films": "Films",
        "films-desc": "Lost, canceled or rare films",
        "tv-shows": "TV Shows",
        "tv-desc": "Lost episodes and canceled shows",
        "commercials": "Commercials",
        "commercials-desc": "Lost or rare commercials",
        "music": "Music",
        "music-desc": "Lost albums and rare recordings",
        "view-category": "View Category",
        "horror-films": "Horror Films",
        "animation-films": "Animation Films",
        "canceled-films": "Canceled Films",
        "lost-episodes": "Lost Episodes",
        "pilot-episodes": "Pilot Episodes",
        "canceled-shows": "Canceled Shows",
        "video-games": "Video Games",
        "radio": "Radio Programs",
        "internet": "Internet Content",
        "category-stats": "Category Statistics",
        "found-media": "Found Media",
        "lost-media": "Lost Media",
        "partially-found": "Partially Found",
        "about-lma": "About LostMediaArchive",
        "about-desc": "A platform to archive and preserve lost media content.",
        "quick-links": "Quick Links",
        "terms": "Terms of Use",
        "privacy": "Privacy Policy",
        "contact": "Contact",
        "faq": "FAQ",
        "contact-us": "Contact Us",
        "rights": "All rights reserved.",
        "non-profit": "This site is non-profit.",
        "site-title": "LostMediaArchive",
        "site-subtitle": "Archive of lost and rare media content"
    },
    tr: {
        "page-title": "Kategoriler | Lost Media Arşivi",
        "search-placeholder": "Kategori ara...",
        "hero-title": "Medya Kategorileri",
        "hero-subtitle": "Kayıp medyaları türlerine göre keşfedin",
        "home": "Ana Sayfa",
        "categories": "Kategoriler",
        "submit": "Gönderi Yap",
        "about": "Hakkında",
        "main-categories": "Ana Kategoriler",
        "subcategories": "Alt Kategoriler",
        "media-count": "{count} medya",
        "films": "Filmler",
        "films-desc": "Kayıp, iptal edilmiş veya nadir filmler",
        "tv-shows": "TV Şovları",
        "tv-desc": "Kayıp bölümler ve iptal edilmiş şovlar",
        "commercials": "Reklamlar",
        "commercials-desc": "Kayıp veya nadir reklamlar",
        "music": "Müzik",
        "music-desc": "Kayıp albümler ve nadir kayıtlar",
        "view-category": "Kategoriyi Görüntüle",
        "horror-films": "Korku Filmleri",
        "animation-films": "Animasyon Filmler",
        "canceled-films": "İptal Edilmiş Filmler",
        "lost-episodes": "Kayıp Bölümler",
        "pilot-episodes": "Pilot Bölümler",
        "canceled-shows": "İptal Edilmiş Şovlar",
        "video-games": "Video Oyunları",
        "radio": "Radyo Programları",
        "internet": "İnternet İçerikleri",
        "category-stats": "Kategori İstatistikleri",
        "found-media": "Bulunan Medya",
        "lost-media": "Kayıp Medya",
        "partially-found": "Kısmen Bulunan",
        "about-lma": "LostMediaArşiv Hakkında",
        "about-desc": "Kaybolmuş medya içeriklerini arşivlemek için kurulmuş platform.",
        "quick-links": "Hızlı Linkler",
        "terms": "Kullanım Şartları",
        "privacy": "Gizlilik Politikası",
        "contact": "İletişim",
        "faq": "SSS",
        "contact-us": "Bize Ulaşın",
        "rights": "Tüm hakları saklıdır.",
        "non-profit": "Bu site kâr amacı gütmemektedir.",
        "site-title": "LostMediaArşiv",
        "site-subtitle": "Kaybolan ve nadir medya içeriklerinin arşivi"
    }
};

// Kullanıcı tercihlerini yönet
const userPreferences = {
    language: localStorage.getItem('language') || 'tr',
    theme: localStorage.getItem('theme') || 'light'
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    userPreferences.language = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Sayfa başlığını güncelle
    document.title = translations[lang]['page-title'];
    
    // Site başlık ve alt başlık
    document.getElementById('site-title').textContent = translations[lang]['site-title'];
    document.getElementById('site-subtitle').textContent = translations[lang]['site-subtitle'];
    
    // Arama çubuğu placeholder
    document.getElementById('search-input').placeholder = translations[lang]['search-placeholder'];
    
    // Hero bölümü
    document.getElementById('hero-title').textContent = translations[lang]['hero-title'];
    document.getElementById('hero-subtitle').textContent = translations[lang]['hero-subtitle'];
    
    // Tüm çevirilebilir elementleri güncelle
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            const span = el.querySelector('span');
            if (span) {
                span.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Select option çevirileri
    document.querySelectorAll('select option').forEach(opt => {
        if (opt.hasAttribute('data-i18n')) {
            const key = opt.getAttribute('data-i18n');
            opt.textContent = translations[lang][key];
        }
    });
    
    // Tema butonu tooltip
    updateThemeButtonText();
}

// Tema değiştirme fonksiyonu
function toggleTheme() {
    userPreferences.theme = userPreferences.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', userPreferences.theme);
    
    if (userPreferences.theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    updateThemeButtonText();
}

// Tema butonu metnini güncelle
function updateThemeButtonText() {
    const themeText = userPreferences.language === 'en' 
        ? (userPreferences.theme === 'light' ? 'Dark Mode' : 'Light Mode')
        : (userPreferences.theme === 'light' ? 'Karanlık Tema' : 'Açık Tema');
    document.getElementById('theme-toggle').setAttribute('title', themeText);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Temayı uygula
    if (userPreferences.theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Dil ayarlarını uygula
    document.getElementById('language-selector').value = userPreferences.language;
    changeLanguage(userPreferences.language);
    
    // Dil değiştirici event
    document.getElementById('language-selector').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Tema değiştirici event
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Arama fonksiyonelliği
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query !== '') {
            const message = userPreferences.language === 'en'
                ? `Searching for: "${query}"`
                : `Arama yapılıyor: "${query}"`;
            alert(message);
        }
    }

    // Kategori kartları hover efekti
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px var(--shadow-color)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 3px 10px var(--shadow-color)';
        });
    });

    // Alt kategori linkleri
    document.querySelectorAll('.subcategory-group a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryName = this.querySelector('span').textContent;
            const message = userPreferences.language === 'en'
                ? `Loading ${categoryName} category...`
                : `${categoryName} kategorisi yükleniyor...`;
            alert(message);
        });
    });
});
