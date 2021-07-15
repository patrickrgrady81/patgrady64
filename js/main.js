import data from '../data.js';

window.onload = (e)=>{
    main();
}

const main = (e) => {
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

    let cardFront = document.querySelector('.card-front');
    let frontDiv;
    for (let i = 0; i < data.length; i++){
        // Create Front of the Card
        frontDiv = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const desc = document.createElement('p');
        const wrapper = document.createElement('div');
        const languages = document.createElement('div');
        const languageList = document.createElement('ul');
        const demos = document.createElement('div');
        const demoList = document.createElement('div');

        frontDiv.classList.add('front-parent');

        img.src  = `../assets/${data[i].image}`;
        img.classList.add('front-image');

        title.innerHTML = data[i].name;
        title.classList.add('front-title');

        desc.innerHTML = data[i].fullDescription;
        desc.classList.add('description');

        //languages / demos

        data[i].languages.forEach(lang => {
            let newLi = document.createElement('li');
            newLi.innerText = lang;
            languageList.appendChild(newLi);
        });
        languages.appendChild(languageList);
        languageList.classList.add('lang-list');

        languages.innerHTML = 'javascript';
        languages.classList.add('language');

        
        
        let frontLink = document.createElement('div');

        if (data[i].front) {
            frontLink = document.createElement('a');
            frontLink.href = data[i].front;
            frontLink.innerHTML = 'frontend code'
        } else {
            frontLink.innerText = 'no frontend';
        }
        frontLink.classList.add('links');
        demoList.appendChild(frontLink);

        let backLink = document.createElement('div');

        if (data[i].back) {
            backLink = document.createElement('a');
            backLink.href = data[i].back;
            backLink.innerHTML = 'backend code'
        } else {
            backLink.innerText = 'no backend';
        }
        backLink.classList.add('links');
        demoList.appendChild(backLink);

        let frontDemo = document.createElement('div');
        if (data[i].demoFront) {
            frontDemo = document.createElement('a');
            frontDemo.href = data[i].demoFront;
            frontDemo.innerHTML = 'frontend demo'
        } else {
            frontDemo.innerText = 'no frontend demo';
        }
        frontDemo.classList.add('links');
        demoList.appendChild(frontDemo);

        let backDemo = document.createElement('div');
        if (data[i].demoBack) {
            backDemo = document.createElement('a');
            backDemo.href = data[i].demoBack;
            backDemo.innerHTML = 'start backend'
        } else {
            backDemo.innerText = 'no backend';
        }
        backDemo.classList.add('links');
        demoList.appendChild(backDemo);

        demoList.classList.add('demo-list');

        demos.appendChild(demoList)
        demos.classList.add('demos');

        wrapper.classList.add('wrapper');

        wrapper.appendChild(languageList);
        wrapper.appendChild(demos);

        frontDiv.appendChild(title);
        frontDiv.appendChild(desc);
        frontDiv.appendChild(img);
        frontDiv.appendChild(wrapper);
        cardFront.appendChild(frontDiv)}

    //   // Create Back of the Card
    // let backDiv;
    // const cardBack = document.querySelector('.card-back');
    // for (let i = 0; i < data.length; i++){
    //   backDiv = document.createElement('div');
    //   const backTitle = document.createElement('h2');
    //   const backDescription = document.createElement('p');
    //   const newDiv = document.createElement('div');
    //   const languages = document.createElement('div');
    //   const demos = document.createElement('div');

    //   backDiv.classList.add('back-parent');
    //   backDiv.classList.add('hidden');

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

    //   backDiv.appendChild(languages);
    //   backDiv.appendChild(demos);
      

    //   cardBack.appendChild(backDiv);
    // //   cardBack.appendChild(newDiv);

    // }
}