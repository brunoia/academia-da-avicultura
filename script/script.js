/* INDEX */

function hide() {
    let element = document.getElementById('banner1');
    element.classList.remove('show');
    element.classList.add('hide');
    
    let element2 = document.getElementById('banner2');
    element2.classList.remove('hide');
    element2.classList.add('show');
}

function show() {
    let element = document.getElementById('banner1');
    element.classList.remove('hide');
    element.classList.add('show');
    
    let element2 = document.getElementById('banner2');
    element2.classList.remove('show');
    element2.classList.add('hide');    
}


onload = setInterval(function() {
    let slide1 = document.getElementById('banner1');
    
    if (slide1.classList == 'show') {
        hide();
    } else {
        show();
    }
}, 15000);


function showIcon() {
    let element = document.getElementById('burgerIcon');
    element.classList.remove('showIcon');
    element.classList.add('hideIcon');
    
    let element2 = document.getElementById('closeIcon');
    element2.classList.remove('hideIcon');
    element2.classList.add('showIcon');
}

function hideIcon() {
    let element = document.getElementById('closeIcon');
    element.classList.remove('showIcon');
    element.classList.add('hideIcon');
    
    let element2 = document.getElementById('burgerIcon');
    element2.classList.remove('hideIcon');
    element2.classList.add('showIcon'); 
}

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})



/* FAQ */

let acc = document.getElementsByClassName('accordion');
let i;
let len = acc.length;

for(i = 0; i < len; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}