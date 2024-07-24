// FLOATING ICONS
// --------------------------------------------------------------------
// show hidden icons + change icon animations
var waveIcon = document.getElementById("wave-icon")
var hiddenIcons = document.getElementsByClassName("hidden-floating")

document.addEventListener('DOMContentLoaded', function() {
    waveIcon.addEventListener('click', function() {
        if (waveIcon.classList.contains('animate__pulse')) {
            waveIcon.classList.remove('animate__pulse')
        } else {
            waveIcon.classList.add('animate__pulse')
        }

        for (let icon of hiddenIcons) {
            if (icon.classList.contains('animate__slideInRight')) {
                icon.classList.remove('animate__slideInRight');
                icon.classList.add('animate__slideOutRight');
            } else {
                icon.style.display = "flex";
                icon.classList.remove('animate__slideOutRight');
                icon.classList.add('animate__slideInRight');
            }
        }
    });
});


// NAVBAR DROPDOWN
// --------------------------------------------------------------------
// show dropdown when home is hovered
var homeText = document.getElementById('home-a');
var dropDown = document.getElementById('tech-dropdown');

homeText.addEventListener('mouseover', function() {
    dropDown.style.display = "flex";
});

// hide dropdown when leaving home text or tech dropdown area
document.addEventListener('mouseover', function(event) {
    if (!homeText.contains(event.target) && !dropDown.contains(event.target)) {
        dropDown.style.display = "none";
    }
});