
const followDiv = document.getElementById('followDiv');
var bouchon = document.getElementById('bouchon');
document.addEventListener("touchmove", (e) => {
    e.preventDefault();
    followDiv.style.display = 'flex';
    bouchon.style.display = 'none';
    
    const touch = e.touches[0] || e.changedTouches[0];
    let x = touch.clientX;
    let y = touch.clientY;

    // Obtenez les dimensions de la fenêtre
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Obtenez les dimensions du div
    const divWidth = followDiv.offsetWidth;
    const divHeight = followDiv.offsetHeight;

    // Calculez la nouvelle position du div
    let newX = x - divWidth / 2;
    let newY = y - divHeight / 2;

    // Limitez la position X
    if (newX < 0) newX = 0;
    if (newX + divWidth > windowWidth) newX = windowWidth - divWidth;

    

    // Limitez la position Y
    if (newY < 0) newY = 0;
    if (newY + divHeight > windowHeight) newY = windowHeight - divHeight;

    // Appliquez les nouvelles positions
    followDiv.style.left = `${newX}px`;
    followDiv.style.top = `${newY}px`;

});

document.addEventListener("touchend", (e) => {
    followDiv.style.display = 'none';
    bouchon.style.display = 'flex';
});