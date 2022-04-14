

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
mask.classList.add('hide');
setTimeout( () => {
mask.remove();
}, 600);
});

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.button').addEventListener('click', function () {
    offset += 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button1').addEventListener('click', function () {
    offset -= 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});

