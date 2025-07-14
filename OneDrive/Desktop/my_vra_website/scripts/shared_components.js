// ============ Script for the Site's Header =======================
const menuToggle = document.getElementById("menu-toggle");
const closeMenuBtn = document.getElementById("close-menu");
const drawer = document.getElementById("drawer");
const hamburgerIcon = document.getElementById("hamburger");
const drawerMenuItems = document.querySelectorAll(".drawer-menu-item");
const subMenuContentDiv = document.getElementById("sub-menu-content");

// Function to open the drawer
function openDrawer() {
  drawer.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent scrolling body when drawer is open
}

// Function to close the drawer
function closeDrawer() {
  drawer.classList.remove("open");
  document.body.style.overflow = ""; // Restore body scrolling
}

// Event listeners for opening and closing the drawer
menuToggle.addEventListener("click", openDrawer);
closeMenuBtn.addEventListener("click", closeDrawer);

// Handle clicks on main drawer menu items
drawerMenuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Remove 'active' class from all main menu items
    drawerMenuItems.forEach((el) => el.classList.remove("active"));

    // Add 'active' class to the clicked item
    this.classList.add("active");

    // Get the target sub-menu ID from data-target attribute
    const targetId = this.dataset.target;

    // Hide all sub-menus
    const allSubMenus = subMenuContentDiv.querySelectorAll("ul");
    allSubMenus.forEach((ul) => (ul.style.display = "none"));

    // Show the relevant sub-menu
    const targetSubMenu = document.getElementById(targetId + "-sub-menu");
    if (targetSubMenu) {
      targetSubMenu.style.display = "block";
    }
  });
});

// Initialize with "Where We Work" active on load
document.addEventListener("DOMContentLoaded", () => {
  const initialActiveItem = document.querySelector(".drawer-menu-item.active");
  if (initialActiveItem) {
    const targetId = initialActiveItem.dataset.target;
    const targetSubMenu = document.getElementById(targetId + "-sub-menu");
    if (targetSubMenu) {
      targetSubMenu.style.display = "block";
    }
  }
});
