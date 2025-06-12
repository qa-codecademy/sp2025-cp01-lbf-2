  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  //proba
// ===== Modals =====
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

// ===== Slider =====
const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const images = document.querySelectorAll('.slider-image');

let currentIndex = 0;
const visibleImagesCount = Math.floor(document.querySelector('.slider-container').offsetWidth / images[0].offsetWidth);

function updateSlider() {
  const offset = -(images[0].offsetWidth + 20) * currentIndex; 
  sliderTrack.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - visibleImagesCount) {
    currentIndex++;
    updateSlider();
  }
});

// ===== Signup form =====
const form = document.getElementById('signup-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Ви благодариме што се пријавивте! Ќе ве контактираме наскоро.');
  form.reset();
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

// ===== FAQ Toggle =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ===== Open Signup modal from other modals =====
document.querySelectorAll('.signup-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    modals.forEach(modal => modal.style.display = 'none');
    document.getElementById('modal-signup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});