// Your code goes here
const img = document.getElementById("boat");

img.addEventListener("mouseenter", () =>{
    if(img.src != "img/fun-bus.jpg"){
    img.src = "img/fun-bus.jpg";
    } else {
    img.src = "img/destination.jpg";
    }

    img.addEventListener("mouseleave", () => {
        if(img.src != "img/destination.jpg"){
            img.src = "img/destination.jpg";
            } else {
            img.src = "img/fun-bus.jpg";
            }  
    })
});

const mainImage = document.querySelector('img');

 mainImage.addEventListener('mouseenter', (event) => {
    event.target.style.filter = 'grayscale(100%)'

    mainImage.addEventListener('mouseleave', (event) => 
    event.target.style.filter = ''
        )
});

const backgroundColorChange = document.querySelector('html')

 backgroundColorChange.addEventListener('keydown', (event) =>{
    event.target.style.backgroundImage = 'linear-gradient(#FF5F6D, #FFC371)';

    setTimeout(() => {
        event.target.style.backgroundImage = '';
    }, 500);
});

const mainNavigation = document.querySelector('.main-navigation');
const mainNavLogo = document.querySelector('.logo-heading');
const mainNavText = document.querySelectorAll('.nav-link');

 window.addEventListener('scroll', (event) => {
    mainNavigation.style.backgroundColor = 'black';
    mainNavText.forEach(item => item.style.color = '#ccff00');
    mainNavLogo.style.color = '#ccff00';

    setTimeout(() => {
        mainNavigation.style.backgroundColor = '';
        mainNavText.forEach(item => item.style.color = '');
        mainNavLogo.style.color = ''; 
    }, 500);
});

const intro = document.querySelector('.intro')

intro.addEventListener('mouseover', (event) => {
    intro.style.color = '#ccff00';
    intro.style.backgroundColor = 'gray';

    setTimeout(() => {
        intro.style.color = '';
        intro.style.backgroundColor = '';
    }, 500);
});

const letsGo = document.getElementById('letsgo');

letsGo.addEventListener('mouseover', (event) => {
    letsGo.style.color = '#ccff00';
    letsGo.style.backgroundColor = 'purple';

    setTimeout(() => {
        letsGo.style.color = '';
        letsGo.style.backgroundColor = '';
    }, 500);
});

const adventureawaits = document.getElementById('adventureawaits');

adventureawaits.addEventListener('mouseover', (event) => {
    adventureawaits.style.color = 'black';
    adventureawaits.style.backgroundColor = 'green';

    setTimeout(() => {
        adventureawaits.style.color = '';
        adventureawaits.style.backgroundColor = '';
    }, 500);
});

const destination = document.querySelector('.content-destination');
destination.addEventListener('mouseover', (event) => {
    destination.style.color = 'purple';
    destination.style.backgroundColor = 'skyblue';

    setTimeout(() => {
        destination.style.color = '';
        destination.style.backgroundColor = '';
    }, 500);
});

const btn = document.querySelectorAll('.content-pick .btn');

btn.forEach(item => item.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = '#BA5370';

    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 500);
}));

const destiny = document.querySelectorAll('.content-pick .destination');

destiny.forEach(item => item.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'yellow';

    setTimeout(() => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    }, 500);
}));

