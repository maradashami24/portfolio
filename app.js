let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let currentLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ✅ NEW: Close navbar on link click (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

const skillsBoxes = document.querySelectorAll('.skills-box');

skillsBoxes.forEach(box => {
    const info = box.querySelector('.skills-info');

    box.addEventListener('click', () => {
        const isActive = box.classList.contains('active');

        // Close all first if needed (one open at a time)
        skillsBoxes.forEach(b => {
            b.classList.remove('active');
            const bInfo = b.querySelector('.skills-info');
            bInfo.style.height = '0px';
        });

        if (!isActive) {
            box.classList.add('active');
            // Set to actual height for transition
            info.style.height = info.scrollHeight + 'px';

            // Reset to auto after transition for dynamic content
            info.addEventListener('transitionend', function handler() {
                info.style.height = 'auto';
                info.removeEventListener('transitionend', handler);
            });
        }
    });
});

