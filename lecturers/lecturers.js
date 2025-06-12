  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
