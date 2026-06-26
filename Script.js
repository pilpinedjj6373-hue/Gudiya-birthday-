// Password = 2210

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
