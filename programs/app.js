  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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
// let searchTerm = "";
// let minPrice = 0;
// let maxPrice = Infinity;
// let selectedAge = null;
// let selectedInstructors = [];
// let sortBy = null;
// let currentPage = 1;
// const pageSize = 10;

// function filterPrograms() {
//   let result = programs
//     .filter(p =>
//       p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter(p => p.price.amount >= minPrice && p.price.amount <= maxPrice)
//     .filter(p => !selectedAge || p.ageRange === selectedAge)
//     .filter(p => selectedInstructors.length === 0 || selectedInstructors.includes(p.instructor));

//   if (sortBy === "price") {
//     result.sort((a, b) => a.price.amount - b.price.amount);
//   } else if (sortBy === "age") {
//     const ageOrder = ["6-9", "10-14", "15-18"];
//     result.sort((a, b) => ageOrder.indexOf(a.ageRange) - ageOrder.indexOf(b.ageRange));
//   }

//   const paginated = result.slice((currentPage - 1) * pageSize, currentPage * pageSize);
//   return paginated;
// }

