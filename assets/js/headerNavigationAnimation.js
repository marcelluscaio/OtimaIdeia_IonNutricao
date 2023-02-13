const menuItems = document.querySelectorAll(".header-navigation__link");
const underline = document.querySelector("#nav-underline")

menuItems.forEach(item => item.addEventListener('mouseover', (e) => {
   underline.style.width = `${e.target.offsetWidth}px`;
   underline.style.left = `${e.target.offsetLeft}px`;
}));