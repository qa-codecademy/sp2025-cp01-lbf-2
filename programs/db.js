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

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const filterToggleBtn = document.getElementById('filter-toggle');
  const filterDropdown = document.getElementById('filter-dropdown');
  const sortToggleBtn = document.getElementById('sort-toggle');
  const sortDropdown = document.getElementById('sort-dropdown');
  const applyFiltersBtn = document.getElementById('apply-filters');
  const resetFiltersBtn = document.getElementById('reset-filters');
  const ageFilter = document.getElementById('age-filter');
  const instructorOptions = document.querySelectorAll('.instructor-option');
  const minRange = document.getElementById('minRange');
  const maxRange = document.getElementById('maxRange');
  const sliderTrack = document.getElementById('sliderTrack');
  const priceOutput = document.getElementById('priceOutput');
  const programCardsContainer = document.querySelector('.program-cards');
  const allCards = Array.from(document.querySelectorAll('.program-cards .card'));
  let currentSort = null;

  // Toggle dropdowns
  filterToggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    filterDropdown.classList.toggle('hidden');
    sortDropdown.classList.add('hidden');
  });

  sortToggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    sortDropdown.classList.toggle('hidden');
    filterDropdown.classList.add('hidden');
  });

  document.addEventListener('click', () => {
    filterDropdown.classList.add('hidden');
    sortDropdown.classList.add('hidden');
  });

  filterDropdown.addEventListener('click', e => e.stopPropagation());
  sortDropdown.addEventListener('click', e => e.stopPropagation());

  // Instructor selection
  instructorOptions.forEach(option => {
    option.addEventListener('click', () => {
      option.classList.toggle('selected');
      applyFilters(); // Apply live
    });
  });

  // Slider updates
  function updateSlider() {
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);
    const percent1 = (minVal / 4000) * 100;
    const percent2 = (maxVal / 4000) * 100;
    sliderTrack.style.left = percent1 + "%";
    sliderTrack.style.right = (100 - percent2) + "%";
  }

  function updatePriceOutput() {
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);
    priceOutput.textContent = `Од ${minVal} ден – До ${maxVal} ден`;
  }

  minRange.addEventListener('input', () => {
    if (parseInt(minRange.value) > parseInt(maxRange.value)) {
      minRange.value = maxRange.value;
    }
    updateSlider();
    updatePriceOutput();
    applyFilters();
  });

  maxRange.addEventListener('input', () => {
    if (parseInt(maxRange.value) < parseInt(minRange.value)) {
      maxRange.value = minRange.value;
    }
    updateSlider();
    updatePriceOutput();
    applyFilters();
  });

  // Filters
  applyFiltersBtn.addEventListener('click', () => {
    applyFilters();
    filterDropdown.classList.add('hidden');
  });

  resetFiltersBtn.addEventListener('click', () => {
    ageFilter.value = '';
    minRange.value = 0;
    maxRange.value = 4000;
    updateSlider();
    updatePriceOutput();
    instructorOptions.forEach(opt => opt.classList.remove('selected'));
    applyFilters();
    filterDropdown.classList.add('hidden');
  });

  function applyFilters() {
    const ageVal = ageFilter.value;
    const minPrice = parseInt(minRange.value);
    const maxPrice = parseInt(maxRange.value);
    const selectedInstructors = Array.from(document.querySelectorAll('.instructor-option.selected'))
      .map(el => el.dataset.value);

    let visibleCount = 0;

    allCards.forEach(card => {
      const cardAge = card.dataset.age;
      const cardPrice = parseInt(card.dataset.price);
      const cardInstructor = card.dataset.instructor;

      const ageMatch = !ageVal || cardAge === ageVal;
      const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;
      const instructorMatch = selectedInstructors.length === 0 || selectedInstructors.includes(cardInstructor);

      const visible = ageMatch && priceMatch && instructorMatch;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    programCardsContainer.classList.toggle('one-visible', visibleCount === 1);
    sortPrograms(); // Keep sort active
  }

  // Sorting
  sortDropdown.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', () => {
      sortDropdown.querySelectorAll('.sort-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      currentSort = option.dataset.sort;
      sortPrograms();
      sortDropdown.classList.add('hidden');
    });
  });

  function sortPrograms() {
    const visibleCards = allCards.filter(card => card.style.display !== 'none');
    visibleCards.sort((a, b) => {
      if (currentSort === 'price-asc') return parseInt(a.dataset.price) - parseInt(b.dataset.price);
      if (currentSort === 'price-desc') return parseInt(b.dataset.price) - parseInt(a.dataset.price);
      if (currentSort === 'age-asc') return getMinAge(a.dataset.age) - getMinAge(b.dataset.age);
      if (currentSort === 'age-desc') return getMinAge(b.dataset.age) - getMinAge(a.dataset.age);
      return 0;
    });
    visibleCards.forEach(card => programCardsContainer.appendChild(card));
  }

  function getMinAge(ageRange) {
    return ageRange ? parseInt(ageRange.split('-')[0]) : 0;
  }

  // Initial UI setup
  updateSlider();
  updatePriceOutput();
  applyFilters();
});