document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card, index) => {
      card.addEventListener("click", function (e) {
        e.preventDefault(); 
  
        const targetSection = document.getElementById(`section${index + 1}`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
  
         
          const fullText = targetSection.querySelector(".full-text");
          const button = targetSection.querySelector(".toggle-btn");
          if (fullText && button && !fullText.classList.contains("show")) {
            fullText.classList.add("show");
            targetSection.classList.add("expanded");
            button.textContent = "Помалку";
          }
        }
      });
    });
  
    
    const buttons = document.querySelectorAll(".toggle-btn");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const section = button.closest(".section-card");
        const fullText = section.querySelector(".full-text");
  
        const isVisible = fullText.classList.toggle("show");
        section.classList.toggle("expanded", isVisible);
  
        button.textContent = isVisible ? "Помалку" : "Повеќе";
      });
    });
  });
  