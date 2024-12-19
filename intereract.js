let currentSlide = 0; // To track the current slide

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

  // Add an alert to indicate the current slide
  alert(`Now showing slide ${currentSlide + 1} of ${slides.length}`);
}

function previewSlide() {
  const slides = document.querySelectorAll(".slide");

  // Hide all slides by setting display to 'none'
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Update the slide index, cycle back to last slide if it's the first one
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  // Show the previous slide
  slides[currentSlide].style.display = 'block';

  // Add an alert to indicate the current slide
  alert(`Now showing slide ${currentSlide + 1} of ${slides.length}`);
}
