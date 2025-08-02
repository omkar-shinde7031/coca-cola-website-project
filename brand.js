 document.addEventListener('DOMContentLoaded', function() {
            const bubblesContainer = document.querySelector('.bubbles');
            for (let i = 0; i < 50; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                const size = Math.random() * 60 + 20;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
                bubble.style.animationDelay = `${Math.random() * 10}s`;
                bubblesContainer.appendChild(bubble);
            }
            
            
            const timelineItems = document.querySelectorAll('.timeline-item');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('fade-in');
                            const action = index % 2 === 0 ? 'slide-left' : 'slide-right';
                            entry.target.querySelectorAll('.slide-left, .slide-right').forEach(el => {
                                el.classList.add(action);
                            });
                        }, index * 150);
                    }
                });
            }, { threshold: 0.1 });
            
            timelineItems.forEach(item => observer.observe(item));
            
            const btn = document.getElementById('discoverBtn');
            btn.addEventListener('mouseenter', () => {
                btn.innerHTML = 'JOIN THE JOURNEY →';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.innerHTML = 'DISCOVER MORE';
            });
            
            btn.addEventListener('click', () => {
                btn.classList.add('animate-pulse');
                setTimeout(() => {
                    btn.classList.remove('animate-pulse');
                    alert('Welcome to Coca-Cola! Explore our website to discover our full range of products and initiatives.');
                }, 1000);
            });
        });