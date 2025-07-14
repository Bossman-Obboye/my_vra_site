document.addEventListener("DOMContentLoaded", () => {
  // ================== Hero Slide ==================
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;
  let slideIntervalId;
  const slideDelay = 8000;

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });
  }

  function startAutoSlide() {
    slideIntervalId = setInterval(() => showSlide(currentSlide + 1), slideDelay);
  }

  window.plusSlides = function (n) {
    clearInterval(slideIntervalId);
    showSlide(currentSlide + n);
    startAutoSlide();
  };

  if (slides.length > 0) {
    showSlide(currentSlide);
    startAutoSlide();
  }

  // ================== Hero Video Controls ==================
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const heroVideo = document.getElementById('bgVideo');

  if (playPauseBtn && playIcon && pauseIcon && heroVideo) {
    let isPlaying = true;

    playPauseBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;

      if (isPlaying) {
        heroVideo.play();
        pauseIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
      } else {
        heroVideo.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
      }
    });
  }

  // ================== News Carousel ==================
  const newsGrid = document.querySelector('.news-grid');
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  const scrollRightBtn = document.getElementById('scrollRightBtn');
  const carouselIndicators = document.getElementById('carouselIndicators');
  const newsItems = document.querySelectorAll('.news-item');

  if (newsGrid && scrollLeftBtn && scrollRightBtn && carouselIndicators && newsItems.length > 0) {
    const createIndicators = () => {
      carouselIndicators.innerHTML = '';
      newsItems.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
          newsGrid.scrollLeft = newsItems[i].offsetLeft - newsGrid.offsetLeft;
        });
        carouselIndicators.appendChild(dot);
      });
    };

    const updateIndicators = () => {
      const dots = document.querySelectorAll('.indicator-dot');
      const scrollLeft = newsGrid.scrollLeft;
      const itemWidth = newsItems[0].offsetWidth + parseFloat(getComputedStyle(newsItems[0]).marginRight);
      let activeIndex = Math.round(scrollLeft / itemWidth);

      activeIndex = Math.max(0, Math.min(activeIndex, newsItems.length - 1));
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    const scrollCarousel = (direction) => {
      const itemWidth = newsItems[0].offsetWidth + parseFloat(getComputedStyle(newsItems[0]).marginRight);
      const maxScrollLeft = newsGrid.scrollWidth - newsGrid.clientWidth;
      const currentScrollLeft = newsGrid.scrollLeft;
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
    window.addEventListener('resize', () => {
      createIndicators();
      updateIndicators();
    });

    createIndicators();
    updateIndicators();
  }

  // ================== Video Carousel Scroll ==================
  const videoCarousel = document.getElementById('videoCarousel');
  const videoScrollLeftBtn = document.getElementById('scrollLeftBtn');
  const videoScrollRightBtn = document.getElementById('scrollRightBtn');

  if (videoCarousel && videoScrollLeftBtn && videoScrollRightBtn) {
    const scrollAmount = 350;

    videoScrollLeftBtn.addEventListener('click', () => {
      videoCarousel.scrollLeft -= scrollAmount;
    });

    videoScrollRightBtn.addEventListener('click', () => {
      videoCarousel.scrollLeft += scrollAmount;
    });
  }
});
