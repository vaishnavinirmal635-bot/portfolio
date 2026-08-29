document.addEventListener("DOMContentLoaded", function () {
    /* Mobile Menu Toggle */
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('header');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    function updateActiveSection() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navItems.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    }

    function updateNavbarState() {
        if (!header) return;
        if (window.scrollY > 16) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (navLinks) {
            navLinks.classList.add('visible');
        }
    }

    window.addEventListener('scroll', function () {
        updateNavbarState();
        updateActiveSection();
    });

    updateNavbarState();
    updateActiveSection();

    /* Scroll animations using Intersection Observer */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections except home
    document.querySelectorAll('section:not(#home)').forEach(section => {
        observer.observe(section);
    });

    // Animate home section immediately
    document.getElementById('home').classList.add('animate-in');

    /* Contact Form Submission */
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            this.reset();
        });
    }

    /* Back to top button */
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* Project modal */
    const projectModal = document.getElementById('project-modal');
    const projectModalImage = document.getElementById('project-modal-image');
    const projectModalBadge = document.getElementById('project-modal-badge');
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectModalDescription = document.getElementById('project-modal-description');
    const projectModalTech = document.getElementById('project-modal-tech');
    const projectModalBack = document.getElementById('project-modal-back');
    const projectModalClose = document.getElementById('project-modal-close');

    function openProjectModal(card) {
        if (!projectModal || !card) return;

        const title = card.dataset.projectTitle || card.querySelector('h3')?.textContent.trim();
        const badge = card.dataset.projectBadge || card.querySelector('.project-badge')?.textContent.trim();
        const description = card.dataset.projectDescription || card.querySelector('p')?.textContent.trim();
        const image = card.dataset.projectImage || card.querySelector('.project-image')?.src;
        const techItems = Array.from(card.querySelectorAll('.project-tech span'));

        projectModalImage.src = image;
        projectModalImage.alt = title;
        projectModalBadge.textContent = badge;
        projectModalTitle.textContent = title;
        projectModalDescription.textContent = description;
        projectModalTech.innerHTML = techItems.map(item => `<span>${item.textContent}</span>`).join('');

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function (event) {
            if (event.target.closest('.view-project')) {
                event.preventDefault();
            }
            if (!projectModal || projectModal.classList.contains('active')) return;
            openProjectModal(card);
        });
    });

    if (projectModalBack) {
        projectModalBack.addEventListener('click', function (event) {
            event.stopPropagation();
            closeProjectModal();
        });
    }

    if (projectModalClose) {
        projectModalClose.addEventListener('click', function (event) {
            event.stopPropagation();
            closeProjectModal();
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', function (event) {
            const clicked = event.target;
            if (clicked === projectModal || clicked.hasAttribute('data-close-project')) {
                closeProjectModal();
            }
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    /* Custom cursor with improved trailing effect */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    if (cursorDot && cursorOutline) {
        const hoverTargets = document.querySelectorAll('a, button, .btn, input, textarea');

        document.addEventListener('mousemove', function (event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        function animateCursor() {
            // Smooth trailing for dot
            dotX += (mouseX - dotX) * 0.25;
            dotY += (mouseY - dotY) * 0.25;
            cursorDot.style.left = `${dotX}px`;
            cursorDot.style.top = `${dotY}px`;

            // Slower trailing for outline
            outlineX += (mouseX - outlineX) * 0.12;
            outlineY += (mouseY - outlineY) * 0.12;
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        hoverTargets.forEach(element => {
            element.addEventListener('pointerenter', function () {
                document.body.classList.add('cursor-hover');
            });
            element.addEventListener('pointerleave', function () {
                document.body.classList.remove('cursor-hover');
            });
        });
    }
});

function viewCertificate(fileName) {
    window.open(fileName, "_blank");
}

function generateSparkles() {
    const container = document.getElementById('sparkles-container');
    if (!container) return;
    const numSparkles = 50;

    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        const leftPos = Math.random() * 100;
        const topPos = Math.random() * 100;
        const animDelay = Math.random() * 5;
        const animDuration = 2 + Math.random() * 3;
        sparkle.style.left = `${leftPos}vw`;
        sparkle.style.top = `${topPos}vh`;
        sparkle.style.animationDelay = `${animDelay}s`;
        sparkle.style.animationDuration = `${animDuration}s`;
        const colors = ['#ffffff', '#d78cff', '#ff9ce6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.background = randomColor;
        sparkle.style.boxShadow = `0 0 6px 2px ${randomColor}`;
        container.appendChild(sparkle);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    generateSparkles();
});
