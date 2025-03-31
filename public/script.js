        // Çeviri verileri
        const translations = {
            en: {
                "page-title": "Not Found So Far | Lost Media Collection",
                "search-placeholder": "Search media...",
                "hero-title": "Discover Lost Media Pieces",
                "hero-subtitle": "Thousands of lost films, TV shows, commercials, music and more in this archive...",
                "popular-title": "Popular Lost Media",
                "home": "Home",
                "categories": "Categories",
                "submit": "Submit",
                "about": "About",
                "recent": "Recently Added",
                "random": "Explore Random",
                "category": "Category:",
                "all-categories": "All Categories",
                "films": "Films",
                "tv-shows": "TV Shows",
                "commercials": "Commercials",
                "music": "Music",
                "games": "Games",
                "other": "Other",
                "status": "Status:",
                "all-statuses": "All Statuses",
                "found": "Found",
                "lost": "Lost",
                "partially-found": "Partially Found",
                "year": "Year:",
                "all-years": "All Years",
                "pre-1980": "Pre-1980",
                "post-2010": "Post-2010",
                "filter": "Filter",
                "lost-film-title": "Lost 1980s Film",
                "film": "Film",
                "lost-film-desc": "This movie isn't a lost media. This is a example text bla bla english language bla bla",
                "view": "View",
                "download": "Download",
                "commercial-title": "Commercial from 1992",
                "commercial": "Commercial",
                "commercial-desc": "This commercial aired in 1992 but no copies have been found.",
                "episode-title": "TV Series Lost Episode",
                "tv-show": "TV Show",
                "episode-desc": "Only a 2-minute clip from this episode has been found.",
                "partial-download": "Partial Download",
                "album-title": "Rare Album Recording",
                "album-desc": "This album with only 50 copies was digitized by collectors.",
                "game-title": "Canceled Game Prototype",
                "game": "Game",
                "game-desc": "Only screenshots exist of this canceled game.",
                "cartoon-title": "Forgotten Cartoon Series",
                "cartoon": "Cartoon",
                "cartoon-desc": "This cartoon survived thanks to VHS recordings.",
                "previous": "Previous",
                "next": "Next",
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
                "site-title": "So Far",
                "site-subtitle": "Archive of lost and rare media content"
            },
            tr: {
                "page-title": "Not Found So Far | Kayıp Medya Koleksiyonu",
                "search-placeholder": "Medya Ara...",
                "hero-title": "Kaybolan Medya Parçalarını Keşfedin",
                "hero-subtitle": "Binlerce Kayıp Film, Dizi, Reklam, Müzik ve Daha Fazlası bu Arşivde...",
                "popular-title": "Popüler Kayıp Medyalar",
                "home": "Ana Sayfa",
                "categories": "Kategoriler",
                "submit": "Gönderi Yap",
                "about": "Hakkında",
                "recent": "Son Eklenenler",
                "random": "Rastgele Keşfet",
                "category": "Kategori:",
                "all-categories": "Tüm Kategoriler",
                "films": "Filmler",
                "tv-shows": "TV Şovları",
                "commercials": "Reklamlar",
                "music": "Müzik",
                "games": "Oyunlar",
                "other": "Diğer",
                "status": "Durum:",
                "all-statuses": "Tüm Durumlar",
                "found": "Bulundu",
                "lost": "Kayıp",
                "partially-found": "Kısmen Bulundu",
                "year": "Yıl:",
                "all-years": "Tüm Yıllar",
                "pre-1980": "1980 Öncesi",
                "post-2010": "2010 Sonrası",
                "filter": "Filtrele",
                "lost-film-title": "Kayıp 1980'ler Filmi",
                "film": "Film",
                "lost-film-desc": "Bu film gerçekte kayıp değil sadece deneme yazısıdır bla bla.",
                "view": "İncele",
                "download": "İndir",
                "commercial-title": "1992 Yılına Ait Reklam",
                "commercial": "Reklam",
                "commercial-desc": "1992'de yayınlanan bu reklamın kopyası bulunamadı.",
                "episode-title": "TV Dizisi Kayıp Bölüm",
                "tv-show": "TV Şovu",
                "episode-desc": "Bu bölümden sadece 2 dakikalık kesit bulunabildi.",
                "partial-download": "Kısmi İndir",
                "album-title": "Nadir Albüm Kaydı",
                "album-desc": "Sadece 50 kopya basılan bu albüm dijitalleştirildi.",
                "game-title": "İptal Edilmiş Oyun Prototipi",
                "game": "Oyun",
                "game-desc": "Bu iptal edilmiş oyunun sadece ekran görüntüleri mevcut.",
                "cartoon-title": "Unutulmuş Çizgi Film Serisi",
                "cartoon": "Çizgi Film",
                "cartoon-desc": "Bu çizgi film VHS kayıtları sayesinde günümüze ulaştı.",
                "previous": "Önceki",
                "next": "Sonraki",
                "about-lma": "Not Found So Far Hakkında",
                "about-desc": "Kaybolmuş medya içeriklerini arşivlemek için kurulmuş platform.",
                "quick-links": "Hızlı Linkler",
                "terms": "Kullanım Şartları",
                "privacy": "Gizlilik Politikası",
                "contact": "İletişim",
                "faq": "SSS",
                "contact-us": "Bize Ulaşın",
                "rights": "Tüm Hakları Saklıdır.",
                "non-profit": "Bu Site Kâr Amacı Gütmemektedir.",
                "site-title": "So Far",
                "site-subtitle": "Kaybolan ve Nadir Medya İçeriklerinin Arşivi"
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
            
            // Popüler başlık
            document.getElementById('popular-title').textContent = translations[lang]['popular-title'];
            
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
            
            // Filtreleme butonu event
            document.querySelector('.apply-filters').addEventListener('click', function() {
                const category = document.getElementById('category').value;
                const status = document.getElementById('status').value;
                const year = document.getElementById('year').value;
                
                const message = userPreferences.language === 'en' 
                    ? `Filters applied: Category - ${category}, Status - ${status}, Year - ${year}`
                    : `Filtreleme uygulandı: Kategori - ${category}, Durum - ${status}, Yıl - ${year}`;
                
                alert(message);
            });

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

            // Medya kartları hover efekti
            document.querySelectorAll('.media-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.boxShadow = '0 10px 20px var(--shadow-color)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.boxShadow = '0 3px 10px var(--shadow-color)';
                });
            });

            // Sayfalama butonları
            document.querySelectorAll('.pagination .btn:not(.active)').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageText = this.querySelector('span')?.textContent || this.textContent.trim();
                    const message = userPreferences.language === 'en'
                        ? `Loading page ${pageText}`
                        : `Sayfa ${pageText} yükleniyor`;
                    alert(message);
                });
            });
        });
