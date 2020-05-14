
window.addEventListener('keydown', function (event) {
    const letter = event.key;
    if (!document.querySelector("." +letter)){
        return
    }else{
        document.querySelector("." +letter).classList.add('playing');
        let audio = document.querySelector("#" +letter)
        audio.currentTime = 0;
        audio.play();
    }
    
});
window.addEventListener('keyup', function (event) {
    const letter = event.key;
    if (!document.querySelector("." +letter)){
        return
    }else{
        document.querySelector("." +letter).classList.remove('playing');
    }
})
// console.log(key)