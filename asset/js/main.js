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
        image: "https://picsum.photos/800/300",
        userName: "Andrea Tommasei",
        userImage: "https://picsum.photos/200/305",
        likes: 12,
        likeBool: false,
        likeIcon: "Like",
        date: "4 months ago"
    }, {
        id: 0,
        bodypost: loremIps,
        image: "https://picsum.photos/810/300",
        userName: "Fabio De Luigi",
        userImage: "https://picsum.photos/202/305",
        likes: 15,
        likeBool: false,
        likeIcon: "Like",
        date: "6 months ago"
    }, {
        id: 0,
        bodypost: loremIps,
        image: "https://picsum.photos/800/310",
        userName: "Franco Mangiasabbia",
        userImage: "https://picsum.photos/206/305",
        likes: 1,
        likeBool: false,
        likeIcon: "Like",
        date: "1 hour ago"
    }
]

// DEBUG POST CREATION###

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];


    const el = createStructure(post);
    console.log(el);
    document.querySelector(".posts").insertAdjacentHTML("beforeend", el);


    // const bodyText = document.getElementById(`postText${idNum}`);
    // const image = document.getElementById(`postImg${idNum}`);
    // const likeBtn = document.getElementById(`postLikeBtn${idNum}`);
    // const likeCnt = document.getElementById(`postLikes${idNum}`);

    // bodyText.innerHTML = `<p>${post.bodypost}</p>`
    // image.innerHTML = ` `
    // likeBtn.innerHTML = ``;
    // likeCnt.innerHTML = ``


}

function createStructure(post) {
    return `
                <div class="post">

                    <div class="user">

                        <div  class="userImg">
                            <img src="${post.userImage}" alt="User Image">
                        </div>

                        <div class="userSide">

                            <div class="userName">
                                ${post.userName}
                            </div>

                            <div class="postDate">
                                ${post.date}
                            </div>

                        </div>

                    </div>

                    <div class="postBody">

                        <div  class="postText">
                            ${post.bodypost}
                        </div>

                        <div class="postImg">
                            <img src = "${post.image}" alt = "Post Image" >
                        </div>

                        <div class="postSocial">

                            <div  class="postLikeBtn">
                                <i class="fas fa-thumbs-up"></i>Like
                            </div>

                            <div class="postLikes">
                                ${post.likes} likes this
                            </div>

                        </div>

                    </div>

                </div>`

}


