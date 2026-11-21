
/* =========================================
   VARUN BABU B. - PORTFOLIO INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- ELEMENTS ---------- */

  const preloader = document.getElementById("preloader");
  const header = document.getElementById("header");
  const scrollProgress = document.getElementById("scrollProgress");

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  const backToTop = document.getElementById("backToTop");
  const typedRole = document.getElementById("typedRole");

  const cursorDot = document.getElementById("cursorDot");
  const cursorOutline = document.getElementById("cursorOutline");


  /* ---------- PRELOADER ---------- */

  // Prevent the intro from staying forever if page load is slow.
  const hidePreloader = () => {
    if (preloader) {
      preloader.classList.add("hide");
    }

    document.body.classList.add("page-loaded");
  };

  window.addEventListener("load", () => {
    setTimeout(hidePreloader, 1400);
  });

  // Fallback: hide loader even if the load event is delayed.
  setTimeout(hidePreloader, 3500);


  /* ---------- CURRENT YEAR ---------- */

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* ---------- TYPING ANIMATION ---------- */

  if (typedRole) {

    const roles = [
      "HR Professional",
      "Business Analyst",
      "HR Analytics Enthusiast",
      "Computer Science Graduate"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typingSpeed = 85;
    const deletingSpeed = 45;
    const pauseAfterTyping = 1400;
    const pauseAfterDeleting = 350;

    function typeRole() {

      const currentRole = roles[roleIndex];

      if (!deleting) {

        typedRole.textContent =
          currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

          deleting = true;

          setTimeout(typeRole, pauseAfterTyping);
          return;
        }

        setTimeout(typeRole, typingSpeed);

      } else {

        typedRole.textContent =
          currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

          deleting = false;

          roleIndex = (roleIndex + 1) % roles.length;

          setTimeout(typeRole, pauseAfterDeleting);
          return;
        }

        setTimeout(typeRole, deletingSpeed);
      }
    }

    typeRole();
  }


  /* ---------- MOBILE NAVIGATION ---------- */

  function closeMenu() {

    if (!menuToggle || !navMenu) return;

    menuToggle.classList.remove("active");
    navMenu.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    document.body.classList.remove("menu-open");
  }


  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navMenu.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      document.body.classList.toggle("menu-open", isOpen);

    });

  }


  // Close menu after selecting a navigation link.
  navLinks.forEach(link => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });


  // Close menu with Escape.
  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });


  // Close mobile menu if resized to desktop.
  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
      closeMenu();
    }

  });


  /* ---------- HEADER & SCROLL EFFECTS ---------- */

  let scrollTicking = false;

  function updateScrollEffects() {

    const scrollTop =
      window.scrollY || document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;


    // Scroll progress bar.
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }


    // Header background effect.
    if (header) {
      header.classList.toggle("scrolled", scrollTop > 40);
    }


    // Back-to-top visibility.
    if (backToTop) {
      backToTop.classList.toggle("show", scrollTop > 500);
    }


    scrollTicking = false;
  }


  window.addEventListener("scroll", () => {

    if (!scrollTicking) {

      window.requestAnimationFrame(updateScrollEffects);

      scrollTicking = true;
    }

  }, { passive: true });


  updateScrollEffects();


  /* ---------- BACK TO TOP ---------- */

  if (backToTop) {

    backToTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* ---------- SCROLL REVEAL ---------- */

  const revealElements = document.querySelectorAll(".reveal");

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  if (prefersReducedMotion) {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  } else if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


    revealElements.forEach((element, index) => {

      // Slight stagger effect for nearby elements.
      element.style.transitionDelay =
        `${Math.min(index % 4, 3) * 80}ms`;

      revealObserver.observe(element);

    });

  } else {

    // Fallback for older browsers.
    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* ---------- ACTIVE NAV LINK ---------- */

  const sections = document.querySelectorAll(
    "main section[id]"
  );


  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const sectionId = entry.target.id;

            navLinks.forEach(link => {

              const linkTarget =
                link.getAttribute("href");

              link.classList.toggle(
                "active",
                linkTarget === `#${sectionId}`
              );

            });

          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px"
      }
    );


    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }


  /* ---------- PROJECT FILTERS ---------- */

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");


  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.dataset.filter;


      // Update active filter.
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");


      // Filter projects.
      projectCards.forEach(card => {

        const categories =
          (card.dataset.category || "").split(" ");

        const matches =
          filter === "all" ||
          categories.includes(filter);


        if (matches) {

          card.classList.remove("hide");

          // Re-trigger reveal animation.
          card.classList.remove("visible");

          requestAnimationFrame(() => {
            card.classList.add("visible");
          });

        } else {

          card.classList.add("hide");

        }

      });

    });

  });


  /* ---------- CUSTOM CURSOR ---------- */

  const isFinePointer =
    window.matchMedia("(pointer: fine)").matches;

  if (
    isFinePointer &&
    cursorDot &&
    cursorOutline
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;


    document.addEventListener("mousemove", event => {

      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

    });


    function animateCursor() {

      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();


    // Enlarge cursor over interactive elements.
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-card"
    );

    interactiveElements.forEach(element => {

      element.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("hover");
      });

      element.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("hover");
      });

    });

  } else {

    // Hide custom cursor on touch devices.
    if (cursorDot) cursorDot.style.display = "none";
    if (cursorOutline) cursorOutline.style.display = "none";

  }


  /* ---------- HERO PARALLAX ---------- */

  const heroVisual = document.querySelector(".hero-visual");

  if (
    heroVisual &&
    isFinePointer &&
    !prefersReducedMotion
  ) {

    heroVisual.addEventListener("mousemove", event => {

      const rect = heroVisual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;


      const imageFrame =
        heroVisual.querySelector(".hero-image-frame");

      const orbitOne =
        heroVisual.querySelector(".orbit-one");

      const orbitTwo =
        heroVisual.querySelector(".orbit-two");


      if (imageFrame) {

        imageFrame.style.transform =
          `translate(${x * 12}px, ${y * 12}px)`;

      }

      if (orbitOne) {

        orbitOne.style.transform =
          `translate(${x * -15}px, ${y * -15}px)`;

      }

      if (orbitTwo) {

        orbitTwo.style.transform =
          `translate(${x * 20}px, ${y * 20}px)`;

      }

    });


    heroVisual.addEventListener("mouseleave", () => {

      const imageFrame =
        heroVisual.querySelector(".hero-image-frame");

      const orbitOne =
        heroVisual.querySelector(".orbit-one");

      const orbitTwo =
        heroVisual.querySelector(".orbit-two");


      if (imageFrame) {
        imageFrame.style.transform = "";
      }

      if (orbitOne) {
        orbitOne.style.transform = "";
      }

      if (orbitTwo) {
        orbitTwo.style.transform = "";
      }

    });

  }


  /* ---------- MAGNETIC BUTTONS ---------- */

  const magneticButtons =
    document.querySelectorAll(".magnetic");


  if (isFinePointer && !prefersReducedMotion) {

    magneticButtons.forEach(button => {

      button.addEventListener("mousemove", event => {

        const rect = button.getBoundingClientRect();

        const x =
          event.clientX - rect.left - rect.width / 2;

        const y =
          event.clientY - rect.top - rect.height / 2;


        button.style.transform =
          `translate(${x * 0.08}px, ${y * 0.08}px)`;

      });


      button.addEventListener("mouseleave", () => {

        button.style.transform = "";

      });

    });

  }


  /* ---------- IMAGE FALLBACK ---------- */

  const profileImage =
    document.getElementById("profileImage");


  if (profileImage) {

    profileImage.addEventListener("error", () => {

      profileImage.style.display = "none";

      const frame =
        profileImage.closest(".hero-image-frame");

      if (frame) {

        frame.classList.add("image-missing");

        frame.setAttribute(
          "aria-label",
          "Add your profile photo to images/profile.jpg"
        );

      }

    });

  }


  /* ---------- FINISH ---------- */

  console.log("Portfolio interactions initialized.");

});
