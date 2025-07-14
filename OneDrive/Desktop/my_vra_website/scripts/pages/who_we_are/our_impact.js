document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number");
  const speed = 200; 

  const animateNumber = (element) => {
    const target = +element.dataset.target;
    let current = 0;
    const increment = target / speed; // Calculate increment per step

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.innerText = Math.floor(current); // Use Math.floor to show whole numbers
        requestAnimationFrame(updateCounter); // Use requestAnimationFrame for smoother animation
      } else {
        element.innerText = target; // Ensure final target is reached
      }
    };
    updateCounter();
  };

  // Intersection Observer to trigger animation when section is in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          animateNumber(el);
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  statNumbers.forEach((number) => {
    observer.observe(number);
  });
});
