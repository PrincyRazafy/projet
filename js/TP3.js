// contenu de navigation automatique

var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
        counter++
    if (counter>5){
       counter=1
    }
}, 4000);

const title = document.querySelector('.title h1');
let position =0;
function animate(){
    position-=0.5;
    title.style.transform = 'translateX(${position}%)';
    if(position <= -100){
        position=0;
    }
    requestAnimationFrame(animate);
}
animate();