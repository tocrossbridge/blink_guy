function blink(){
    var head = document.getElementsByClassName('head');
    var forehead = document.getElementsByClassName('forehead');
    
    var mouth = document.getElementsByClassName('mouth');

    var eyeLeft = document.getElementsByClassName('eyes--left');
    var eyeRight = document.getElementsByClassName('eyes--right');

    var trunk = document.getElementsByClassName('trunk');
    var armsLeft = document.getElementsByClassName('arms--left');
    var armsRight = document.getElementsByClassName('arms--right');


    head[0].classList.add('skin--blink');
    forehead[0].classList.add('skin--blink');

    
    mouth[0].classList.add('mouth--blink');
    mouth[0].classList.remove('mouth');

    eyeLeft[0].classList.add('eyes--blink');
    eyeRight[0].classList.add('eyes--blink');

    trunk[0].classList.add('trunk--blink');
    armsLeft[0].classList.add('arms--left--blink');
    armsRight[0].classList.add('arms--right--blink');
    
}