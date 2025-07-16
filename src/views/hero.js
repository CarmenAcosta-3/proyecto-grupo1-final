export function renderHero() {
  const containerHero = document.createElement("div");
  containerHero.classList.add("hero-container");

  const textPromoHero = document.createElement("h2");
  textPromoHero.classList.add("hero-promo-text");
  textPromoHero.textContent = "¡Promo #DummiesRosquis!";
  containerHero.appendChild(textPromoHero);

  const textEsloganHero = document.createElement("h1");
  textEsloganHero.classList.add("hero-eslogan-text");
  textEsloganHero.textContent = "Vive un momento dulce";
  containerHero.appendChild(textEsloganHero);

  const textHero = document.createElement("p");
  textHero.classList.add("hero-text");
  textHero.textContent =
    "Disfruta de nuestra repostería artesanal en cualquier momento del día a un solo click";
  containerHero.appendChild(textHero);

  const imgHero = document.createElement("img");
  imgHero.classList.add("hero-image");
  imgHero.src = "https://example.com/hero-image.jpg";
  imgHero.alt = "Hero image";
  containerHero.appendChild(imgHero);

  document.body.appendChild(containerHero);

  return containerHero;
}
