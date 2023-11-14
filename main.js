let currentIndex = 0;
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      const translateValue = -index * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }

    // Example: Automatically slide every 3 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 3000);

