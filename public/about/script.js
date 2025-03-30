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
        // Genel
        "about-title": "About | Lost Media Archive",
        "site-subtitle": "Archive of lost media content",
        
        // Menü
        "home": "Home",
        "categories": "Categories",
        "submit": "Submit Media",
        "about": "About",
        
        // Hero
        "hero-title": "About LostMediaArchive",
        "hero-subtitle": "Our preservation mission",
        
        // İçerik
        "mission-title": "Our Mission",
        "mission-text-1": "We archive forgotten media from the digital age.",
        "mission-text-2": "Preserving cultural heritage for future generations.",
        "team-title": "Our Team",
        "contact-title": "Contact Us"
        "rank": "Admin, Moderator"
    },
    tr: {
        // Genel
        "about-title": "Hakkında | Lost Media Arşivi",
        "site-subtitle": "Kaybolan medya içeriklerinin arşivi",
        
        // Menü
        "home": "Ana Sayfa",
        "categories": "Kategoriler",
        "submit": "Gönderi Yap",
        "about": "Hakkında",
        
        // Hero
        "hero-title": "LostMediaArşiv Hakkında",
        "hero-subtitle": "Koruma misyonumuz",
        
        // İçerik
        "mission-title": "Misyonumuz",
        "mission-text-1": "Dijital çağda unutulan medyaları arşivliyoruz.",
        "mission-text-2": "Kültürel mirası geleceğe taşıyoruz.",
        "team-title": "Ekibimiz",
        "contact-title": "İletişim",
        "rank": "Admin, Moderatör"
    }
};

// DİL DEĞİŞTİRME FONKSİYONU
function updateContent(lang) {
    // Sayfa başlığı
    document.title = translations[lang]["about-title"];
    
    // Tüm çeviri elementleri
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// SAYFA YÜKLENDİĞİNDE
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");
    
    // Kayıtlı dili yükle
    const savedLang = localStorage.getItem("lang") || "tr";
    languageSelector.value = savedLang;
    updateContent(savedLang);
    
    // Dil değişikliğini dinle
    languageSelector.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("lang", lang);
        updateContent(lang);
    });
    
    // Tema değiştirme kodu (önceki gibi kalacak)
});

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
