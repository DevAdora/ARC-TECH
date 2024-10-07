const slider = document.getElementById('slider');
const nextButton = document.getElementById('next');
let currentIndex = 0;
const imagesPerSlide = 3; // Show 3 images at a time
const totalSlides = Math.ceil(document.querySelectorAll('.option').length / imagesPerSlide);

nextButton.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex === totalSlides) {
    currentIndex = 0; // Loop back to the start
  }

  // Calculate the distance to slide (currentIndex * 100% for each set of 3 images)
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
