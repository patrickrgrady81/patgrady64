import data from '../data.js';

const createCards = () => {
    let cardFront = document.querySelector('.card-front');

    let frontDiv;
    for (let i = 0; i < data.length; i++){
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
}
export default createCards;