const hamburger = () => {
    const ham = document.querySelector('.hamburger');
    ham.addEventListener('click', () => {
        ham.classList.toggle('switch');
        nav.classList.toggle('show');
    });

    const nav = document.querySelector('#appear');
    nav.addEventListener('click', () => {
        console.log('hamburger clicked');
    });

    const links = document.querySelectorAll('.link');
    document.querySelectorAll('.link').forEach((l) => {
        l.addEventListener('click', () => {
            ham.classList.toggle('switch');
            nav.classList.toggle('show');
        });
    });
}

export default hamburger;