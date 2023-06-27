const openModalBtnRegister = document.getElementById("openModalRegister");
const modalRegister = document.getElementById("myModalRegister");
const closeModalBtnRegister = document.getElementById("closeModalBtnRegister");
const sendRegister = document.getElementById("send-register");

openModalBtnRegister.addEventListener("click", function () {
  modalRegister.style.display = "block";
});

closeModalBtnRegister.addEventListener("click", function () {
  modalRegister.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalRegister) {
    modalRegister.style.display = "none";
  }
});

function validatePhoneNumber(numero) {
  const regex = /^\d{11}$/g;
  return regex.test(numero);
}

async function postReigster(body) {
  try {
    const request = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      modalRegister.style.display = "none";
    } else {
      const alert = document.getElementById("alert-invalid-register");
      alert.style.display = "flex";
    }
  } catch (error) {
    console.log(error);
  }
}

sendRegister.addEventListener("click", function () {
  const email = document.getElementById("emailRegister").value;
  const password = document.getElementById("passwordRegister").value;
  const phone = document.getElementById("phoneRegister").value;
  const name = document.getElementById("nameRegister").value;

  if (email !== "" && password !== "" && phone !== "" && name !== "") {
    if (validateEmail(email)) {
      if (validatePhoneNumber(phone)) {
        const body = {
          email: email,
          password: password,
          phone_number: phone,
          name: name,
        };

        postReigster(body);
      } else {
        const alert = document.getElementById("alert-phone");
        alert.style.display = "flex";
      }
    } else {
      const alert = document.getElementById("alert-email-register");
      alert.style.display = "flex";
    }
  } else {
    const alert = document.getElementById("alert-all-register");
    alert.style.display = "flex";
  }
});
