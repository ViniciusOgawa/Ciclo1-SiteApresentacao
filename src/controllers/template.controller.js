const fs = require("fs");
const { sendEmailService } = require("../services/sendEmail/sendEmail.service");

const aboutController = (req, res) => {
  fs.readFile("src/assets/contents/about.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao ler o conteúdo");
    } else {
      const lines = data.split("\n").map((line) => line.trim());
      const aboutContent = lines[0];
      const functionalities = lines.slice(1);

      res.render("about", { aboutContent, functionalities });
    }
  });
};

const aboutMeController = (req, res) => {
  fs.readFile("src/assets/contents/about-me.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao ler o conteúdo");
    } else {
      const lines = data.split("\n");
      const sobreContent = lines.slice(0, 1)[0];
      const tecnologias = lines.slice(1);

      res.render("about-me", { sobreContent, tecnologias });
    }
  });
};

const technologyController = (req, res) => {
  fs.readFile("src/assets/contents/technology.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao ler o conteúdo");
    } else {
      const lines = data.split("\n");
      const frontEndTechs = [];
      const backEndTechs = [];

      let isFrontEnd = true;
      for (let line of lines) {
        if (line.trim() === "Front-end:") {
          isFrontEnd = true;
          continue;
        } else if (line.trim() === "Back-end:") {
          isFrontEnd = false;
          continue;
        }

        if (isFrontEnd) {
          frontEndTechs.push(line);
        } else {
          backEndTechs.push(line);
        }
      }

      res.render("technology", { frontEndTechs, backEndTechs });
    }
  });
};

const contentController = (req, res) => {
  fs.readFile("src/assets/contents/content.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao ler o conteúdo");
    } else {
      const linhas = data.split("\n");

      const title = linhas[0].trim();
      const description = linhas[1].trim();

      const funcionalidades = linhas
        .filter((linha) => linha.startsWith("-"))
        .map((linha) => linha.substring(1).trim());

      res.render("content", { funcionalidades, title, description });
    }
  });
};

const sendEmailController = async (req, res) => {
  const { text, subject, from, name } = req.body;

  await sendEmailService({ text, subject, from, name });

  return res.status(204).send();
};

module.exports = {
  aboutController,
  technologyController,
  contentController,
  aboutMeController,
  sendEmailController,
};
