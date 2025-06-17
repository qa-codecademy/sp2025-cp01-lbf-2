  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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

