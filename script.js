let yourname = prompt("Adınızı giriniz:");
let date = new Date();
let day;

(yourname != null) ? document.getElementById("name").innerText = yourname : document.getElementById("name").innerText = "İsimsiz";
document.getElementById("time").innerText = `${date.getHours().toString()} ${date.getMinutes().toString()} ${date.getSeconds().toString()}`;

switch(date.getDay()){
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
}
document.getElementById("day").innerText = day;
