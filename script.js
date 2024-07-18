const memes = [
    'meme 1.jpg',
    'meme 2.jpg',
    'meme 3.png',
    'meme 4.jpg',
    'meme 5.jpg'
];

document.getElementById('memeButton').addEventListener('click', showMeme);

function showMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const memePath = memes[randomIndex];
    document.getElementById('meme').src = memePath;
}
