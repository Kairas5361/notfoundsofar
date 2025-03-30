        // Çeviri verileri
        const translations = {
            en: {
                // Header
                "home": "Home",
                "categories": "Categories",
                "submit": "Submit",
                "about": "About",
                "search-placeholder": "Search media...",
                "site-title": "LostMediaArchive",
                "site-subtitle": "Archive of lost and rare media content",
                
                // About Page
                "hero-title": "About Us",
                "hero-subtitle": "Our mission to preserve lost media culture",
                "about-heading": "Who We Are?",
                "about-text-1": "Not Found So Far was founded in 2023 by a team passionate about media archaeology. Our goal is to document forgotten or completely lost media content and preserve this cultural heritage for future generations.",
                "mission-heading": "Our Mission",
                "mission-text": "We create a reliable archive for lost media hunters, researchers and enthusiasts. While preserving the cultural value of each piece, we make this content accessible within ethical and legal boundaries.",
                "media-items": "Media Items",
                "community-members": "Community Members",
                "found-items": "Found Items",
                "countries": "Countries",
                "team-heading": "Core Team",
                "team-caption": "Our Team in 2023",
                "founder-name": "Kairas5361",
                "founder-role": "Founder & Archive Manager",
                "researcher-name": "Zeynep K.",
                "researcher-role": "Senior Researcher",
                "dev-name": "Emre T.",
                "dev-role": "Web Developer",
                "faq-heading": "Frequently Asked Questions",
                "faq1-q": "What is lost media?",
                "faq1-a": "Lost media refers to film, TV shows, commercials, music and other media content whose existence is known but is either completely inaccessible or only small fragments are available.",
                "faq2-q": "What about copyright status?",
                "faq2-a": "Content in our archive is for research and documentation purposes only. We remove any content that violates copyright.",
                "faq3-q": "How can I contribute?",
                "faq3-a": "You can add information through our 'Submit' page, share posts on our social media accounts, or support us by making donations.",
                
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
                "site-title": "So Far",
                "site-subtitle": "Kaybolan ve Nadir Medya İçeriklerinin Arşivi",
                
                // About Page
                "hero-title": "Hakkımızda",
                "hero-subtitle": "Kayıp medya kültürünü koruma misyonumuz",
                "about-heading": "Biz Kimiz?",
                "about-text-1": "Not Found So Far, 2023 yılında medya arkeolojisine gönül veren bir ekip tarafından kuruldu. Amacımız, unutulmaya yüz tutmuş veya tamamen kaybolmuş medya içeriklerini belgelemek ve bu kültürel mirası gelecek nesillere aktarmak.",
                "mission-heading": "Misyonumuz",
                "mission-text": "Kayıp medya avcıları, araştırmacılar ve meraklılar için güvenilir bir arşiv oluşturuyoruz. Her bir parçanın kültürel değerini korurken, etik ve yasal sınırlar içinde bu içerikleri erişilebilir kılıyoruz.",
                "media-items": "Medya Öğesi",
                "community-members": "Topluluk Üyesi",
                "found-items": "Bulunan Eser",
                "countries": "Ülke",
                "team-heading": "Temel Ekip",
                "team-caption": "2023 Yılı Ekibimiz",
                "founder-name": "Kairas5361",
                "founder-role": "Kurucu & Arşiv Yöneticisi",
                "researcher-name": "Zeynep K.",
                "researcher-role": "Kıdemli Araştırmacı",
                "dev-name": "Emre T.",
                "dev-role": "Web Geliştirici",
                "faq-heading": "Sıkça Sorulan Sorular",
                "faq1-q": "Kayıp medya nedir?",
                "faq1-a": "Kayıp medya, varlığı bilinen ancak herhangi bir şekilde erişilemeyen veya çok az bir kısmı bulunabilen film, dizi, reklam, müzik gibi medya içerikleridir.",
                "faq2-q": "İçeriklerin telif hakkı durumu nedir?",
                "faq2-a": "Arşivimizdeki içerikler yalnızca araştırma ve belgeleme amaçlıdır. Telif hakkı ihlali oluşturan içerikleri kaldırıyoruz.",
                "faq3-q": "Nasıl katkıda bulunabilirim?",
                "faq3-a": "'Gönderi Yap' sayfamızdan bilgi ekleyebilir, sosyal medya hesaplarımızda paylaşımlar yapabilir veya bağış yaparak destek olabilirsiniz.",
                
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
            document.documentElement.lang = lang;
            
            // Site başlık ve alt başlık
            const siteTitle = document.getElementById('site-title');
            const siteSubtitle = document.getElementById('site-subtitle');
            if (siteTitle) siteTitle.textContent = translations[lang]['site-title'];
            if (siteSubtitle) siteSubtitle.textContent = translations[lang]['site-subtitle'];
            
            // Tüm çeviri öğelerini güncelle (ikonları koruyarak)
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                        element.placeholder = translations[lang][key];
                    } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                        // Link ve butonlarda içeriği koru, sadece span'ı çevir
                        const span = element.querySelector('span');
                        if (span) span.textContent = translations[lang][key];
                    } else {
                        // Diğer elementlerde direkt çeviri
                        const icon = element.querySelector('i');
                        if (icon) {
                            element.innerHTML = icon.outerHTML + ' ' + translations[lang][key];
                        } else {
                            element.textContent = translations[lang][key];
                        }
                    }
                }
            });
            
            // Arama çubuğu placeholder
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.placeholder = translations[lang]['search-placeholder'];
            }
            
            // Tema butonu metni
            const themeButton = document.getElementById('theme-toggle');
            if (themeButton) {
                themeButton.setAttribute('title', lang === 'en' ? 'Dark Mode' : 'Karanlık Tema');
            }
        }

        // Sayfa yüklendiğinde
        document.addEventListener('DOMContentLoaded', function() {
            // Dil seçici event
            const languageSelector = document.getElementById('language-selector');
            if (languageSelector) {
                // Kayıtlı dili yükle
                const savedLang = localStorage.getItem('language') || 'tr';
                languageSelector.value = savedLang;
                applyLanguage(savedLang);
                
                // Değişiklikleri dinle
                languageSelector.addEventListener('change', function() {
                    const selectedLang = this.value;
                    localStorage.setItem('language', selectedLang);
                    applyLanguage(selectedLang);
                });
            }
            
            // Tema değiştirici
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', function() {
                    const currentTheme = document.documentElement.getAttribute('data-theme');
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                    
                    // İkonu güncelle
                    this.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
                });
                
                // Kayıtlı temayı yükle
                const savedTheme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', savedTheme);
                themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            }
            
            // FAQ aç/kapa
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isActive = question.classList.contains('active');
                    
                    // Tüm FAQ'ları kapat
                    faqQuestions.forEach(q => {
                        q.classList.remove('active');
                        q.nextElementSibling.style.maxHeight = null;
                    });
                    
                    // Eğer tıklanan aktif değilse, sadece onu aç
                    if (!isActive) {
                        question.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                });
            });
            
            // İstatistik animasyonu
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                
                let current = 0;
                const increment = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(increment);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        increment();
                        observer.unobserve(stat);
                    }
                });
                
                observer.observe(stat);
            });
        });
