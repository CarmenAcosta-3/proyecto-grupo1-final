export function renderCategorys() {
  const containerCategorys = document.createElement("div");
  containerCategorys.classList.add("categorys-container");

  const individualCategory = document.createElement("div");
  individualCategory.classList.add("category-individual");

  const imgIndividual = document.createElement("img");
  imgIndividual.classList.add("individual-image");
  imgIndividual.src =
    "https://unsplash.com/es/fotos/dos-postres-en-plato-blanco-con-fresas-y-arandanos-5nCTfEru3Do";
  imgIndividual.alt = "Individual category image";

  const textIndividual = document.createElement("h2");
  textIndividual.classList.add("individual-text");
  textIndividual.textContent = "Individuales";

  individualCategory.appendChild(imgIndividual);
  individualCategory.appendChild(textIndividual);

  const cakeCategory = document.createElement("div");
  cakeCategory.classList.add("category-cake");

  const imgCake = document.createElement("img");
  imgCake.classList.add("cake-image");
  imgCake.src =
    "https://unsplash.com/es/fotos/black-berries-on-white-cake-tA3sJ4u09eU";
  imgCake.alt = "Cake category image";

  const textCake = document.createElement("h2");
  textCake.classList.add("cake-text");
  textCake.textContent = "Tartas";

  cakeCategory.appendChild(imgCake);
  cakeCategory.appendChild(textCake);

  const combinationsCategory = document.createElement("div");
  combinationsCategory.classList.add("category-combinations");

  const imgCombinations = document.createElement("img");
  imgCombinations.classList.add("combinations-image");
  imgCombinations.src =
    "https://unsplash.com/es/fotos/postre-al-horno-RZMUaO_f5NM";
  imgCombinations.alt = "Combinations category image";

  const textCombinations = document.createElement("h2");
  textCombinations.classList.add("combinations-text");
  textCombinations.textContent = "Combinados";

  combinationsCategory.appendChild(imgCombinations);
  combinationsCategory.appendChild(textCombinations);

  const drinksCategory = document.createElement("div");
  drinksCategory.classList.add("category-drinks");

  const imgDrinks = document.createElement("img");
  imgDrinks.classList.add("drinks-image");
  imgDrinks.src =
    "https://unsplash.com/es/fotos/dos-vasos-de-vidrio-transparente-kcYXj4tBtes";
  imgDrinks.alt = "Drinks category image";

  const textDrinks = document.createElement("h2");
  textDrinks.classList.add("drinks-text");
  textDrinks.textContent = "Bebidas";

  drinksCategory.appendChild(imgDrinks);
  drinksCategory.appendChild(textDrinks);

  containerCategorys.appendChild(individualCategory);
  containerCategorys.appendChild(cakeCategory);
  containerCategorys.appendChild(combinationsCategory);
  containerCategorys.appendChild(drinksCategory);

  document.body.appendChild(containerCategorys);

  return containerCategorys;
}
