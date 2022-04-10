
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.special').addEventListener('click', (e) => {
    e.preventDefault;
    document.querySelector('.other-links').classList.toggle('active')
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let countDownDate = new Date('Dec 31, 2022 23:59:59').getTime()

let counter = setInterval(() => {
    //
    let dateNow = new Date().getTime();
    //
    let difftime = countDownDate - dateNow;
    //
    let day = Math.floor(difftime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difftime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(difftime % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difftime % (1000 * 60) / (1000));
    //
    document.querySelector('.latest-event .DD').textContent = day < 10 ? `0${day}` : day;
    document.querySelector('.latest-event .HH').textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.latest-event .MM').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.latest-event .SS').textContent = seconds < 10 ? `0${seconds}` : seconds;
    //
    if (difftime < 0) {
        clearInterval(counter);
    }
}, 1000)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let awesomeStats = document.querySelector('.awesome-stats');
let items = document.querySelectorAll('.count');
let start = false;
let skillsSections = document.querySelectorAll('.info div span');
let sections = document.querySelector('.our-skills');

window.onscroll = () => {
    if (window.scrollY >= awesomeStats.offsetTop) {
        //
        if (!start) {
            items.forEach((nums) => startCount(nums))
        }
        //
        start = true
    }
    //
    if (window.scrollY >= sections.offsetTop) {
        //
        skillsSections.forEach((el) => {
            //
            el.style.width = el.dataset.width
            //
        });
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    //
    let count = setInterval(() => {
        //
        el.textContent++
        //
        if (el.textContent == goal) {
            //
            clearInterval(count);
            //
        }
    }, 2000 / goal);
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

