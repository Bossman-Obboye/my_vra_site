 document.addEventListener('DOMContentLoaded', () => {
            // Tab switching logic
            const tabsContainer = document.getElementById('tabs-container');
            const contentContainer = document.getElementById('tab-content-container');
            const tabs = tabsContainer.querySelectorAll('.tab-btn');
            const contents = contentContainer.querySelectorAll('.tab-content');

            tabsContainer.addEventListener('click', (e) => {
                const targetButton = e.target.closest('.tab-btn');
                if (!targetButton) return;

                const tabId = targetButton.dataset.tab;
                
                tabs.forEach(tab => {
                    tab.classList.remove('tab-active');
                    tab.classList.add('tab-inactive');
                });
                targetButton.classList.add('tab-active');
                targetButton.classList.remove('tab-inactive');
                
                contents.forEach(content => {
                    if (content.id === `${tabId}-content`) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
            });

            // Dynamic number counter logic
            const statNumbers = document.querySelectorAll('.stat-number');
            const speed = 200;

            const animateNumber = (element) => {
                const target = +element.dataset.target;
                const count = +element.innerText;
                const inc = Math.max(1, Math.floor(target / speed));

                if (count < target) {
                    element.innerText = Math.min(count + inc, target);
                    setTimeout(() => animateNumber(element), 10);
                } else {
                    element.innerText = target;
                }
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const el = entry.target;
                        animateNumber(el);
                        observer.unobserve(el);
                    }
                });
            }, {
                threshold: 0.5
            });

            statNumbers.forEach(number => {
                observer.observe(number);
            });

            // Set current year in footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        });