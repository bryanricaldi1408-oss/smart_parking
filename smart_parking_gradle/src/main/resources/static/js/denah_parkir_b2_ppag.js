var mapContainer = document.getElementById('mapContainer');
var mapWrapper = document.getElementById('mapWrapper');

var scale = 1;
var posX = 0;
var posY = 0;
var isDragging = false;
var startX = 0;
var startY = 0;

function updateTransform() {
    var transformValue = 'translate(calc(-50% + ' + posX + 'px), calc(-50% + ' + posY + 'px)) scale(' + scale + ')';
    mapWrapper.style.transform = transformValue;
}

function zoomIn() {
    scale = Math.min(scale + 0.2, 3);
    updateTransform();
}

function zoomOut() {
    scale = Math.max(scale - 0.2, 0.5);
    updateTransform();
}

function resetView() {
    scale = 1;
    posX = 0;
    posY = 0;
    updateTransform();
}

mapContainer.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    mapContainer.classList.add('dragging');
});

mapContainer.addEventListener('mousemove', function(e) {
    if (isDragging) {
        posX = e.clientX - startX;
        posY = e.clientY - startY;
        updateTransform();
    }
});

mapContainer.addEventListener('mouseup', function() {
    isDragging = false;
    mapContainer.classList.remove('dragging');
});

mapContainer.addEventListener('mouseleave', function() {
    isDragging = false;
    mapContainer.classList.remove('dragging');
});

mapContainer.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX - posX;
        startY = e.touches[0].clientY - posY;
    }
});

mapContainer.addEventListener('touchmove', function(e) {
    if (isDragging && e.touches.length === 1) {
        e.preventDefault();
        posX = e.touches[0].clientX - startX;
        posY = e.touches[0].clientY - startY;
        updateTransform();
    }
});

mapContainer.addEventListener('touchend', function() {
    isDragging = false;
});

updateTransform();