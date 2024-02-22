import{i as _,S as L}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const v=(s,r,i)=>{if(i.style.display="none",s.total===0){_.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!"});return}const o=s.hits.map(t=>{const{webformatURL:n,largeImageURL:m,tags:l,likes:p,views:d,comments:f,downloads:h}=t,y=Object.entries({Likes:p,Views:d,Comments:f,Downloads:h}).map(([g,b])=>`
      <li class="sublist__item">
        <div class="sublist__div">
          <p><b>${g}</b></p>
          <p>${b}</p>
        </div>
      </li>
    `).join("");return`
      <li class="item list__item">
        <div class="item__div">
          <a href="${m}" class="simplelightbox" data-caption="${l}">
            <img class="item__img" src="${n}" width="360" height="200" alt="${l}">
          </a>
          <ul class="sublist item__list">
            ${y}
          </ul>
        </div>
      </li>
    `}).join("");r.insertAdjacentHTML("beforeend",o),new L(".simplelightbox").refresh()},$=(s,r,i)=>{fetch(s,{}).then(o=>o.json()).then(o=>v(o,r,i)).catch(o=>console.error(o))},c=document.querySelector(".from"),a=document.querySelector(".list"),u=document.querySelector(".load-text"),P=document.querySelector(".form__input"),S="?key=33868959-c90ef2f8a68881f2755b75c20",w="https://pixabay.com/api/",A="&image_type=photo&orientation=horizontal&safesearch=true";c.addEventListener("submit",s=>{a.innerHTML="",s.preventDefault();const r=P.value.trim();r||console.error("error");const i=`${w}${S}&q=${r}${A}`;$(i,a,u),u.style.display="block",c.reset()});
//# sourceMappingURL=commonHelpers.js.map
