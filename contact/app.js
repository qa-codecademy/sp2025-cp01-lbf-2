  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

///////////////SUBMIT BUTTON MESSAGE/////////////////
const form = document.getElementById('contactForm');
const tnx = document.getElementById('tnxMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
    form.style.display = 'none';
    tnx.style.display = 'block';
    setTimeout(() => {
      tnx.classList.add('show');
    }, 10);
});
//////////////////////////////////////////////////////

   // ===== Contact modal =====
const contactBtn = document.getElementById("openContactModal");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeContactModal");

contactBtn.addEventListener("click", () => {
  contactModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
  document.body.style.overflow = "";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
    document.body.style.overflow = "";
  }
});
