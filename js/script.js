// Mengambil elemen navbar
const navbarNav = document.querySelector(".navbar-nav");

// Mengambil elemen hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};
