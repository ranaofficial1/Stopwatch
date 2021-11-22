var hour = 0;
var minute = 0;
var second = 0;
var count = 0;

var timer = false;


function stopwatch() {
    if (timer == true) {
        count = count+1;

        if(count == 100){
            second = second+1;
            count = 0;
        }

        if(second == 60){
            minute = minute+1;
            second = 0;
        }


        if(minute == 60){
            hour = hour+1;
            minute = 0;
            second = 0;
        }


        var hourStr = hour;
        var minuteStr = minute;
        var secondStr = second;
        var countStr = count;

        if(hour < 10){
            hourStr = '0' + hourStr;
        }

        if(minute < 10){
            minuteStr = '0' + minuteStr;
        }

        if(second < 10){
            secondStr = '0' + secondStr;
        }

        if(count < 10){
            countStr = '0' + countStr;
        }

        document.getElementById("hour").innerHTML = hourStr;

        document.getElementById("minute").innerHTML = minuteStr;

        document.getElementById("second").innerHTML = secondStr;

        document.getElementById("count").innerHTML = countStr;


        setTimeout("stopwatch()", 10);
    }
}


function start() {
    timer = true;
    stopwatch();

}

function reset() {
    timer = false;
    hour = 0;
    minute = 0;
    sec = 0;
    count = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";



}

function stop() {
    timer = false;

}