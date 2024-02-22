import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const render = (data, list, load) => {
  let markup = ``;
  load.style.display = "none";

  if (data.total === 0) {
    iziToast.error({
      title: "",
      message: "Sorry, there are no images matching your search query. Please, try again!"
    })

    return;
  }

  const itemsMarkup = data.hits.map(item => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads
    } = item;

    const prop = {
      "Likes": likes,
      "Views": views,
      "Comments": comments,
      "Downloads": downloads
    };

    const propMarkup = Object.entries(prop).map(([key, value]) => `
      <li class="sublist__item">
        <div class="sublist__div">
          <p><b>${key}</b></p>
          <p>${value}</p>
        </div>
      </li>
    `).join('');

    return `
      <li class="item list__item">
        <div class="item__div">
          <a href="${largeImageURL}" class="simplelightbox" data-caption="${tags}">
            <img class="item__img" src="${webformatURL}" width="360" height="200" alt="${tags}">
          </a>
          <ul class="sublist item__list">
            ${propMarkup}
          </ul>
        </div>
      </li>
    `;
  }).join('');

  list.insertAdjacentHTML("beforeend", itemsMarkup);

  const lightbox = new SimpleLightbox('.simplelightbox');
  lightbox.refresh();
}

export { render };