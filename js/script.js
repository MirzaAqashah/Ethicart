//to reload nav bar to all pages
fetch('navback.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navBar').innerHTML = data;
        const menuIcon = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.navbar-links');

        menuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    });

    