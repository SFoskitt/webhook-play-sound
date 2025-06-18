module.exports = () => {
    const sound = require('sound-play');
    const options = ['1.mp3','2.mp3','3.mp3','4.mp3','5.mp3','6.mp3','7.mp3','8.mp3'];
    const opt = Math.floor(Math.random() * (options.length - 1 + 1) + 1);
    console.log("should work");
    sound.play(options[opt]);
};