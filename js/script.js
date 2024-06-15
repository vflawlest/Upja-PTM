// Mengambil elemen navbar
const navbarNav = document.querySelector(".navbar-nav");

// Mengambil elemen hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};
// Form kirim ke WA
document.getElementById("whatsappForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name		= document.getElementById("name").value;
  var phone 		= document.getElementById("phone").value;
  var message 	= document.getElementById("message").value;
  let contact 	= '+6281573283600'; // isi dengan nomor WA (+6283811223344)

  var encodedMessage = encodeURIComponent(
      "Nama	: " + name + "\n" +
      "No Whatsapp		: " + phone + "\n" +
      "Pesan		: " + message
  );

  var link;

  // Check if user is on a mobile device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
  } else { // Desktop device
      link = `https://api.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
  }

  window.open(link, '_blank');
});
