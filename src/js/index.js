function blink(){
    var eyeLeft = document.getElementsByClassName('eyes--left');
    var eyeRight = document.getElementsByClassName('eyes--right');

    eyeLeft[0].classList.add('eyes--blink');
    eyeRight[0].classList.add('eyes--blink');
}