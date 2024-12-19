let currentSlide = 0; 

// Initialize the first slide to be visible
document.querySelectorAll(".slide")[currentSlide].style.display = 'block';

function nextSlide() {
  const slides = document.querySelectorAll(".slide");

  // Hide all slides by setting display to 'none'
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Update the slide index, cycle back to 0 if it's the last slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Show the next slide
  slides[currentSlide].style.display = 'block';
}

function previewSlide() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// GAME

var canvas = document.querySelector('canvas');
var drawingSurface = canvas.getContext('2d');

// Base Entity object
var Entity = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    Xspeed: 2,
    Yspeed: 2,
    text: ""
};

// Create an array to hold all entities
var entities = [];

// Create multiple birds
function createBird(x, y, Xspeed, Yspeed) {
    let bird = Object.create(Entity);
    bird.x = x;
    bird.y = y;
    bird.Xspeed = Xspeed;
    bird.Yspeed = Yspeed;
    bird.text = "Hello squeak";
    entities.push(bird);
}

// Add two birds to the array
createBird(100, 100, 2, 2);
createBird(200, 200, -2, 3);
createBird(300, 600, -4, 3);

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "assets/cat.png";

function loadHandler() {
    update();
}

function update() {
    window.requestAnimationFrame(update, canvas);

    // Update each bird
    entities.forEach((bird) => {
        bird.x += bird.Xspeed;
        bird.y += bird.Yspeed;

        // Collision with canvas borders
        if (bird.x + bird.width > canvas.width) {
            bird.Xspeed = -Math.abs(bird.Xspeed); // Move left
            bird.text = "Going Left";
        } else if (bird.x < 0) {
            bird.Xspeed = Math.abs(bird.Xspeed); // Move right
            bird.text = "Going Right";
        } else if (bird.y + bird.height > canvas.height) {
            bird.Yspeed = -Math.abs(bird.Yspeed); // Move up
            bird.text = "Going Up";
        } else if (bird.y < 0) {
            bird.Yspeed = Math.abs(bird.Yspeed); // Move down
            bird.text = "Going Down";
        }
    });

    render();
}

function render() {
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

    // Render each bird
    entities.forEach((bird) => {
        drawingSurface.drawImage(image, Math.floor(bird.x), Math.floor(bird.y), bird.width, bird.height);

        // Optional: Display text near the bird for debugging
        drawingSurface.fillStyle = "black";
        drawingSurface.font = "12px Arial";
        drawingSurface.fillText(bird.text, bird.x, bird.y - 5);
    });
}


// had to code for FOUR DAYS STRAIGHT BRO