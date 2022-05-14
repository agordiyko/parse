const contentWrapper = document.querySelector('.content');


const requestUrl = 'https://agordiyko.github.io/data/data.json'


const createTemplate = data => {
    return `
        <div class="data__item">
            <div class="data__image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <div class="data__title">${data.title}</div>
            <div class="data__box"><span class="data__price_new">${data.priceNew}</span> <span class="data__price_old">${data.priceOld}</span></div >
            <a href="${data.link}" class="data__btn">Купить</a>
        </div >
    `
}

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        if (data) {
            data.forEach(item => {
                contentWrapper.innerHTML += createTemplate(item)
            })
        }
    })
