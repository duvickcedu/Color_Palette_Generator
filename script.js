const generateButton = document.querySelector('#generate');
const colors = document.querySelectorAll('.color-container');
const rgbCode = document.querySelectorAll('.rgb');
const hexCode = document.querySelectorAll('.hex');

generateButton.addEventListener('click', () => {
    console.log('button clicked')
    for (let i = 0; i < colors.length; i++) {
        const randomColor = generator();
        colors[i].style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
        rgbCode[i].textContent = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`.toUpperCase();
        hexCode[i].textContent = `#${rgb2hex(randomColor[0], randomColor[1], randomColor[2])}`.toUpperCase();
    }
})

const generator = () => {
    const rgb = [];
    rgb.push(Math.floor(Math.random() * 256));
    rgb.push(Math.floor(Math.random() * 256));
    rgb.push(Math.floor(Math.random() * 256));
    return rgb;
}

//https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
function rgb2hex(r,g,b) {
    if (g !== undefined)
        return Number(0x1000000 + r*0x10000 + g*0x100 + b).toString(16).substring(1);
    else
        return Number(0x1000000 + r[0]*0x10000 + r[1]*0x100 + r[2]).toString(16).substring(1);
}