/*jshint esversion: 6 */
/*jshint esversion: 8 */
import checkNumInputs from './checkNumInputs';

const forms = (state) => {

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: "<img src='assets/img/gif/2.gif'></img>",
        success: "Спасибо! Мы с вами свяжемся!",
        failure: "Ошибка! Что-то не так"
    };
    // отправка
    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let response = await fetch(url, {
            method: "POST",
            body: data
        });
        return await response.text();
    };

    // очистка input
    const delInputs = () => {
        inputs.forEach(item => item.value = "");
    };

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(response => {
                    console.log(response);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => { // удаляем значения и очищаем сообщения статуса
                    delInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
        });
    });
};

export default forms;