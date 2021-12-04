const axios = require('axios');
const fs = require('fs');
const sharp = require('sharp');

async function downloadImg(imgUrl, imgDir, imgName) {

    try {
        const res = await axios.get(imgUrl, {
            responseType: 'stream'
        })
        const path = imgDir + imgName;
        const writer = fs.createWriteStream(path);

        await new Promise((resolve, reject) => {
            res.data.pipe(writer)
                .on('finish', () => resolve())
                .on('error', reject)
        });

        sharp(path).flip().flop().toFile(`${imgDir}flip-${imgName}`);

    }catch (err) {
        console.log('Error', err);
    }
}


// downloadImg(imgUrl, imgDir, imgName);

module.exports = downloadImg;