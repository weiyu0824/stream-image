const download = require('./download');
const imgUrl = 'https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf'
const imgDir = './images/'
const imgName = 'img.jpg';

download(imgUrl, imgDir, imgName);