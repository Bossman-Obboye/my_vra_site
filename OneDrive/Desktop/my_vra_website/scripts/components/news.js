document.addEventListener('DOMContentLoaded', () => {
    const newsGrid = document.querySelector('.news-grid');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    const carouselIndicators = document.getElementById('carouselIndicators');
    const newsItems = document.querySelectorAll('.news-item');

    // Function to create indicator dots
    const createIndicators = () => {
        carouselIndicators.innerHTML = '';
        for (let i = 0; i < newsItems.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                newsGrid.scrollLeft = newsItems[i].offsetLeft - newsGrid.offsetLeft;
            });
            carouselIndicators.appendChild(dot);
        }
    };

    // Function to update active indicator dot
    const updateIndicators = () => {
        const dots = document.querySelectorAll('.indicator-dot');
        const scrollLeft = newsGrid.scrollLeft;
        const itemWidth = newsItems.length > 0 ? newsItems[0].offsetWidth + parseFloat(getComputedStyle(newsItems[0]).marginRight) : 0;

        let activeIndex = 0;
        if (itemWidth > 0) {
            activeIndex = Math.round(scrollLeft / itemWidth);
        }
        if (activeIndex < 0) activeIndex = 0;
        if (activeIndex >= newsItems.length) activeIndex = newsItems.length - 1;

        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Function to scroll the carousel with circular behavior
    const scrollCarousel = (direction) => {
        const itemWidth = newsItems.length > 0 ? newsItems[0].offsetWidth + parseFloat(getComputedStyle(newsItems[0]).marginRight) : 0;
        const currentScrollLeft = newsGrid.scrollLeft;
        const maxScrollLeft = newsGrid.scrollWidth - newsGrid.clientWidth;
        const tolerance = 1;

        if (direction === 'left') {
            if (currentScrollLeft <= tolerance) {
                newsGrid.scrollLeft = maxScrollLeft;
            } else {
                newsGrid.scrollLeft -= itemWidth;
            }
        } else {
            if (currentScrollLeft >= maxScrollLeft - tolerance) {
                newsGrid.scrollLeft = 0;
            } else {
                newsGrid.scrollLeft += itemWidth;
            }
        }
    };

    scrollLeftBtn.addEventListener('click', () => scrollCarousel('left'));
    scrollRightBtn.addEventListener('click', () => scrollCarousel('right'));
    newsGrid.addEventListener('scroll', updateIndicators);
    createIndicators();
    updateIndicators();
    window.addEventListener('resize', () => {
        createIndicators();
        updateIndicators();
    });
});
