document.addEventListener('DOMContentLoaded', function() {

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('article, figure, h1, h2');
        elements.forEach(element => {
            const elementPosition= element.getBoundingClientRect().top;
            const screenPosition= window.innerHeight / 1.2;
            
            if (elementPosition< screenPosition) {
                element.classList.add('visible');
            }
        });
    };

    const menuItems = document.querySelectorAll('table tbody tr');
    menuItems.forEach(item =>{
        item.addEventListener('mouseenter', function() {
            this.classList.add('highlight');
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('highlight');
        });
    });

    const tacoImage = document.querySelector('figure img');
    if (tacoImage) {
        tacoImage.addEventListener('click', function() {
            this.classList.toggle('rotate');
        });
    }

    const buttons= document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('vibrate');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('vibrate');
        });
    });

    if (document.getElementById('about-lts')) {
        createFloatingTaco();
    }

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
function createFloatingTaco() {
    const floatingTaco = document.createElement('div');
    floatingTaco.className = 'floating-taco';
    floatingTaco.innerHTML = '🌮';
    document.body.appendChild(floatingTaco);
    floatingTaco.style.left = Math.random() * 90 + 'vw';
    floatingTaco.style.animationDuration = (Math.random() * 10 + 20) + 's';
    floatingTaco.style.animationDelay = (Math.random() * 5) + 's';
    floatingTaco.addEventListener('animationend', function() {
        this.remove();
        setTimeout(createFloatingTaco, Math.random() * 5000);
    });
}
function createfloating1() {
    const newtaco = document.createElement('div');
    newtaco.className = 'floating-taco';
    newtaco.innerHTML = '😍';
    document.body.appendChild(newtaco);
    newtaco.style.left = Math.random() * 90 + 'vw';
    newtaco.style.animationDuration = (Math.random() * 10 + 20) + 's';
    newtaco.style.animationDelay = (Math.random() * 5) + 's';
    newtaco.addEventListener('animationend', function() {
        this.remove();
        setTimeout(createfloating1, Math.random() * 5000);
    });
}
