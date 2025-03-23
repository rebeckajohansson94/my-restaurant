// Lunch Menu 

const lunchMenu = document.querySelector('.lunch-info');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');

function lunchMenuDisplay() {
    lunchMenu.style.display = 'flex';
    btnClose.style.display = 'flex';
    btnOpen.style.display = 'none';
}

function lunchMenuHide() {
    lunchMenu.style.display = 'none';
    btnClose.style.display = 'none';
    btnOpen.style.display = 'flex';
}

// Toggle Menu 

const menu = document.querySelector('.nav');
const btn = document.querySelector('.menu-toggle-btn i');

function toggleMenu() {
    menu.classList.toggle('navigation-open');

    if (menu.classList.contains('navigation-open')) {
        // Om menyn är öppen, visa fa-times
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-times');
    } else {
        // Om menyn är stängd, visa fa-bars
        btn.classList.remove('fa-times');
        btn.classList.add('fa-bars');
    }
}




// Filter Menu

const headingStarters = document.getElementById('starters');
const headingMaincourse = document.getElementById('maincourse');
const headingDesserts = document.getElementById('desserts');

const starterMenu = document.querySelector('.starters');
const maincourseMenu = document.querySelector('.maincourse');
const dessertsMenu = document.querySelector('.desserts');

function startersDisplay(){
    starterMenu.style.display = 'block';
    maincourseMenu.style.display = 'none';
    dessertsMenu.style.display = 'none';
}

function maincourseDisplay(){
    starterMenu.style.display = 'none';
    maincourseMenu.style.display = 'block';
    dessertsMenu.style.display = 'none';
}

function dessertsDisplay(){
    starterMenu.style.display = 'none';
    maincourseMenu.style.display = 'none';
    dessertsMenu.style.display = 'block';
}