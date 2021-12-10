function clock(){
    var getTime = new Date();
    var daysArray = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    var monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    var day = daysArray[getTime.getDay()];
    var minutes = getTime.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    var seconds = getTime.getSeconds();
    seconds = seconds > 9 ? seconds : '0' + seconds;
    var hours = getTime.getHours();
    hours = hours > 9 ? hours : '0' + hours;
    var hourFormatter = hours + ':' + minutes + ':' + seconds;

    daysArray.forEach(element => {
        if (element == day){
            var object = document.getElementById(element.toLowerCase());
            object.classList.add("active");
        }
    });
    document.getElementById('clock-time').innerHTML = hourFormatter;
    document.getElementById('clock-date').innerHTML = getTime.getDate() + " de " + monthsArray[getTime.getMonth()] + " de " + getTime.getFullYear();
    setTimeout(clock, 1000);
}

clock();
