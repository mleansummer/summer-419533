const canvas = document.getElementById('gradient-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let colors = [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 }
];
let colorIndex = 0;
let step = 0;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

function updateGradient() {
    step += 0.005;
    if (step >= 1) {
        step = 0;
        colorIndex = (colorIndex + 1) % colors.length;
    }

    const c1 = colors[colorIndex];
    const c2 = colors[(colorIndex + 1) % colors.length];

    const r = Math.round(c1.r + step * (c2.r - c1.r));
    const g = Math.round(c1.g + step * (c2.g - c1.g));
    const b = Math.round(c1.b + step * (c2.b - c1.b));

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
    gradient.addColorStop(1, `rgb(${255-r}, ${255-g}, ${255-b})`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(updateGradient);
}

updateGradient();
