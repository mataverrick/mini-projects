const redBtn = document.getElementById("rb");
const grayBtn = document.getElementById("gb");
const blackBtn = document.getElementById("bkb");
const shopBtn = document.getElementById("sd");

shopBtn.addEventListener("click", () => {
  shopBtn.textContent = "You're about to buy this car";
});

redBtn.addEventListener("click", () => {
  const pp = document.getElementById("cd");
  const img = document.getElementById("img");

  pp.style.backgroundColor = "red";
  shopBtn.style.backgroundColor = "red";
  shopBtn.textContent = "Add to Cart";``
  img.style.backgroundImage = "url(M-2.jpg)";
});

grayBtn.addEventListener("click", () => {
  const pp = document.getElementById("cd");
  const img = document.getElementById("img");

  pp.style.backgroundColor = "gray";
  shopBtn.style.backgroundColor = "gray";
  shopBtn.textContent = "Add to Cart";
  img.style.backgroundImage = "url(M-3.jpg)";
});

blackBtn.addEventListener("click", () => {
  const pp = document.getElementById("cd");
  const img = document.getElementById("img");

  pp.style.backgroundColor = "black";
  shopBtn.style.backgroundColor = "black";
  shopBtn.textContent = "Add to Cart";
  img.style.backgroundImage = "url(M-1.jpg)";
});
