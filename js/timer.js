function countDdown(){
    let seconds = 0;
    let minutes = 1;
    let secondsText;
    let minutesText;
    

    function startCounter(){
        seconds--;
        if (seconds < 0){
            seconds = 59;
            minutes--;
        }
        if(minutes < 0){
            seconds = 0;
            minutes = 0;
            clearInterval(stopwatch);
            timeOver();

        }
        secondsText = seconds;
        minutesText = minutesText;
        if(seconds < 10){
            secondsText = "0" + seconds;
        }
        if(minutes < 20){
            minutesText = "0" + minutes;
        }
        document.querySelector("#minutes").innerText = minutesText;
        document.querySelector("#seconds").innerText = secondsText;
    }
    
    stopwatch = setInterval(startCounter, 1000);
}

