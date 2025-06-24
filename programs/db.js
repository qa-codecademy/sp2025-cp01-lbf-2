const programs = [
  {
    id: 1,
    title: "КЛУБ Мини стартапџии",
    description: "Напреден курс за развој на стартап идеи и имплементација.",
    price: { amount: 3000, type: "месечно" },
    instructor: "Marija",
    ageRange: "15-18",
  },
  {
    id: 2,
    title: "КЛУБ Идни основачи",
    description: "Градење претприемачки вештини преку работа на реални проекти.",
    price: { amount: 1500, type: "месечно" },
    instructor: "Aleksandar",
    ageRange: "10-14",
  },
  {
    id: 3,
    title: "КЛУБ Мали креатори",
    description: "Креативна и практична настава за најмладите истражувачи.",
    price: { amount: 1000, type: "месечно" },
    instructor: "Goran",
    ageRange: "6-9",
  }
  ];


const filterToggleBtn = document.getElementById('filter-toggle');
const filterDropdown = document.getElementById('filter-dropdown');
const applyFiltersBtn = document.getElementById('apply-filters');
const resetFiltersBtn = document.getElementById('reset-filters');

const ageFilter = document.getElementById('age-filter');
const priceFilter = document.getElementById('price-filter');
const instructorFilter = document.getElementById('instructor-filter');

const programCardsContainer = document.querySelector('.program-cards');
const programCards = Array.from(programCardsContainer.querySelectorAll('.card'));

let currentSort = null;

// Toggle Filter Dropdown
filterToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  filterDropdown.classList.toggle('hidden');
  document.getElementById('sort-dropdown')?.classList.add('hidden');
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  filterDropdown.classList.add('hidden');
  document.getElementById('sort-dropdown')?.classList.add('hidden');
});

filterDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Apply Filters
applyFiltersBtn.addEventListener('click', () => {
  applyFilters();
  filterDropdown.classList.add('hidden');
});

// Reset Filters
resetFiltersBtn.addEventListener('click', () => {
  ageFilter.value = '';
  priceFilter.value = '';
  for (const option of instructorFilter.options) {
    option.selected = false;
  }
  applyFilters();
  filterDropdown.classList.add('hidden');
});

function applyFilters() {
  const ageValue = ageFilter.value;
  const priceValue = priceFilter.value ? parseInt(priceFilter.value) : null;
  const selectedInstructors = Array.from(instructorFilter.selectedOptions)
    .map(opt => opt.value)
    .filter(val => val);

  let visibleCount = 0;

  programCards.forEach(card => {
    const cardAge = card.dataset.age;
    const cardPrice = parseInt(card.dataset.price);
    const cardInstructor = card.dataset.instructor;

    const ageMatch = !ageValue || cardAge === ageValue;
    const priceMatch = !priceValue || cardPrice <= priceValue;
    const instructorMatch = selectedInstructors.length === 0 || selectedInstructors.includes(cardInstructor);

    if (ageMatch && priceMatch && instructorMatch) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (visibleCount === 1) {
    programCardsContainer.classList.add('one-visible');
  } else {
    programCardsContainer.classList.remove('one-visible');
  }

  sortPrograms(); 
}

// Sort Handling
document.addEventListener('DOMContentLoaded', () => {
  const sortToggleBtn = document.getElementById('sort-toggle');
  const sortDropdown = document.getElementById('sort-dropdown');
  const filterDropdown = document.getElementById('filter-dropdown'); 

  sortToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sortDropdown.classList.toggle('hidden');
    if (filterDropdown) filterDropdown.classList.add('hidden');
  });

  document.addEventListener('click', () => {
    sortDropdown.classList.add('hidden');
  });

  sortDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    const option = e.target.closest('.sort-option');
    if (option) {
      sortDropdown.querySelectorAll('.sort-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      currentSort = option.dataset.sort;
      sortPrograms();
      sortDropdown.classList.add('hidden');
    }
  });
});

function sortPrograms() {
  const visibleCards = programCards.filter(card => card.style.display !== 'none');

  visibleCards.sort((a, b) => {
    if (currentSort === 'price-asc') {
      return parseInt(a.dataset.price) - parseInt(b.dataset.price);
    }
    if (currentSort === 'price-desc') {
      return parseInt(b.dataset.price) - parseInt(a.dataset.price);
    }
    if (currentSort === 'age-asc') {
      return getMinAge(a.dataset.age) - getMinAge(b.dataset.age);
    }
    if (currentSort === 'age-desc') {
      return getMinAge(b.dataset.age) - getMinAge(a.dataset.age);
    }
    return 0;
  });

  visibleCards.forEach(card => programCardsContainer.appendChild(card));
}

function getMinAge(ageRange) {
  return ageRange ? parseInt(ageRange.split('-')[0]) : 0;
}