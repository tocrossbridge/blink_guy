function blink() {
    var btn = document.getElementsByClassName('btn');
    var btnBlink = document.querySelector('.btn.blink');

    if (btnBlink == null) return blinkTheGuy();
    if (btn && btnBlink != null) return unblinkTheGuy();
}

function blinkTheGuy() {
    var theGuy = document.getElementsByClassName('the-guy')[0];
    theGuy.classList.add('blink')

    var blinkMusic = document.getElementsByClassName('blink-music')[0];
    blinkMusic.style.display = 'block'

    var btn = document.getElementById('btn');
    btn.classList.add('blink')
}

function unblinkTheGuy() {
    var theGuy = document.getElementsByClassName('the-guy')[0];
    theGuy.classList.remove('blink');

    var blinkMusic = document.getElementsByClassName('blink-music')[0];
    blinkMusic.style.display = 'none'

    var btn = document.getElementById('btn');
    btn.classList.remove('blink')
}