document.addEventListener("DOMContentLoaded", function() {
    
    const osInfo = navigator.platform; 
    const browserInfo = navigator.userAgent;

    localStorage.setItem('userOS', osInfo);
    localStorage.setItem('userBrowser', browserInfo);

    const savedOS = localStorage.getItem('userOS');
    const savedBrowser = localStorage.getItem('userBrowser');

    const infoContainer = document.getElementById('system-info');

    if (infoContainer) {
        infoContainer.innerHTML = `
            <p><strong>OS:</strong> ${savedOS}</p>
            <p><strong>Browser:</strong> ${savedBrowser}</p>
        `;
    }
});

    
    const reviewsContainer = document.getElementById('reviews-container');

    if (reviewsContainer) {
                fetch('https://jsonplaceholder.typicode.com/posts/3/comments')

            .then(response => response.json())
            
            .then(data => {
                reviewsContainer.innerHTML = '';
                
                data.forEach(review => {
                    const reviewBlock = document.createElement('div');
                    
                    reviewBlock.classList.add('review-item');
                    
                    reviewBlock.innerHTML = `
                        <h3 class="review-title">${review.name}</h3>
                        <p class="review-meta"><strong>Email:</strong> <a href="mailto:${review.email}" class="review-link">${review.email}</a></p>
                        <p class="review-text">"${review.body}"</p>
                    `;
                    
                    reviewsContainer.appendChild(reviewBlock);
                });
            })
            .catch(error => {
                console.error('Помилка при завантаженні відгуків:', error);
                reviewsContainer.innerHTML = '<p class="error-text">Failed to load reviews. Please try again later.</p>';
            });
    }
    
    
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('close-modal');
    const openBtn = document.getElementById('open-modal-btn'); 

    if (modal && closeBtn) {
        setTimeout(() => {
            modal.classList.add('show');
        }, 60000);

        if (openBtn) {
            openBtn.addEventListener('click', () => {
                modal.classList.add('show');
            });
        }

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    }

// --- КРОК 4: ПЕРЕМИКАЧ ТЕМНОЇ ТЕМИ (Строго за методичкою) ---

const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

if (themeToggleBtn) {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
        bodyElement.classList.remove('dark-mode'); 
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        bodyElement.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            themeToggleBtn.textContent = 'Dark Mode';
        }
    });
}