window.addEventListener('scroll', function() {
    const header = document.querySelector('.topnav');
    if (window.scrollY > 50) {
        header.style.top = '0';
    } else {
        header.style.top = '-50px';
    }
});

// Add scroll event listener to show/hide content with animation
const content = document.querySelector('.container-1');
window.addEventListener('scroll', function() {
    if (isInViewport(content)) {
        content.classList.add('show');
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}