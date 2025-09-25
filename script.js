const h1 = document.querySelector('h1');
const body = document.body;
const luckyButton = document.getElementById('lucky-button');
const shapesContainer = document.getElementById('shapes-container');

const colors = ['#ff9a9e', '#fad0c4', '#ffdde1', '#ee9ca7'];
let currentIndex = 0;

const phrases = [
    "Dream Big, Work Hard",
    "Shine Like a Star",
    "Embrace the Journey",
    "Create Your Sunshine",
    "Believe in Yourself",
    "Stay Strong and Sparkle",
    "Choose Joy Today",
    "Good Vibes Only"
];

// Set initial gradient
body.style.background = `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`;
body.style.backgroundSize = '400% 400%';
body.style.animation = 'gradient-animation 15s ease infinite';


h1.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % colors.length;
    body.style.background = `linear-gradient(45deg, ${colors[currentIndex]}, ${colors[(currentIndex + 2) % colors.length]})`;
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient-animation 15s ease infinite';
});

luckyButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    h1.textContent = phrases[randomIndex];
});

const shapeTypes = ['circle', 'square', 'triangle'];
const shapeColors = ['rgba(255, 255, 255, 0.5)', 'rgba(255, 221, 225, 0.7)', 'rgba(250, 208, 196, 0.7)'];

for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    
    shape.classList.add('shape', `shape-${type}`);
    shape.style.position = 'absolute';
    shape.style.bottom = '-150px';
    shape.style.opacity = '0';
    shape.style.animation = `float ${Math.random() * 20 + 15}s linear infinite`;
    shape.style.animationDelay = `${Math.random() * 5}s`;

    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.backgroundColor = shapeColors[Math.floor(Math.random() * shapeColors.length)];
    
    const size = Math.random() * 80 + 20; // 20px to 100px
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    if (type === 'circle') {
        shape.style.borderRadius = '50%';
    } else if (type === 'triangle') {
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.backgroundColor = 'transparent';
        shape.style.borderLeft = `${size / 2}px solid transparent`;
        shape.style.borderRight = `${size / 2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid ${shapeColors[Math.floor(Math.random() * shapeColors.length)]}`;
    }

    shapesContainer.appendChild(shape);
}

const keyframes = `
@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh) rotate(720deg);
        opacity: 0;
    }
}
@keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);