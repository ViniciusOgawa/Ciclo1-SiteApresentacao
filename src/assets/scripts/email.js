const sendEmail = document.getElementById("send-email");
const openModalBtnEmail = document.getElementById("openModalBtnEmail");
const modalEmail = document.getElementById("myModalEmail");
const closeModalBtnEmail = document.getElementById("closeModalBtnEmail");

openModalBtnEmail.addEventListener("click", function () {
  modalEmail.style.display = "block";
});

closeModalBtnEmail.addEventListener("click", function () {
  modalEmail.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalEmail) {
    modalEmail.style.display = "none";
  }
});

sendEmail.addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;
  const email = document.getElementById("email").value;

  const emailDestinatario = "viniogawa321@gmail.com";
  const corpo = `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`;
  const url =
    "mailto:" +
    emailDestinatario +
    "?subject=" +
    encodeURIComponent(assunto) +
    "&body=" +
    encodeURIComponent(corpo);
  window.open(url);
});
