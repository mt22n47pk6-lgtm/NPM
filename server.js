const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// PAGE FORMULAIRE
app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Formulaire</title>
</head>
<body>

<h2>Formulaire simple</h2>

<form method="POST" action="/send">
<input type="text" name="username" placeholder="Username" required>
<br><br>
<input type="password" name="password" placeholder="Password" required>
<br><br>
<button type="submit">Envoyer</button>
</form>

</body>
</html>
`);
});

// RECEPTION DES DONNÉES
app.post("/send", (req, res) => {

const username = req.body.username;
const password = req.body.password;

// 👉 ICI TU VOIS LES INFOS DANS LE TERMINAL
console.log("USERNAME:", username);
console.log("PASSWORD:", password);

res.send("Reçu ! regarde ton terminal VS Code");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Serveur démarré sur port " + PORT);
});