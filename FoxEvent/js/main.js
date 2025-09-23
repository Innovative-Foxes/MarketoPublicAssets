document.addEventListener("DOMContentLoaded", function () {
  // Copyright year
  (function () {
    const copyrightYear = document.getElementById("copyrightYear");
    if (copyrightYear) {
      copyrightYear.innerHTML = new Date().getFullYear();
    }
  })();

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenuBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking on a nav link
    const navLinkItems = document.querySelectorAll(".nav-link");
    navLinkItems.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenuBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!mobileMenuBtn.contains(event.target) && !navLinks.contains(event.target)) {
        mobileMenuBtn.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
});
