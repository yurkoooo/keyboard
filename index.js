const keyboard = document.querySelectorAll('.keyboard');
function t11 (event) {
    keyboard.forEach(function (element) {
        element.classList.remove('active');
    })
    console.log(event);
    let key = event.key;
    if (key == ' ') {
        key = 'space';
    } 
    let button = document.querySelector(`.keyboard[data="${key}"]`);
    button.classList.add('active');
}

document.querySelector('.keyInput').onkeydown = t11;

