// Select the navigation menu and menu items
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('nav ul li a');

// Function to change the style of the navigation menu on scroll
function handleScroll() {
    if (window.scrollY > 50) {
        navMenu.style.backgroundColor = '#c22b2b'; // Change background color on scroll
    } else {
        navMenu.style.backgroundColor = 'green'; // Restore original background color
    }

    // Check which section is in the viewport and apply active class accordingly
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - navMenu.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all menu items
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the corresponding menu item based on the active section
    navItems.forEach(item => {
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

// Function to change the style of menu items on hover
function handleHover() {
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#e91e63'; // Change font color on hover
        });
        item.addEventListener('mouseout', function() {
            this.style.color = 'white'; // Restore original font color after hover
        });
    });
}

// Add event listeners for scroll and hover events
window.addEventListener('scroll', handleScroll);
handleHover();
