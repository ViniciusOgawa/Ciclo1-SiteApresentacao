const sendLogin = document.getElementById("send-login");
const openModalBtnLogin = document.getElementById("openModalLogin");
const modalLogin = document.getElementById("myModalLogin");
const closeModalBtnLogin = document.getElementById("closeModalBtnLogin");

openModalBtnLogin.addEventListener("click", function () {
  modalLogin.style.display = "block";
});

closeModalBtnLogin.addEventListener("click", function () {
  modalLogin.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
});

async function postLogin(body) {
  try {
    const request = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      const response = await request.json();

      modalLogin.style.display = "none";

      window.location.href = `http://localhost:5173/?token=${response.token}`;
    } else {
      const alert = document.getElementById("alert-invalid-login");
      alert.style.display = "flex";
    }
  } catch (error) {
    console.log(error);
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

sendLogin.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email !== "" && password !== "") {
    const alert = document.getElementById("alert-all-login");
    alert.style.display = "none";
    if (validateEmail(email)) {
      const alert = document.getElementById("alert-email-login");
      alert.style.display = "none";
      const body = {
        email: email,
        password: password,
      };

      postLogin(body);
    } else {
      const alert = document.getElementById("alert-email-login");
      alert.style.display = "flex";
    }
  } else {
    const alert = document.getElementById("alert-all-login");
    alert.style.display = "flex";
  }
});
