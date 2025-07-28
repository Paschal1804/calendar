const newmonth = document.getElementById("month");
const year = document.getElementById("year");   
const day = document.getElementById("day");
const todaydate = document.getElementById("date");

const date = new Date();
const month = date.getMonth();
newmonth.innerHTML = date.toLocaleString('default', { month: 'long' });
year.innerHTML = date.getFullYear();
day.innerText = date.toLocaleString('default', { weekday: 'long' });
todaydate.innerText = date.getDate();