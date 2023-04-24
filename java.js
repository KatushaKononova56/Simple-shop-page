var date = new Date(); // создаем объект Date с текущей датой и временем
var h = date.getHours(); // получаем текущий час

if (h > 20 || h < 8) document.getElementById("stylesheet").href = "./css/night.css"; 
// если сейчас ночь, то меняем файл стилейFF