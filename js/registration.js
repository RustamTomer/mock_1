document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.querySelector(".btn-register");
    const registrationForm = document.querySelector(".registration-form");
    const closeBtn = document.querySelector(".close-btn");
  
    if (registerBtn && registrationForm) {
      registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        registrationForm.style.display = "block";
        registrationForm.style.transform = "translateX(0)";
      });
    }
  
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        registrationForm.style.transform = "translateX(-100%)";
        setTimeout(() => (registrationForm.style.display = "none"), 500);
      });
    }
  });
  