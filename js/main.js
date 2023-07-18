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

posts.forEach((singleObject, i) => {
    //console.log(singleObject);
    const id = singleObject.id;
    const content = singleObject.content;
    const media = singleObject.media;
    const authorName = singleObject.author.name;
    const authorImage = singleObject.author.image;
    const likes = singleObject.likes;
    const created = singleObject.created;


    //FORMATTO LA DATA IN FORMATO ITA
    let data = created;
    var dataObj = new Date(data);
    let giorno = dataObj.getDate();
    let mese = dataObj.getMonth() + 1;
    let anno = dataObj.getFullYear();
    let formattedDate = giorno + " " + mese + " " + anno;


    //CREO IL IL DIV NEL QUALE INIETTARE TUTTO IL CODICE, ASSEGNO LA CLASSE E INIETTO L'HTML
    const postCard = document.createElement("div");
    postCard.classList.add("post");
    postCard.innerHTML = `<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${authorImage}" alt="${authorName}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${authorName}</div>
            <div class="post-meta__time">${formattedDate}</div>
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
            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
</div>            
</div>`

    //RICHIAMO IL CONTAINER GENERALE E "APPENDO" TUTTO IL CONTENUTO
    const generalContainer = document.getElementById("container");
    generalContainer.appendChild(postCard);
})

//CREO EVENT LISTENER PER I LIKE (INCREMENTA E DECREMENTA)
let arrayPostIdLike = [];
posts.forEach((element, i) => {
    const btnLike = document.querySelectorAll(".js-like-button");
    const countLike = document.querySelectorAll(".js-likes-counter");
    btnLike[i].addEventListener("click", function () {
        const toggleBtn = btnLike[i].classList.toggle("like-button--liked");
        if (toggleBtn === true) {
            posts[i].likes += 1; //sovrascrivo il nuovo valore direttamente nell'oggetto
            countLike[i].innerHTML = posts[i].likes; //inserisco il nuovo valore nel html
        } else {
            posts[i].likes -= 1; //sovrascrivo il nuovo valore direttamente nell'oggetto
            countLike[i].innerHTML = posts[i].likes; //inserisco il nuovo valore nel html
        }


        //BLOCCO CHE INSERISCE/RIMUOVE L'ID DEL POST IN UN ARRAY IN BASE AL LIKE
        const singleIdElement = countLike[i].id;
        console.log(singleIdElement);
        // prendo l'ultimo elemento della stringa "id"  
        const trattinoFinale = singleIdElement.lastIndexOf("-");
        const myIdNumber = singleIdElement.substring(trattinoFinale + 1) //prende i caratteri dopo l'ultimo trattino
        console.log(`id dell'elemento cliccato: ${myIdNumber}`);
        // verifico se in arrayPostIdLike esiste un elemento dello stesso valore 
        // dell'ultimo elemento della stringa "id"
        // se esiste allora lo tolgo dall'array perchè stiamo togliendo un like
        // viceversa se non è presente nell'array lo pusho perche' stiamo aggiungendo un like
        if (arrayPostIdLike.includes(myIdNumber)) {
            const index = arrayPostIdLike.indexOf(myIdNumber);
            if (index > -1) {
                arrayPostIdLike.splice(index, 1);
                console.log(`like rimosso dall'array!`);
            }
        } else {
            arrayPostIdLike.push(myIdNumber);
            console.log(`like aggiunto all'array!`);
        }
        console.log("hai messo like sui post numero: [" + arrayPostIdLike + "]");
    })
})


// //GESTISCO L'ASSENZA DELL'IMG DEL PROFILO ("al momento non funziona")
// posts.forEach((singleObject, i) => {
//     const authImg = singleObject.author.image;
//     if (authImg === null) {
//         console.log(authImg);
//         let containerImageNull = document.querySelector(".post-meta__icon");
//         const newTagImg = document.createElement("p");
//         newTagImg.innerHTML = `aaa`;
//         containerImageNull.appendChild(newTagImg);
//         console.log(newTagImg);
//     }
// });






