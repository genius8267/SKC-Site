/**
 * SKC Website - Main JavaScript
 * Client-side interactivity and UI enhancements
 */

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Page navigation active state
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.page-nav__link');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('page-nav__link--active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('page-nav__link--active');
        }
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // Mobile navigation toggle (if implemented)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.header__nav');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('header__nav--open');
      mobileMenuBtn.setAttribute(
        'aria-expanded',
        mobileMenu.classList.contains('header__nav--open')
      );
    });
  }

  // Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Form validation enhancement
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('input--error');

          // Show error message
          let errorMsg = input.nextElementSibling;
          if (!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = 'var(--color-error)';
            errorMsg.style.fontSize = 'var(--font-size-sm)';
            errorMsg.style.marginTop = 'var(--space-1)';
            errorMsg.textContent = 'This field is required';
            input.parentNode.insertBefore(errorMsg, input.nextSibling);
          }
        } else {
          input.classList.remove('input--error');
          const errorMsg = input.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });

    // Remove error on input
    form.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('input--error');
        const errorMsg = this.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
          errorMsg.remove();
        }
      });
    });
  });

  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: var(--space-8);
    right: var(--space-8);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-primary);
    color: white;
    border: none;
    font-size: var(--font-size-xl);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-base);
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  `;

  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animation on scroll
  if ('IntersectionObserver' in window) {
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .icon-card, .stat-card, .news-card').forEach(el => {
      animateOnScroll.observe(el);
    });
  }

  console.log('SKC Website initialized');
});

// External link security
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.hostname !== window.location.hostname && link.target === '_blank') {
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// Print optimization
window.addEventListener('beforeprint', function() {
  document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
  document.body.classList.remove('printing');
});
