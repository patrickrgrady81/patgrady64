import data from '../data.js';

// import Clock from '../assets/Clock.png';
// import Fresco from '../assets/Fresco.png'
// import NovelIdeas from '../assets/NovelIdeas.png';
// import Breakout from '../assets/Breakout.png';
// import PaddySnake from '../assets/PaddySnake.png';
// import CityInfo from '../assets/CityInfo.png';

window.onload = (e)=>{
    main();
}

const main = (e) => {

      // let image;
      // switch (data[0].id) {
      //   case 0:
      //     image = Clock;
      //     break;
      //   case 1:
      //     image = Fresco;
      //     break;
      //   case 2:
      //     image = Breakout;
      //     break; 
      //   case 3:
      //     image = NovelIdeas;
      //     break; 
      //   case 4:
      //     image = PaddySnake;
      //     break; 
      //   case 5:
      //     image = CityInfo;
      //     break; 
      //   default:
      //     throw new Error("No such image");
      // }

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

    // let cardFront = document.querySelector('.card-front');
    // for (let i = 0; i < data.length; i++){

    //   // Create Front of the Card
    //   const frontDiv = document.createElement('div');
    //   const img = document.createElement('img');
    //   const title = document.createElement('h1');

    //   frontDiv.classList.add('front-parent');
      
    //   img.src  = `../assets/${data[i].image}`;
    //   img.classList.add('front-image');

    //   title.innerHTML = data[i].name;
    //   title.classList.add('front-title');

    //   frontDiv.appendChild(title);
    //   frontDiv.appendChild(img);
    //   cardFront.appendChild(frontDiv)
    // }

    //   // Create Back of the Card
    // const cardBack = document.querySelector('.card-back');
    // for (let i = 0; i < data.length; i++){
    //   const backDiv = document.createElement('div');
    //   const backTitle = document.createElement('h2');
    //   const backDescription = document.createElement('p');
    //   const newDiv = document.createElement('div');
    //   const languages = document.createElement('div');
    //   const demos = document.createElement('div');

    //   backDiv.classList.add('back-parent');

    //   backTitle.innerText = data[i].name;
    //   backTitle.classList.add('back-title');

    //   backDescription.innerText = data[i].fullDescription;
    //   backDescription.classList.add('back-description');

    //   newDiv.classList.add('back-newDiv');

    //   languages.innerHTML = 'javascript';
    //   languages.classList.add('back-languages');

    //   demos.innerHTML = 'demo';
    //   demos.classList.add('back-demos');

    //   backDiv.appendChild(backTitle);
    //   backDiv.appendChild(backDescription);

    //   newDiv.appendChild(languages);
    //   newDiv.appendChild(demos);
      

    //   cardBack.appendChild(backDiv);
    //   cardBack.appendChild(newDiv);

    // }
}