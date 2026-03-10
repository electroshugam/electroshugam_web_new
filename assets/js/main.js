// Header scroll effect
document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Scroll effect
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-gray-100');
      header.classList.remove('bg-transparent');
      header.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.remove('text-white/90', 'hover:text-white');
        link.classList.add('text-gray-700', 'hover:text-blue-600');
      });
      header.querySelectorAll('.nav-icon').forEach(function (icon) {
        icon.classList.remove('text-white');
        icon.classList.add('text-gray-900');
      });
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-gray-100');
      header.classList.add('bg-transparent');
      // Only add dark styles on homepage with dark hero
      if (document.body.classList.contains('hero-dark')) {
        header.querySelectorAll('.nav-link').forEach(function (link) {
          link.classList.add('text-white/90', 'hover:text-white');
          link.classList.remove('text-gray-700', 'hover:text-blue-600');
        });
        header.querySelectorAll('.nav-icon').forEach(function (icon) {
          icon.classList.add('text-white');
          icon.classList.remove('text-gray-900');
        });
      }
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  // Tabs functionality
  document.querySelectorAll('[data-tabs]').forEach(function (tabContainer) {
    var buttons = tabContainer.querySelectorAll('.tab-btn');
    var contents = tabContainer.querySelectorAll('.tab-content');

    buttons.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        contents.forEach(function (c) { c.classList.remove('active'); });
        btn.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  });

  // Animate progress bars on scroll
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        var width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress-fill').forEach(function (bar) {
    observer.observe(bar);
  });

  // Animate circular stats on scroll
  var circleObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var circle = entry.target;
        var offset = circle.getAttribute('data-offset');
        circle.style.strokeDashoffset = offset;
        circleObserver.unobserve(circle);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.circular-progress-circle').forEach(function (circle) {
    circleObserver.observe(circle);
  });

  // Trigger scroll handler on load
  window.dispatchEvent(new Event('scroll'));
});
