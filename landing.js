const nav = document.querySelector('#nav__bar');


nav.addEventListener('click', function (e) {
    e.preventDefault();

    if(e.target.classList.contains('nav__bar-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
})
