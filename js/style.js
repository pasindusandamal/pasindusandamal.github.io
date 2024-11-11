

    const bubble = document.getElementById('water-bubble');
    let isMouseDown = false;
    let bubbleSize = 20;
    let explosionParticles = [];
    
    document.addEventListener('mousemove', (e) => {
        bubble.style.display = 'block';
        bubble.style.left = e.clientX + 'px';
        bubble.style.top = e.clientY + 'px';
        
        if (isMouseDown) {
            bubbleSize = Math.min(bubbleSize + 1, 100);
        } else {
            bubbleSize = Math.max(bubbleSize - 1, 20);
        }
        
        bubble.style.width = bubbleSize + 'px';
        bubble.style.height = bubbleSize + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    
    document.addEventListener('mouseup', (e) => {
        isMouseDown = false;
        if (bubbleSize > 50) {
            createExplosion(e.clientX, e.clientY);
        }
        bubbleSize = 20;
    });
    
    function createExplosion(x, y) {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.background = 'rgba(13, 110, 253, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.pointerEvents = 'none';
            document.body.appendChild(particle);
            
            const angle = (i / 10) * Math.PI * 2;
            const velocity = 10;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let opacity = 1;
            
            const animate = () => {
                const currentX = parseInt(particle.style.left);
                const currentY = parseInt(particle.style.top);
                
                particle.style.left = (currentX + vx) + 'px';
                particle.style.top = (currentY + vy) + 'px';
                opacity -= 0.02;
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    }


    document.addEventListener('DOMContentLoaded', function() {
        const text = document.querySelector('.animated-text');
        setInterval(() => {
            text.classList.add('fade');
            setTimeout(() => {
                text.classList.remove('fade');
            }, 300);
        }, 3000);
    });

    // Animate progress bars when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const value = progressBar.getAttribute('data-value');
                progressBar.style.width = value + '%';
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});

// Add smooth scroll for skill section navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});