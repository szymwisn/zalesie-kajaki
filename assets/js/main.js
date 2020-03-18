// ===============================
// MAP
const map = L.map('map').setView([53.8240817, 20.7326305], 14);
            
L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=I7qY8rAcknYMe6Q4PvcQ', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
}).addTo(map);

let marker = L.marker([53.8240817, 20.7326305]).addTo(map);

marker.bindTooltip("Zalesie 8, 11-010").openTooltip();



// ===============================
// HAMBURGER MENU
const hamburgerIcon = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const hamburgerEntries = document.querySelectorAll('.hamburger__entry');

for(let i = 0; i < hamburgerEntries.length; i++) {
    let item = hamburgerEntries[i];
    item.addEventListener('click', toggleHamburger);
}

hamburgerIcon.addEventListener('click', toggleHamburger);

function toggleHamburger() {
    hamburgerIcon.classList.toggle("clicked");
    hamburgerMenu.classList.toggle("show");
}
