const memes = [
    'memes/meme 1.jpg',
    'memes/meme 2.jpg',
    'memes/meme 3.png',
    'memes/meme 4.jpg',
    'memes/meme 5.jpg'
];

document.getElementById('memeButton').addEventListener('click', showMeme);

function showMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const memePath = memes[randomIndex];
    document.getElementById('meme').src = memePath;
}
