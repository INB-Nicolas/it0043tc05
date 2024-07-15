document.addEventListener('DOMContentLoaded', function() {
    // Fade in the header on page load
    const header = document.querySelector('.header');
    header.classList.add('visible');

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a'); // Assuming your nav links are inside a <nav> element

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Trigger the onScroll function after a slight delay
                setTimeout(onScroll, 500); // Adjust the delay as needed
            }
        });
    });

    // Elements to animate
    const aboutHeading = document.querySelector('.about-heading');
    const boxes = document.querySelectorAll('.box');
    const faqHeading = document.querySelector('.faq-heading'); // Select the FAQ heading
    const faqBoxes = document.querySelectorAll('.faq-box'); // Select all FAQ boxes
    const workExperienceHeading = document.querySelector('.work-experience-heading');
    const workExperienceBoxes = document.querySelectorAll('.work-experience-box');
    const contactHeading = document.querySelector('.contact-heading');
    const contactSubheading = document.querySelector('.contact-subheading');
    const contactBoxes = document.querySelectorAll('.contact-box');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        const homeSection = document.querySelector('#home'); // Assuming the home section has an ID of 'home'
        const homeSectionTop = homeSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (homeSectionTop < windowHeight) {
            header.classList.add('visible');
        }

        if (isInViewport(aboutHeading)) {
            aboutHeading.classList.add('fade-in');
        }

        boxes.forEach((box, index) => {
            if (isInViewport(box)) {
                setTimeout(() => {
                    box.classList.add('pop-up');
                }, index * 200); // Delay each box animation
            }
        });

        // Animate FAQ heading if in viewport
        if (faqHeading && isInViewport(faqHeading)) {
            faqHeading.style.opacity = '1';
            faqHeading.style.transform = 'translateY(0)';
        }

        // Animate FAQ boxes if in viewport
        faqBoxes.forEach((faqBox, index) => {
            if (isInViewport(faqBox)) {
                setTimeout(() => {
                    faqBox.style.opacity = '1';
                    faqBox.style.transform = 'scale(1)';
                }, index * 200); // Delay each FAQ box animation
            }
        });

        // Animate Work Experience heading if in viewport
        if (workExperienceHeading && isInViewport(workExperienceHeading)) {
            workExperienceHeading.classList.add('fade-in');
        }

        // Animate Work Experience boxes if in viewport
        workExperienceBoxes.forEach((workBox, index) => {
            if (isInViewport(workBox)) {
                setTimeout(() => {
                    workBox.classList.add('fade-in');
                }, index * 200); // Delay each Work Experience box animation
            }
        });

        // Animate Contact boxes if in viewport
        contactBoxes.forEach((contactBox, index) => {
            if (isInViewport(contactBox)) {
                setTimeout(() => {
                    contactBox.classList.add('fade-in');
                }, index * 200); // Delay each Contact box animation
            }
        });

        // Animate Contact heading if in viewport
        if (contactHeading && isInViewport(contactHeading)) {
            contactHeading.classList.add('fade-in');
        }

        // Animate Contact subheading if in viewport
        if (contactSubheading && isInViewport(contactSubheading)) {
            contactSubheading.classList.add('fade-in');
        }
    }

        

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the scroll event on page load

    // Initial animation for FAQ heading
    if (faqHeading) {
        faqHeading.style.opacity = '1';
        faqHeading.style.transform = 'translateY(0)';
    }
});