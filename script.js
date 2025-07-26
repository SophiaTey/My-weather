const api = { //создали константу в которой два ключа
    end: 'https://api.openweathermap.org/data/2.5/',//в ней ссылка.мы хотим получить доступ к базе данных
    key: 'e0cd30510ffca5faad38d4f22ec71bba' //этот ключ нам позволяет получить доступ к базе данных
}

const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

function enter(e){
if (e.keyCode === 13){
     getInfo(input.value); //если нажата клавиша пробела то мы вызыввем функ getInfo----input.value для того чтобы получить доступ к тому что вводит пользователь
}
}

async function getInfo (data) {
const res = await fetch(`${api.end}weather?q=${data}&units=metric&appid=${api.key}`); //это не надо учить.это всегда копируют.где async там и await
const result = await res.json();//отображаем в json
displayResult(result);
}

function displayResult(result) {
let city =document.querySelector('#city');//выделяем наш параграф с городом
city.textContent = `${result.name}, ${result.sys.country}`;//ставим на него textcontent и в консоли смотрим какой стобец связан со старной и пишем name(чтобы это узнать пишем console.log(result)),это урок 37


getOurDate();

let temperature = document.querySelector('#temperature');
temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`; //тут мы исп innerHTML потому что тут есть тэг

let feels = document.querySelector('#feels');
feels.innerHTML = `<span>Feels like:</span>${Math.round(result.main.feels_like)}<span>°</span>`;

let conditions = document.querySelector('#conditions');
conditions.textContent = `${result.weather[0].main}`;

let variation = document.querySelector('#variation');
variation.innerHTML ='Min: ' + `${Math.round(result.main.temp_max)}<span>°</span>` + ' Max: ' + `${Math.round(result.main.temp_min)}<span>°</span>`
}

function getOurDate(){
    const myDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    let showDate = document.querySelector('#date');
    showDate.textContent = `${day} ${todayDate} ${month} ${year}`;
}
