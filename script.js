// JavaScript for Ana Selviani Portfolio - Updated for Responsive Navbar
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element for mobile menu
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Toggle Menu
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    
    function toggleMenu() {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle icon between bars and times (X)
        const icon = menuBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        // Prevent body scrolling when menu is open
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking on menu items
    document.querySelectorAll('.menu a').forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

 // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

// Active Menu Item on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Handle window resize - reset menu if window is resized while menu is open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991 && menu.classList.contains('active')) {
            toggleMenu();
            }
});

// Form Submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Pesan Anda telah berhasil dikirim! Terima kasih telah menghubungi saya.');
            
            // Reset form
            contactForm.reset();
        });
    }

// Add subtle animations when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .blog-card, .info-item, .skill-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

// Set initial state for animated elements
    const elements = document.querySelectorAll('.project-card, .blog-card, .info-item, .skill-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Trigger first animation
    animateOnScroll();

 // Listen for scroll to trigger animations
    window.addEventListener('scroll', animateOnScroll);
});