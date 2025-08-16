module.exports = () => {
    const sound = require('sound-play');
    const path = require("path");

    const options = ['1.mp3','2.mp3','3.mp3','4.mp3','5.mp3','6.mp3','7.mp3','8.mp3'];
    // const opt = Math.floor(Math.random() * options.length -1);
    const opt = Math.floor(Math.random() * (options.length));
    // console.log('opt', opt);
    // console.log('options[opt]', options[opt]);
    // console.log('IMPORTED');

    const filePath = path.join(__dirname, 'clips', options[opt]);
    console.log('filePath', filePath);
    sound.play(filePath);
};
