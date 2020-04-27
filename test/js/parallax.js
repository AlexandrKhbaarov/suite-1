let circle = document.querySelector('.main__decoration-circle');
let bolt = document.querySelector('.main__decoration-bolt');



function onMotionChange(e) {

    let agZ = e.accelerationIncludingGravity.z -5;
    let agX = e.accelerationIncludingGravity.x;

    bolt.style.transform = `translateX(${agX*13}px)
                            translateY(${agZ*7}px) 
                            rotateX(${agZ*5}deg)
                            rotateY(${agX*13}deg)`

    circle.style.transform = `translateX(${agX*7}px)
                            translateY(${agZ*5}px) 
                            rotateX(${agZ*5}deg)
                            rotateY(${agX*13}deg)`

}