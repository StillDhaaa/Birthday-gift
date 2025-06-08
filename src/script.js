let counter = 0;

const counts = document.getElementById("count");
const btn = document.getElementById("cake");
const main = document.getElementById("main");
const gif = document.getElementById("gif");
const tGif = document.getElementById("tGif");
const btnL = document.getElementById("btnL");
const text = document.getElementById("text");
const wrapGif = document.getElementById("wrapGif");
const wm = document.getElementById("wm");

btn.addEventListener("click", () => {
  if (counter < 16) {
    counter++;
    counts.textContent = counter;
  } else {
    counts.textContent = 17;
    main.classList.add("opacity-0");
    setTimeout(() => {
      main.classList.remove("flex");
      main.classList.add("hidden");
      gif.classList.remove("hidden");
    }, 500);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.7 },
    });
    setTimeout(() => {
      gif.classList.remove("opacity-0");
      gif.classList.add("opacity-100");
      tGif.classList.remove("opacity-0");
      tGif.classList.add("opacity-100");
      btnL.classList.remove("opacity-0");
      wm.classList.remove("hidden");
      wm.classList.add("flex");
      btnL.classList.add("opacity-100");
    }, 500);
  }
});

btnL.addEventListener("click", () => {
  btnL.classList.add("opacity-0");
  gif.classList.add("opacity-0");
  tGif.classList.add("opacity-0");
  setTimeout(() => {
    btnL.classList.add("hidden");
    gif.classList.add("hidden");
    tGif.classList.add("hidden");
  }, 500);
  setTimeout(() => {
    text.classList.remove("hidden");
    text.classList.remove("opacity-0");
    text.classList.add("opacity-100");
  }, 500);
});
