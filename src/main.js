import { api } from "./js/pixabay-api.js";

const formEl = document.querySelector(".from"),
listEl = document.querySelector(".list"),
loadEl = document.querySelector(".load-text"),
inputEl = document.querySelector(".form__input");

const API_KEY = `?key=33868959-c90ef2f8a68881f2755b75c20`;
const API_URL = `https://pixabay.com/api/`;
const API_PARAM = `&image_type=photo&orientation=horizontal&safesearch=true`;

formEl.addEventListener("submit", (e) => {
  listEl.innerHTML = "";
  e.preventDefault();

  const inputVal = inputEl.value.trim();
  if (!inputVal) console.error("error");

  const BASE_URL =
    `${API_URL}${API_KEY}&q=${inputVal}${API_PARAM}`;

  api(BASE_URL, listEl, loadEl);

  loadEl.style.display = "block";
  formEl.reset();
})