// Smooth scrolling to anchor links (if any are added in the future)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation for the hero title
  const heroTitle = document.querySelector('.hero-content h1');
  heroTitle.style.opacity = 0;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      heroTitle.style.transition = 'opacity 1s ease-in';
      heroTitle.style.opacity = 1;
    }, 200);
  });
  
  // Change background image dynamically (example)
  const mainElement = document.querySelector('main');
  mainElement.addEventListener('mouseenter', () => {
    mainElement.style.backgroundImage = "url('img/bg-hover.png')";
  });
  
  mainElement.addEventListener('mouseleave', () => {
    mainElement.style.backgroundImage = "url('img/bg.png')";
  });
  