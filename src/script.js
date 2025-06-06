let counter = 0;
const counts = document.getElementById("count");
const btn = document.getElementById("cake");
const main = document.getElementById("main");
const gif = document.getElementById("gif");
const tGif = document.getElementById("tGif");
const btnL = document.getElementById("btnL");
const text = document.getElementById("text");
const wrapGif = document.getElementById("wrapGif");
btn.addEventListener("click", () => {
  counter++;
  counts.textContent = counter;
  if (counter === 17) {
    counts.textContent = 17;
    main.classList.add("opacity-0");
    setTimeout(() => {
      main.classList.remove("flex");
      main.classList.add("hidden");
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
      btnL.classList.add("opacity-100");
    }, 500);
  }
});

btnL.addEventListener("click", () => {
  wrapGif.classList.add("opacity-0");
  setTimeout(() => {
    wrapGif.classList.add("hidden");
  }, 500);
  setTimeout(() => {
    text.classList.remove("hidden");
    text.classList.remove("opacity-0");
    text.classList.add("opacity-100");
  }, 500);
});
