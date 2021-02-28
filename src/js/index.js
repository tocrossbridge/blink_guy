function blink(){
    var hair = document.getElementsByClassName('hair');

    var head = document.getElementsByClassName('head');
    var forehead = document.getElementsByClassName('forehead');
    
    var mouth = document.getElementsByClassName('mouth');

    var eyeLeft = document.getElementsByClassName('eyes--left');
    var eyeRight = document.getElementsByClassName('eyes--right');

    var shoulder = document.getElementsByClassName('shoulder');
    var trunk = document.getElementsByClassName('trunk');
    var armsLeft = document.getElementsByClassName('arms--left');
    var armsRight = document.getElementsByClassName('arms--right');

    var sectionBtn = document.getElementsByClassName('section-btn');
    var btn = document.getElementsByClassName('btn');
    var btnBlink = document.getElementsByClassName('btn--blink');


    hair[0].classList.add('fringe');

    head[0].classList.add('skin--blink');
    head[0].classList.add('head--blink');
    forehead[0].classList.add('skin--blink');

    
    mouth[0].classList.add('mouth--blink');
    mouth[0].classList.remove('mouth');

    eyeLeft[0].classList.add('eyes--blink');
    eyeRight[0].classList.add('eyes--blink');

    shoulder[0].classList.add('shoulder--blink');
    trunk[0].classList.add('trunk--blink');
    armsLeft[0].classList.add('arms--left--blink');
    armsRight[0].classList.add('arms--right--blink');

    sectionBtn[0].classList.add('section-btn--blink');
    btn[0].classList.add('btn--blink');
    
    if(btnBlink){
        console.log('tá blinkado em nome de jesus!')
    }
}