document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar-menu');
  const sidebarToggleBtn = document.querySelector('.sidebar-toggle-btn');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  // Function to open the sidebar
  function openSidebar() {
    sidebar.classList.add('is-open');
    sidebarToggleBtn.setAttribute('aria-expanded', 'true');
    body.classList.add('sidebar-active'); // Always add sidebar-active class
  }

  // Function to close the sidebar
  function closeSidebar() {
    sidebar.classList.remove('is-open');
    sidebarToggleBtn.setAttribute('aria-expanded', 'false');
    body.classList.remove('sidebar-active'); // Always remove sidebar-active class
  }

  // Toggle sidebar visibility on button click
  if (sidebarToggleBtn && sidebar && overlay) {
    sidebarToggleBtn.addEventListener('click', function() {
      if (sidebar.classList.contains('is-open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', closeSidebar);
  }

  // Smooth scroll for sidebar navigation links
  if (sidebarLinks.length > 0) {
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          closeSidebar(); // Close sidebar after clicking a link

          // Scroll to the target element smoothly
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // No specific resize listener needed for desktop fixed state anymore
  // The sidebar will now always be an overlay that toggles open/closed.
  // The body.sidebar-active handles overflow: hidden when open.
});
