const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");//button
const memeImage = document.querySelector(".meme-generator img");//image of meme
const memeTitle = document.querySelector(".meme-generator .meme-title");//title of meme
const memeAuthor = document.querySelector(".meme-generator .meme-author");//author of meme
const updateDetails = (url, title, author) => {
memeImage.setAttribute("src", url);//to set attributes
memeTitle.innerHTML = title;//innerhtml to modify content of html
memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};
generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();