document.addEventListener('DOMContentLoaded', function() {
    // Sayı animasyonu
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 saniye
        const step = target / (duration / 16); // 60fps
        
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
    
    // Çeviri için ek veriler
    if (typeof translations !== 'undefined') {
        translations.en = {
            ...translations.en,
            "about-heading": "Who We Are?",
            "about-text-1": "Not Found So Far was founded in 2023 by a team passionate about media archaeology. Our goal is to document forgotten or completely lost media content and preserve this cultural heritage for future generations.",
            "mission-heading": "Our Mission",
            "mission-text": "We create a reliable archive for lost media hunters, researchers and enthusiasts. While preserving the cultural value of each piece, we make this content accessible within ethical and legal boundaries.",
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
            "faq1-a": "Lost media refers to film, TV shows, commercials, music and other media content whose existence is known but is either completely inaccessible or only small fragments are available.",
            "faq2-q": "What about copyright status?",
            "faq2-a": "Content in our archive is for research and documentation purposes only. We remove any content that violates copyright.",
            "faq3-q": "How can I contribute?",
            "faq3-a": "You can add information through our 'Submit' page, share posts on our social media accounts, or support us by making donations."
        };
        
        // Hero başlık çevirileri
        translations.en["hero-title"] = "About Us";
        translations.en["hero-subtitle"] = "Our mission to preserve lost media culture";
    }
});
