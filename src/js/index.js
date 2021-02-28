function blink(){
    var head = document.getElementsByClassName('head');
    var forehead = document.getElementsByClassName('forehead');
    
    var mouth = document.getElementsByClassName('mouth');

    var eyeLeft = document.getElementsByClassName('eyes--left');
    var eyeRight = document.getElementsByClassName('eyes--right');


    head[0].classList.add('skin--blink');
    forehead[0].classList.add('skin--blink');

    
    mouth[0].classList.add('mouth--blink');
    mouth[0].classList.remove('mouth');

    eyeLeft[0].classList.add('eyes--blink');
    eyeRight[0].classList.add('eyes--blink');
}