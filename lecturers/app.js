  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
   //Modal

const modals = document.querySelectorAll('.modal');
const openModalButtons = document.querySelectorAll('.card-button');
const closeButtons = document.querySelectorAll('.close');

// Open modal
openModalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Disable background scroll
    }
  });
});

// Close modal (via button)
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scroll
    }
  });
});
// Close modal when clicking on the overlay
modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});
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

// ScrollToTopBtn

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });