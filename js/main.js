'use strict'
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//FUNZIONE CHE CICLA L'ARRAY DI OGGETTI

posts.forEach(singleObject => {
    console.log(singleObject);
    const id = singleObject.id;
    const content = singleObject.content;
    const media = singleObject.media;
    const authorName = singleObject.author.name;
    const authorImage = singleObject.author.image;
    const likes = singleObject.likes;
    const created = singleObject.created;

    //CREO IL IL DIV NEL QUALE INIETTARE TUTTO IL CODICE, ASSEGNO LA CLASSE E INIETTO L'HTML
    const postCard = document.createElement("div");
    postCard.classList.add("post");
    postCard.innerHTML = `<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${authorImage}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${authorName}</div>
            <div class="post-meta__time">${created}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${content}</div>
<div class="post__image">
    <img src="${media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" data-postid="${id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
</div>            
</div>`

    //RICHIAMO IL CONTAINER GENERALE E "APPENDO" TUTTO IL CONTENUTO
    const generalContainer = document.getElementById("container");
    generalContainer.appendChild(postCard);
})


posts.forEach((element, i) => {
   const arrayPostId = []; 
    const btnLike = document.querySelectorAll(".js-like-button");
    const countLike = document.querySelectorAll("#like-counter-1");
    btnLike[i].addEventListener("click", function () {
        const toggleBtn = btnLike[i].classList.toggle("like-button--liked");
        if (toggleBtn === true) {
            countLike[i].innerHTML = posts[i].likes + 1;
        } else {
            countLike[i].innerHTML = posts[i].likes - 1;
        }
        arrayPostId.push(posts[i].id)
        console.log(arrayPostId);
    })
})