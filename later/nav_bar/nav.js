 /* All JavaScript code is defined here */
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const hamburgerIcon = document.getElementById('hamburger');

        const mobileMenuHeader = document.getElementById('mobile-menu-header');
        const backToMainMenuButton = document.getElementById('back-to-main-menu');
        const submenuTitle = document.getElementById('submenu-title');
        const closeMenuFromSubmenu = document.getElementById('close-menu-from-submenu');
        const closeMenuMain = document.getElementById('close-menu-main');

        const mainMobileMenuContent = document.getElementById('main-mobile-menu-content');
        const mobileMenuItems = document.querySelectorAll('.mobile-menu-item'); // All main menu items

        let activeSubMenu = null; // To keep track of the currently active sub-menu

        // Function to open the mobile menu (slides from top)
        function openMobileMenu() {
            mobileMenu.classList.add('active'); /* Add active class to show menu */
            mobileMenuOverlay.classList.remove('hidden'); /* Show overlay */
            hamburgerIcon.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body
            showMainMenu(); // Ensure main menu is shown when opening
        }

        // Function to close the mobile menu (slides to top)
        function closeMobileMenu() {
            mobileMenu.classList.remove('active'); /* Remove active class to hide menu */
            mobileMenuOverlay.classList.add('hidden'); /* Hide overlay */
            hamburgerIcon.classList.remove('open');
            document.body.style.overflow = ''; // Restore scrolling on body
            // Reset to main menu view when closing
            if (activeSubMenu) {
                activeSubMenu.classList.add('hidden');
                activeSubMenu = null;
            }
            mainMobileMenuContent.classList.remove('hidden');
            mobileMenuHeader.classList.add('hidden');
        }

        // Function to show the main mobile menu
        function showMainMenu() {
            if (activeSubMenu) {
                activeSubMenu.classList.add('hidden');
                activeSubMenu = null;
            }
            mainMobileMenuContent.classList.remove('hidden');
            mobileMenuHeader.classList.add('hidden');
        }

        // Function to show a specific sub-menu
        function showSubMenu(menuId, title) {
            mainMobileMenuContent.classList.add('hidden');
            mobileMenuHeader.classList.remove('hidden');
            submenuTitle.textContent = title;

            const targetSubMenu = document.getElementById(menuId);
            if (targetSubMenu) {
                targetSubMenu.classList.remove('hidden');
                activeSubMenu = targetSubMenu;
            }
        }

        // Event listeners for opening and closing the mobile menu
        menuToggle.addEventListener('click', openMobileMenu);
        closeMenuMain.addEventListener('click', closeMobileMenu); // Close button on main menu
        closeMenuFromSubmenu.addEventListener('click', closeMobileMenu); // Close button on sub-menu header
        mobileMenuOverlay.addEventListener('click', closeMobileMenu); // Close when clicking outside

        // Event listener for back button in sub-menu
        backToMainMenuButton.addEventListener('click', showMainMenu);

        // Event listeners for main mobile menu items to show sub-menus
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                const menuId = item.dataset.menu + '-submenu';
                const title = item.querySelector('span').textContent; // Get the text content of the link
                showSubMenu(menuId, title);
            });
        });

        // Language Dropdown functionality
        const languageDropdownButton = document.getElementById('language-dropdown-button');
        const languageDropdownMenu = document.getElementById('language-dropdown-menu');

        languageDropdownButton.addEventListener('click', () => {
            languageDropdownMenu.classList.toggle('hidden');
        });

        // Close language dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!languageDropdownButton.contains(event.target) && !languageDropdownMenu.contains(event.target)) {
                languageDropdownMenu.classList.add('hidden');
            }
        });

        // Close mobile menu on resize if it's open and screen becomes large
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });