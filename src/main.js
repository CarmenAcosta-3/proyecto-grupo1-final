import { userLogin } from "../src/views/login";
import { renderSignupView } from "./views/signup.js";
import { renderHero } from "./views/hero.js";
import { renderCategorys } from "./views/categorys.js";
import { generatePaymentForm } from "./api/apiPayment";

document.addEventListener("DOMContentLoaded", () => {
  userLogin();
  renderSignupView(); // Esta función debe encargarse de montar la vista de registro
  renderHero();
  renderCategorys();
});

const container = document.getElementById("app");
generatePaymentForm(container);
