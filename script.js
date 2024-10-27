const container = document.querySelector(".background");
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0,
);

for (let i = 0; i < vh * 2; i++) {
  const box = document.createElement("div");
  box.classList.add("pixel");
  box.animate([{ opacity: 0.2 }, { opacity: 1 }], {
    duration: 1000 * Math.random() + 1000,
    iterations: Number.POSITIVE_INFINITY,
    direction: "alternate",
    easing: "ease-in-out",
    delay: (Math.random() * 10000) / 2,
  });
  container.appendChild(box);
}

