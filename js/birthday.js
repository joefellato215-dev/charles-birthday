const beginBtn = document.getElementById("beginBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const message = document.getElementById("message");
const cake = document.getElementById("cake");
const toast = document.getElementById("toast");

function showToast(text){
  if(!toast) return;

  toast.textContent = text;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}

function celebrate(){

  const colors = [
    "#e7b85b",
    "#f4cb73",
    "#ffffff",
    "#d9a7ff",
    "#f28b82"
  ];

  for(let i = 0; i < 110; i++){

    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration =
      (2 + Math.random() * 2.5) + "s";

    piece.style.animationDelay =
      (Math.random() * .45) + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5200);
  }

  if(cake){

    cake.style.transform =
      "scale(1.25) rotate(7deg)";

    setTimeout(() => {
      cake.style.transform = "";
    }, 500);
  }

  showToast(
    "🎉 Happy Birthday, Charles! Make this year count."
  );
}

if(beginBtn && message){

  beginBtn.addEventListener("click", () => {

    message.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

  });

}

if(celebrateBtn){
  celebrateBtn.addEventListener("click", celebrate);
}
