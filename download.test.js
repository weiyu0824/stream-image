const downloadImg = require('./download');
const { readFileSync } = require('fs');
const { doesNotMatch } = require('assert');
const imgUrl = 'https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf'

test('correctly download the image', () => {
    downloadImg(imgUrl, imgDir='./test/', imgName='img.jpg')
        .then(() => {
            let dImg = readFileSync('./test/img.jpg');
            let tImg = readFileSync('./test/test-img.jpg')
            expect(dImg.toString()).toBe(tImg.toString());
        }).catch(err => {
            console.log('Error', err);
        }) 
})
