/*jshint esversion: 6 */
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    const active = document.querySelector(activeClass);

    // скрываем контент табов и их класс активности
    function hideTabContent() {
        content.forEach(item => item.style.display = "none");
        tab.forEach(item => item.classList.remove(activeClass));
    }
    // показываем нужный контент и ставим класс активности табу
    function showTabContent(i = 1) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();
    // вешаем обработчик событий на таб и его детей
    header.addEventListener('click', (event) => {
        const target = event.target;
        // убираем "." так как classList а в tabSelector c "."
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            // определяем индекс элемента на который нажали
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};
export default tabs;