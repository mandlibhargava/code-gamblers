// Leaf falling animation
function createLeaves() {
    const container = document.getElementById('leaf-container');
    const leafCount = 15;
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const startX = Math.random() * window.innerWidth;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        const rotation = Math.random() * 360;
        
        // Set leaf styles
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${startX}px`;
        leaf.style.top = `-${size}px`;
        leaf.style.opacity = Math.random() * 0.5 + 0.3;
        leaf.style.transform = `rotate(${rotation}deg)`;
        
        // Random leaf type
        const leafTypes = ['oak', 'maple', 'birch'];
        const type = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        leaf.classList.add(type);
        
        container.appendChild(leaf);
        
        // Animate leaf
        animateLeaf(leaf, duration, delay);
    }
}

function animateLeaf(leaf, duration, delay) {
    const startX = parseFloat(leaf.style.left);
    const endX = startX + (Math.random() * 200 - 100); // Random drift
    const endY = window.innerHeight + 50;
    
    gsap.to(leaf, {
        y: endY,
        x: endX,
        rotation: '+=360',
        duration: duration,
        delay: delay,
        ease: 'none',
        onComplete: () => {
            // Reset leaf to top
            leaf.style.top = `-${parseFloat(leaf.style.height)}px`;
            leaf.style.left = `${Math.random() * window.innerWidth}px`;
            // Animate again
            animateLeaf(leaf, duration, 0);
        }
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createLeaves();
    
    // Animate elements on scroll
    gsap.utils.toArray('.feature-card, .fact-card, .quote-card').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
});