window.addEventListener("load", (e) => {
    var ham = document.querySelector('header div.responsive i');
    var nav = document.querySelector('header nav');
    var close = document.querySelector('header nav ul li a.close');
    ham.addEventListener('click', (e) => {
        nav.style.display = 'block';
        ham.style.display = 'none';
    });
    close.addEventListener('click', (e) => {
        nav.style.display = 'none';
        ham.style.display = 'block';
    });
});