/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Get the toggle button and body element
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is already saved in localStorage
if(localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Add event listener to toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the user's preference in localStorage
    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});



// JavaScript to toggle dropdown submenu
document.querySelectorAll('.dropdown-submenu').forEach(function(submenu) {
    submenu.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-menu').classList.add('show');
    });
    submenu.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});