# Gudiya-birthday-
Birthday surprise for gudiya 💖
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Happy Birthday Gudiya ❤️</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- Floating Hearts -->
<div class="hearts">
  <span>💖</span>
  <span>💕</span>
  <span>💗</span>
  <span>💝</span>
  <span>❤️</span>
</div>

<!-- Password Screen -->
<div id="loginPage" class="page active">

    <h1>🔐 Birthday Surprise</h1>

    <p>Only for Gudiya 💖</p>

    <input
    type="password"
    id="password"
    placeholder="Enter Password">

    <br><br>

    <button onclick="checkPassword()">
        Unlock
    </button>

</div>


<!-- Welcome -->
<div id="welcomePage" class="page">

<h1>✨ Welcome Gudiya ✨</h1>

<p>
A Special Surprise Is Waiting For You ❤️
</p>

<button onclick="nextPage()">
Open Surprise 🎁
</button>

</div>


<!-- Birthday -->
<div id="birthdayPage" class="page">

<h1>
🎂 Happy Birthday Gudiya 🎂
</h1>

<h2>
Best Friend Forever ❤️
</h2>

<p>

No matter kitni ladai ho...

Tum meri sabse special best friend ho.

Hamesha khush rehna 😊

</p>

<button onclick="nextGallery()">

See Memories 📸

</button>

</div>


<!-- Gallery -->

<div id="galleryPage" class="page">

<h1>📸 Beautiful Memories</h1>

<div class="gallery">

<img src="images/1.jpg">

<img src="images/2.jpg">

<img src="images/3.jpg">

<img src="images/4.jpg">

<img src="images/5.jpg">

<img src="images/6.jpg">

<img src="images/7.jpg">

</div>

<button onclick="nextLetter()">

Read Letter 💌

</button>

</div>


<!-- Letter -->

<div id="letterPage" class="page">

<h1>💌 Dear Gudiya</h1>

<p>

Happy Birthday ❤️

Tum meri life ki sabse important
best friend ho.

Main dua karta hu ki
tum hamesha smile karo 😊

Aur tumhari har wish
poori ho.

Thank You For Being My Best Friend ❤️

</p>

<button onclick="finish()">

Final Surprise 🎁

</button>

</div>


<!-- Final -->

<div id="finalPage" class="page">

<h1>

🎉 Happy Birthday Gudiya 🎉

</h1>

<h2>

Best Friend Forever ❤️

</h2>

<p>

Stay Happy

Stay Blessed

Keep Smiling 😊

</p>

</div>


<audio
id="music"
loop>

<source
src="music.mp3"
type="audio/mpeg">

</audio>

<script src="script.js"></script>

</body>
</html>*{margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{

background:linear-gradient(135deg,#ff9ecf,#ffd6eb);

overflow-x:hidden;

text-align:center;

color:white;

}

/* Pages */

.page{

display:none;

padding:40px 20px;

min-height:100vh;

justify-content:center;

align-items:center;

flex-direction:column;

}

.active{

display:flex;

}

/* Input */

input{

padding:15px;

border:none;

border-radius:15px;

width:250px;

font-size:18px;

text-align:center;

margin-top:20px;

}

/* Button */

button{

padding:15px 30px;

border:none;

border-radius:30px;

background:white;

color:#ff2d7a;

font-size:18px;

font-weight:bold;

cursor:pointer;

margin-top:25px;

transition:.3s;

}

button:hover{

transform:scale(1.08);

}

/* Gallery */

.gallery{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(150px,1fr));

gap:15px;

margin-top:25px;

}

.gallery img{

width:100%;

border-radius:20px;

box-shadow:0 0 20px rgba(255,255,255,.5);

transition:.4s;

}

.gallery img:hover{

transform:scale(1.08);

}

/* Hearts */

.hearts{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

pointer-events:none;

overflow:hidden;

}

.hearts span{

position:absolute;

bottom:-50px;

font-size:28px;

animation:float 8s linear infinite;

}

.hearts span:nth-child(1){

left:10%;

animation-delay:0s;

}

.hearts span:nth-child(2){

left:30%;

animation-delay:2s;

}

.hearts span:nth-child(3){

left:50%;

animation-delay:4s;

}

.hearts span:nth-child(4){

left:70%;

animation-delay:1s;

}

.hearts span:nth-child(5){

left:90%;

animation-delay:3s;

}

@keyframes float{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}

h1{

font-size:42px;

margin-bottom:20px;

}

h2{

margin:20px;

}

p{

font-size:20px;

line-height:1.7;

max-width:700px;

margin:auto;

} // Password = 2210

function checkPassword() {

let pass = document.getElementById("password").value;

if (pass === "2210") {

document.getElementById("loginPage").classList.remove("active");
document.getElementById("loginPage").style.display = "none";

document.getElementById("welcomePage").style.display = "flex";
document.getElementById("welcomePage").classList.add("active");

// Play Music
let music = document.getElementById("music");
music.play().catch(()=>{});

}
else{

alert("❌ Wrong Password");

}

}

// Welcome → Birthday
function nextPage(){

document.getElementById("welcomePage").style.display="none";

document.getElementById("birthdayPage").style.display="flex";

}

// Birthday → Gallery

function nextGallery(){

document.getElementById("birthdayPage").style.display="none";

document.getElementById("galleryPage").style.display="flex";

}

// Gallery → Letter

function nextLetter(){

document.getElementById("galleryPage").style.display="none";

document.getElementById("letterPage").style.display="flex";

}

// Letter → Final

function finish(){

document.getElementById("letterPage").style.display="none";

document.getElementById("finalPage").style.display="flex";

confettiEffect();

}

// Small Confetti Effect

function confettiEffect(){

for(let i=0;i<80;i++){

let heart=document.createElement("div");

heart.innerHTML="🎉";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.transition="4s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

heart.style.transform="rotate(720deg)";

},100);

setTimeout(()=>{

heart.remove();

},4500);

}

}

// Enter Key Support

document.addEventListener("DOMContentLoaded",()=>{

let input=document.getElementById("password");

if(input){

input.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

}

});
