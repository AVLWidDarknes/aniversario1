const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    setTimeout(redireccion, 200);
    
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
//Redireeccion
function redireccion(){
    window.location.href = "https://avlwiddarknes.github.io/aniversario1/tarjeta.html";
}
