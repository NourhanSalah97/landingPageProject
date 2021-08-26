/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const navItems = Array.from(document.querySelectorAll('section'));
const navBar = document.getElementById('navbar__list');




/**
 * End Global Variables
 * Start Functions
 * 
*/
function createListItem(){
    for (item of navItems) {

        itemLink = item.getAttribute('id');
        itemName = item.getAttribute('data-nav');
    
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class="menu__link" href='#${itemLink}'>${itemName}</a>`;
        navBar.appendChild(listItem);
    }
}
//fuction to determine which item is in viewport
 function isViewd(element){
let itemPosition = element.getBoundingClientRect();
return (itemPosition.top>=0);
 }
 //function to toggle active class
function activeClass(){
    for (item of navItems) {
        if (isViewd(item)){
            if (!item.classList.contains('your-active-class')){
                item.classList.add('your-active-class');
            }
            else{
                item.classList.remove('your-active-class');
            }
        }
    }
}
/* End  Functions*/
 

// build the nav
createListItem();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',activeClass);



