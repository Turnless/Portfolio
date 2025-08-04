const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".menu");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
      });
            const navLinks = document.querySelectorAll(".menu a");

      function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }

      navLinks.forEach(n => n.addEventListener("click", closeMenu))

        const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const circle = entry.target.querySelector('.circle-progress');
          const percent = entry.target.getAttribute('data-percent');
          const radius = circle.getAttribute('r');
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (percent / 100 * circumference);
          circle.style.strokeDashoffset = offset;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-circle').forEach(circle => {
      observer.observe(circle);
    });


        const observer_mobile = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percent = bar.getAttribute('data-percent');
          bar.style.setProperty('--target-width', percent);
          bar.classList.add('animated');
          observer_mobile.unobserve(bar); // animate only once
        }
      });
    }, {
      threshold: 0.6
    });
        
          document.querySelectorAll('.progress').forEach(bar => {
      observer_mobile.observe(bar);
    });

    const observer_animate = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer_animate.unobserve(entry.target); // only animate once
      }
      // else{
      //   entry.target.classList.remove('visible');
      // }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer_animate.observe(el);
  });


  