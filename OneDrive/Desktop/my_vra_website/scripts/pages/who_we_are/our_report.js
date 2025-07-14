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

        });