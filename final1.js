document.addEventListener('DOMContentLoaded', function() {
    // Quiz category filter functionality
    const categoryLinks = document.querySelectorAll('.category-card a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href');
            document.querySelector(targetSection).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animate quiz cards on scroll
    const quizCards = document.querySelectorAll('.quiz-card, .quiz-card-sm');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    quizCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
    
    // Difficulty level tooltips
    const difficultyStars = document.querySelectorAll('.stars');
    
    difficultyStars.forEach(stars => {
        const starCount = stars.querySelectorAll('.fas.fa-star').length;
        let difficulty;
        
        switch(starCount) {
            case 1:
                difficulty = 'Easy';
                break;
            case 2:
                difficulty = 'Moderate';
                break;
            case 3:
                difficulty = 'Medium';
                break;
            case 4:
                difficulty = 'Challenging';
                break;
            case 5:
                difficulty = 'Expert';
                break;
            default:
                difficulty = 'Unknown';
        }
        
        stars.setAttribute('title', difficulty);
        stars.style.cursor = 'help';
    });
});