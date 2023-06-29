const sendEmailBtn = document.getElementById("send-email");
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

async function sendEmail(body) {
  try {
    const alert = document.getElementById("alert");
    alert.style.display = "none";
    sendEmailBtn.innerHTML = "Enviando...";
    await fetch("http://localhost:3000/template/sendEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    sendEmailBtn.innerHTML = "Enviar";
    modalEmail.style.display = "none";
  } catch (error) {
    const alert = document.getElementById("alert");
    alert.style.display = "Flex";
    console.log(error);
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateName(name) {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name);
}

sendEmailBtn.addEventListener("click", async function () {
  const name = document.getElementById("nome").value;
  const subject = document.getElementById("assunto").value;
  const text = document.getElementById("mensagem").value;
  const from = document.getElementById("email").value;

  if (name !== "" && subject !== "" && text !== "" && from !== "") {
    const alert = document.getElementById("alert-all");
    alert.style.display = "none";
    if (validateEmail(from)) {
      const alert = document.getElementById("alert-invalid-email");
      alert.style.display = "none";
      if (validateName(name)) {
        const alert = document.getElementById("alert-invalid-name");
        alert.style.display = "none";
        await sendEmail({ text, subject, from, name });
      } else {
        const alert = document.getElementById("alert-invalid-name");
        alert.style.display = "flex";
      }
    } else {
      const alert = document.getElementById("alert-invalid-email");
      alert.style.display = "flex";
    }
  } else {
    const alert = document.getElementById("alert-all");
    alert.style.display = "flex";
  }
});
