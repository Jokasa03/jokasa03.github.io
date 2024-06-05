document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY + window.innerHeight;

    console.log(scrollPosition);

    if (scrollPosition > 720) {
        document.querySelector('header').style.backgroundColor = 'rgb(0, 0, 0, .2)';
        document.querySelector('header').style.backdropFilter = 'blur(2px)';
        document.querySelector('header').style.height = '50px';
        document.querySelector('header').style.fontSize = '2vw';

        document.querySelector('main').style.marginTop = '8vw';
    } else {
        document.querySelector('header').style.backgroundColor = '';
        document.querySelector('header').style.backdropFilter = '';
        document.querySelector('header').style.height = '';
        document.querySelector('header').style.fontSize = '';

        document.querySelector('main').style.marginTop = '';


    }
});