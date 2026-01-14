 // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const navLinks = document.getElementById('nav-links');
        const mobileBtn = document.querySelector('.mobile-toggle');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                navLinks.classList.add('active');
                mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navLinks.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });

        // Smooth Scroll for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });