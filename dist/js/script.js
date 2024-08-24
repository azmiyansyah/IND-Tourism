// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

function processData() {
  // Mendapatkan nilai-nilai input dari formulir
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Lakukan apa pun yang ingin Anda lakukan dengan data tersebut
  // Misalnya, Anda dapat mengirim data ke server melalui permintaan AJAX,
  // menampilkan pesan ke pengguna, atau mengirim data ke konsol untuk debugging.

  console.log("Nama:", name);
  console.log("Email:", email);
  console.log("Pesan:", message);

  // Mengosongkan nilai-nilai input setelah pengiriman
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#message").value = "";
}
