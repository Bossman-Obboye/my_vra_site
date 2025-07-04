document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('drawer');
    const closeMenu = document.getElementById('close-menu');
    const overlay = document.getElementById('drawer-overlay');
    const hamburgerIcon = document.getElementById('hamburger');

    // Function to open the mobile menu
    function openMenu() {
        mobileMenu.classList.add('open');
        mobileMenu.style.display = 'block';
        overlay.style.display = 'block';
        hamburgerIcon.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on body
    }

    // Function to close the mobile menu
    function closeMenuDrawer() {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
        overlay.style.display = 'none';
        hamburgerIcon.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling on body
    }

    // Event listeners for opening and closing the mobile menu
    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuDrawer);
    overlay.addEventListener('click', closeMenuDrawer); // Close when clicking outside

    // Language Dropdown functionality
    const languageDropdownButton = document.getElementById('language-dropdown-button');
    const languageDropdownMenu = document.getElementById('language-dropdown-menu');

    languageDropdownButton.addEventListener('click', () => {
        languageDropdownMenu.style.display = languageDropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close language dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!languageDropdownButton.contains(event.target) && !languageDropdownMenu.contains(event.target)) {
            languageDropdownMenu.style.display = 'none';
        }
    });

    // Close mobile menu on resize if it's open and screen becomes large
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
            closeMenuDrawer();
        }
    });

    // Handle initial display of mobile menu based on screen size
    window.addEventListener('load', () => {
        if (window.innerWidth < 1024) {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });
});