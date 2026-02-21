let btn_contact = document.querySelector(".icones");

function contact() {
  if (btn_contact.innerHTML === "") {
    btn_contact.innerHTML =
      '<a href="https://instagram.com/elliss.nfc" target="_blank"><i class="fab fa-instagram"></a></i> <i class="far fa-envelope"></i>';
  } else {
    btn_contact.innerHTML = "";
  }
}
