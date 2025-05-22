import "./dropdown-style.css";

const menus = document.querySelectorAll(".dropdown-menu");

// Show dropdown on hover
menus.forEach((menu) => {
  const menuTitle = menu.querySelector(".title");
  const options = menu.querySelector(".options");
  options.classList.add("hidden");
  menu.addEventListener("mouseenter", () => {
    menu.style.animation = "extend 0.1s ease-in-out 1";
    menu.addEventListener("animationend", handleExtendEnd, { once: true });
  });

  function handleExtendEnd() {
    options.classList.remove("hidden");
    options.classList.add("dropped");
    menu.classList.add("drop-menu");
    menuTitle.classList.add("drop-title-toggled");

    options.style.animation = "fade-in 0.3s ease-in-out 1";
  }

  function handleFadeOutEnd() {
    menu.style.animation = "retract 0.3s ease-in-out 1";
    menu.addEventListener("animationend", handleRetractEnd, { once: true });
  }

  function handleRetractEnd() {
    options.classList.add("hidden");
    options.classList.remove("dropped");
    menu.classList.remove("drop-menu");
    menuTitle.classList.remove("drop-title-toggled");
  }
  // Hide dropdown on mouse leave
  menu.addEventListener("mouseleave", () => {
    options.style.animation = "fade-out 0.1s ease-in-out 1";
    options.addEventListener("animationend", handleFadeOutEnd, { once: true });
  });
});
