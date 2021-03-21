/*jshint esversion: 6 */
/*jshint esversion: 8 */

const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    // создаем и добавляем окно
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    //настройки окна
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    // img в окно
    imgPopup.appendChild(bigImage);

    //слушаем works
    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        //запускаем окно
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            console.log('нажал');
            //забираем big img из родителя
            const path = target.parentNode.getAttribute('href');
            //устанавливаем big img в окно
            bigImage.setAttribute('src', path);
        }
        // закрываем окно
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;
