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
 * 
*/

const sections = document.querySelectorAll('section');
const menuBar = document.getElementById('navbar__list');
const upBtn = document.getElementById('scrollup');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    //loop over every sections
    sections.forEach(section =>{
        // give every section name
        const sectionName = section.getAttribute('data-nav');
        // give every section id
        const sectionId = section.getAttribute('id');
        //create 'li' element
        const createList = document.createElement('li');
        //get Attribute form sectionName to add it as text for every 'a' link
        const text = document.createTextNode(sectionName);
        //create anchor links
        let createlinks = document.createElement('a');
        //add css style to links
        createlinks.classList.add("menu__link");
        //add id to links
        createlinks.setAttribute('href',sectionId);
        // event scroll smoothly on click
        createlinks.addEventListener('click',function(e){
            e.preventDefault();
            section.scrollIntoView({behavior: "smooth" })
        })
        //add text to every 'a' in the list
        createlinks.appendChild(text);
        //add links to 'li' list
        createList.appendChild(createlinks);
        // add list to navigation bar
        menuBar.appendChild(createList);
    });
    // add/remove active class depends on pageYOffset and its appearance on viewport
    function ToggleActiveClass1(){

        const react =  sections[0].getBoundingClientRect();

        if(react.top >=-50 && react.top<394){
            sections[0].classList.add('your-active-class');
            menuBar.getElementsByTagName('li')[0].style.background = "rgb(71, 149, 250)";
        }else{
            sections[0].classList.remove('your-active-class')
            menuBar.getElementsByTagName('li')[0].style.background = "";
        }
    }
    // add/remove active class depends on pageYOffset and its appearance on viewport
    function ToggleActiveClass2(){

        const react =  sections[1].getBoundingClientRect();

        if(react.top >=-50 && react.top<394){
            sections[1].classList.add('your-active-class');
            menuBar.getElementsByTagName('li')[1].style.background = "rgb(71, 149, 250)";
        }else{
            sections[1].classList.remove('your-active-class')
            menuBar.getElementsByTagName('li')[1].style.background = "";
        }
    }
    // add/remove active class depends on pageYOffset and its appearance on viewport
    function ToggleActiveClass3(){

        const react =  sections[2].getBoundingClientRect();

        if(react.top >=-50 && react.top<394){
            sections[2].classList.add('your-active-class');
            menuBar.getElementsByTagName('li')[2].style.background = "rgb(71, 149, 250)";
        }else{
            sections[2].classList.remove('your-active-class')
            menuBar.getElementsByTagName('li')[2].style.background = "";
        }
    }
    // add/remove active class depends on pageYOffset and its appearance on viewport
    function ToggleActiveClass4(){

        const react =  sections[3].getBoundingClientRect();

        if(react.top >=-50 && react.top<394){
            sections[3].classList.add('your-active-class');
            menuBar.getElementsByTagName('li')[3].style.background = "rgb(71, 149, 250)";
        }else{
            sections[3].classList.remove('your-active-class')
            menuBar.getElementsByTagName('li')[3].style.background = "";
        }
    }

    // hide/display the button at certain pageYOffset
    window.onscroll = function (){

        if (window.pageYOffset>= 1600)
        { 
            upBtn.style.display = 'block';
        } else {
            upBtn.style.display = 'none';
        }
    }
    // scroll to top when the user click the button
    upBtn.onclick = function (){
        window.scrollTo({top:'0', behavior: 'smooth'});
    }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add 'active - class ' to section when near top of viewport
document.addEventListener('scroll', ToggleActiveClass1);
document.addEventListener('scroll', ToggleActiveClass2);
document.addEventListener('scroll', ToggleActiveClass3);
document.addEventListener('scroll', ToggleActiveClass4);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


