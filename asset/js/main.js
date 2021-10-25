// Creare una pagina che elenchi una lista di post socials a partire da un array di oggetti.
// Gli attributi minimi del modello di un post: id, contenuto, immagine,
//     autore(nome, avatar), numero di likes, data creazione.
// Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.

/*

//A second array should contain only posts id and a like bool

*/

//This is only for readability
const loremIps = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, a. Similique rem ullam laudantium nesciunt!";
const posts = [
    {
        id: 0,
        bodypost: loremIps,
        image: "https://picsum.photos/200/300",
        userName: "Andrea Tommasei",
        userImage: "https://picsum.photos/200/305",
        likes: 12,
        date: "4 months ago"
    }
]
// DEBUG POST CREATION###

for (let i = 0; i < posts.length; i++) {
    //    const element = posts[i];

    const userImg = document.querySelector(".userImg");
    const userName = document.querySelector(".userName");
    const userDate = document.querySelector(".postDate");
    const bodyText = document.querySelector(".postText");
    const image = document.querySelector(".postImg");
    const likeBtn = document.querySelector(".postLikeBtn");
    const likeCnt = document.querySelector(".postLikes");

    userImg.innerHTML = `<img src="${posts[i].userImage}" alt="User Image">`;
    userName.innerHTML = `${posts[i].userName}`;
    userDate.innerHTML = `${posts[i].date}`
    bodyText.innerHTML = `<p>${posts[i].bodypost}</p>`
    image.innerHTML = `<img src = "${posts[i].image}" alt = "Post Image" > `
    //likeBtn.innerHTML = `${posts[i].user}`;
    likeCnt.innerHTML = `${posts[i].likes} likes this`


}




