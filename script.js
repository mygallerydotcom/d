document.addEventListener('mousemove', function(e) {
    createTrail(e.clientX, e.clientY);
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
    }, 0);

    setTimeout(() => {
        trail.remove();
    }, 2000);
}

