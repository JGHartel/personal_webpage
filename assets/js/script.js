'use strict';
alert("Script is loaded!");

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

console.log("Number of navigation links:", navigationLinks.length);

// Add event to all nav links
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    alert("Clicked on " + this.dataset.page);
    const targetPage = this.textContent.trim().toLowerCase(); // Convert button text to match the section's data-page value

    // Remove 'active' class from all navigation links
    navigationLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });

    // Add 'active' class to the clicked navigation link
    this.classList.add("active");

    // Show the target page and hide others
    pages.forEach(function (page) {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        window.scrollTo(0, 0); // Scroll to top of the page when switching
      } else {
        page.classList.remove("active");
      }
    });
  });
});
