// Intersection Observer for scroll reveals
export function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });
}

// Header scroll behavior
export function initHeaderScroll(): void {
  const header = document.querySelector('[data-header]') as HTMLElement | null;
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    lastScrollY = currentScrollY;
  });
}

// Mobile menu toggle
export function initMobileMenu(): void {
  const menuButtons = document.querySelectorAll('[data-menu-toggle]');
  const menuLinks = document.querySelectorAll('[data-menu-link]');
  const body = document.body;

  if (!menuButtons.length) return;

  const toggleMenu = () => {
    const isOpen = body.classList.contains('menu-open');

    if (isOpen) {
      body.classList.remove('menu-open');
      body.style.overflow = '';
    } else {
      body.classList.add('menu-open');
      body.style.overflow = 'hidden';
    }
  };

  menuButtons.forEach(button => {
    button.addEventListener('click', toggleMenu);
  });

  // Close menu when clicking a link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
      body.style.overflow = '';
    });
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      toggleMenu();
    }
  });
}
