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
