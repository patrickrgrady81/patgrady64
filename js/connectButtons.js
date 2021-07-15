const connectButtons = () => {

    let projectsPage = document.querySelector('.projects-page');
    let aboutPage = document.querySelector('.about-page');

    let projectsButton = document.querySelector('.projects');
    projectsButton.addEventListener('click', () => {
        projectsPage.scrollIntoView({behavior: 'smooth'});
    });

    let aboutButton = document.querySelector('.about');
    aboutButton.addEventListener('click', ()=>{
        aboutPage.scrollIntoView({behavior: 'smooth'});
    })
}

export default connectButtons;