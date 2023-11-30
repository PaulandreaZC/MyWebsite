let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let intervalId;

function showSlide(index) {
  const translateValue = -index * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

function startInterval() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
}

function nextPicture() {
  clearInterval(intervalId);
  currentIndex = (currentIndex + 1) % slides.length;
  updatePictures();
  startInterval();
}

function prevPicture() {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updatePictures();
  startInterval();
}

function updatePictures() {
  const translateValue = -currentIndex * 100;
  slider.style.transform = `translateX(${translateValue}%)`;
}

startInterval();

function openWhatsApp() {
  var phoneNumber = '+31682232381';
  var message = 'Hello, I want to get in contact.';
  var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  window.open(whatsappURL, '_blank');
}