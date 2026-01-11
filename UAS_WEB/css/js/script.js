document.getElementById("year") &&
(document.getElementById("year").textContent = new Date().getFullYear());

const greetEl = document.getElementById("greeting");
if (greetEl) {
  const h = new Date().getHours();
  greetEl.textContent =
    h<12?"Selamat Pagi ☀️":h<15?"Selamat Siang 🌤️":h<18?"Selamat Sore 🌇":"Selamat Malam 🌙";
}

document.querySelectorAll(".card").forEach(card=>{
  new IntersectionObserver(e=>{
    if(e[0].isIntersecting) card.classList.add("show");
  },{threshold:.2}).observe(card);
});

const toggle=document.getElementById("themeToggle");
if(toggle){
  toggle.onclick=()=>{
    document.body.classList.toggle("light");
    toggle.textContent=document.body.classList.contains("light")?"☀️":"🌙";
  };
}