import { render } from "./render-functions.js";

const api = (url, listEl, loadEl) => {
  fetch(url, {})
    .then(r => r.json())
    .then(d => render(d, listEl, loadEl))
    .catch(e => console.error(e))
}

export { api };