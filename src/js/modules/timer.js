/*jshint esversion: 6 */
/*jshint esversion: 8 */

// id - область для рендинга

const timer = (id, deadLine) => {

    function addZero(number) {
        if (number <= 9) {
            return `0${number}`;
        } else { 
            return number;
        }
    }
    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()); // разница
        const seconds = Math.floor((t/1000) % 60);
        const minutes = Math.floor((t/1000/60) % 60);
        const hours = Math.floor((t/(1000 * 60 * 60)) % 60);
        const days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector);
        const seconds = timer.querySelector('#seconds');
        const minutes = timer.querySelector('#minutes');
        const hours = timer.querySelector('#hours');
        const days = timer.querySelector('#days');
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);


            if (t.total <= 0) {
                days.textConent = '00';
                hours.textConent = '00';
                minutes.textConent = '00';
                seconds.textConent = '00';
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadLine);
};


export default timer;

