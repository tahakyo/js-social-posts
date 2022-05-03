// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=172",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Post creato numero 2",
        "media": "https://unsplash.it/600/300?image=173",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=17"
        },
        "likes": 85,
        "created": "2021-07-25"
    },
    {
        "id": 3,
        "content": "Post creato numero 2",
        "media": "https://unsplash.it/600/300?image=173",
        "author": {
            "name": "Phil Mangione",
        },
        "likes": 85,
        "created": "2021-07-25"
    },

    
];

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.



const   postsContainer = document.getElementById('container');
        postsContainer.classList.add('posts-list');
console.log(postsContainer)

printPosts(postsContainer, posts);










// FUNCTIONS
/**
 *
 *
 * @param {*} container --> contenitore del dom
 * @param {*} objectArray--> array degli elementi da creare nel dom
 */
function printPosts (container, objectArray) {
    container.innerHTML = "";
    objectArray.forEach(element => {
        const genDomElement = createDomElement(element);
        container.append(genDomElement);
    });
}

/**
 * Description : crea elementi nel dom in base all oggetto passato;
 *
 * @param {object} --> l'oggetto sui cui è basato la creazione          dell'elemento
 * @returns {*} --> l'elemento creato
 */
function createDomElement(items) {
    // creo elemento x elemento seguendo la struttura in html
    const   postDom = document.createElement("div");
            postDom.classList.add('post');
    postDom.innerHTML = `<div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${items.media}" alt="${items.author.name}">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${items.author.name}</div>
                                    <div class="post-meta__time">4 mesi fa</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                        <div class="post__image">
                            <img src="https://unsplash.it/600/300?image=171" alt="">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="1">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                                 </div>
                            </div> 
                        </div> `
}