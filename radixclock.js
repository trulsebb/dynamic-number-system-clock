setInterval(updateClock, 1000);

function updateClock() {
    var now = new Date();
    var decHour = now.getHours();
    var decMinute = now.getMinutes();
    var decSec = now.getSeconds();

    var hourBase = getNumberSystem(decHour);
    var minuteBase = getNumberSystem(decMinute);
    var secBase = getNumberSystem(decSec);

    document.getElementById("hour_base").textContent = hourBase;
    document.getElementById("min_base").textContent = minuteBase;
    document.getElementById("sec_base").textContent = secBase;

    document.getElementById("hour").textContent = convertBase(decHour, hourBase);
    document.getElementById("minute").textContent = convertBase(decMinute, minuteBase);
    document.getElementById("second").textContent = convertBase(decSec, secBase);
}

function getNumberSystem(number) {
    var system = number;
    if (number <= 1) {
        system = 2;
    }

    return system;
}

function convertBase(decValue, toBase) {
    var range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX'.split('');
    var toRange = range.slice(0, toBase);

    var newValue = '';
    while (decValue > 0) {
        newValue = toRange[decValue % toBase] + newValue;
        decValue = (decValue - (decValue % toBase)) / toBase;
    }

    return ('00' + newValue).substring(newValue.length);
}
