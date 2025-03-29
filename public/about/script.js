// TEMA DEĞİŞTİRME
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Başlangıç temasını ayarla
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    // Tema değiştirme butonu
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon();
    });
    
    function updateThemeIcon() {
        const theme = document.documentElement.getAttribute('data-theme');
        themeToggle.innerHTML = theme === 'light' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    }
    
    // Form gönderimi
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mesajınız başarıyla gönderildi!');
            this.reset();
        });
    }

    // ÇEVİRİ VERİLERİ
const translations = {
    en: {
        // Header
        "home": "Home",
        "categories": "Categories",
        "submit": "Submit Media",
        "about": "About",
        "site-subtitle": "Archive of lost media content",
        
        // Hero
        "hero-title": "About LostMediaArchive",
        "hero-subtitle": "Our mission to preserve lost media",
        
        // Mission
        "mission-title": "Our Mission",
        "mission-text-1": "LostMediaArchive was established to archive media content that has been forgotten in the digital age.",
        "mission-text-2": "Our goal is to preserve cultural heritage and pass it on to future generations.",
        "mission-list-1": "Document lost content",
        "mission-list-2": "Enable community participation",
        "mission-list-3": "Provide digital preservation",
        "mission-image-alt": "Archive Works"
    },
    tr: {
        // Header
        "home": "Ana Sayfa",
        "categories": "Kategoriler",
        "submit": "Gönderi Yap",
        "about": "Hakkında",
        "site-subtitle": "Kaybolan medya içeriklerinin arşivi",
        
        // Hero
        "hero-title": "LostMediaArşiv Hakkında",
        "hero-subtitle": "Kaybolan medyaları koruma misyonumuz",
        
        // Mission
        "mission-title": "Misyonumuz",
        "mission-text-1": "LostMediaArşiv, dijital çağda unutulmaya yüz tutmuş medya içeriklerini arşivlemek için kuruldu.",
        "mission-text-2": "Amacımız kültürel mirası korumak ve gelecek nesillere aktarmak.",
        "mission-list-1": "Kayıp içerikleri belgelemek",
        "mission-list-2": "Topluluk katılımını sağlamak",
        "mission-list-3": "Dijital koruma sağlamak",
        "mission-image-alt": "Arşiv Çalışmaları"
    }
};

// DİL DEĞİŞTİRME
function changeLanguage(lang) {
    // Tüm çeviri elementlerini güncelle
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.hasAttribute('alt')) {
                el.alt = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Sayfa başlığını güncelle
    document.title = translations[lang]['about-title'] || document.title;
}

// SAYFA YÜKLENDİĞİNDE
document.addEventListener('DOMContentLoaded', function() {
    // Dil seçici event
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', function() {
        changeLanguage(this.value);
        localStorage.setItem('language', this.value);
    });
    
    // Kayıtlı dili yükle
    const savedLanguage = localStorage.getItem('language') || 'tr';
    languageSelector.value = savedLanguage;
    changeLanguage(savedLanguage);
    
    // Diğer kodlar (tema değiştirme vb.) aynı kalacak
});
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
