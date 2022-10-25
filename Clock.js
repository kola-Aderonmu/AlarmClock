//REAL TIME

const display = document.getElementById('clock');
const ddmmyy = document.getElementById('DD-MM-YYYY');
const audio = new Audio('AUDIO/mixkit-facility-alarm-sound-999 (1).wav');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const date = new Date();
    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    const fullYear = formatTime(date.getFullYear());
    const month = formatTime(date.getMonth() + 1);
    const day = formatTime(date.getDate());

    display.innerText=`${hour} : ${minutes} : ${seconds}`;
    ddmmyy.innerText=`${day} - ${month} - ${fullYear}`;
}

function formatTime(time){
    if(time < 10){
        return '0' + time;
    }
 return time;
}

function setAlarmTime(value){
    alarmTime = value;
}


function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}


function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);







//EXERCISE TIME
const exerciseTimeDisplay = document.getElementById('exerciseClock');
const exerciseDateDisplay = document.getElementById('EX-DD-MM-YYYY');
const exerciseStart_btn = document.getElementById('exerciseTimeStart');
const exerciseReset_btn = document.getElementById('exerciseTimeReset');
const exerciseStop_btn = document.getElementById('exerciseTimeStop');
let exerciseTimeInterval = null;


exerciseStart_btn.addEventListener('click', exerciseTimeStart);
exerciseReset_btn.addEventListener('click', exerciseTimeReset);
exerciseStop_btn.addEventListener('click', exerciseTimeStop);


function updateExerciseTime() {
    var exerciseTimeDate, exerciseTimeHour, exerciseTimeMinutes, exerciseTimeSeconds, addHours, addMins, addSecs, addHoursMins,
    addHoursSecs, addMinsSecs, realTimeDate, numberOfMilliSecondsInRealDate, ratioFieldHourVariable, ratioFieldMinVariable, 
    ratioFieldSecVariable, exerciseTimeMonth, exerciseTimeDay;

    ratioFieldHourVariable = document.getElementById("exerciseTimeRatioFieldHour").value;
    ratioFieldMinVariable = document.getElementById("exerciseTimeRatioFieldMin").value;
    ratioFieldSecVariable = document.getElementById("exerciseTimeRatioFieldSec").value;

    ratioFieldHourVariable = parseInt(ratioFieldHourVariable);
    ratioFieldMinVariable = parseInt(ratioFieldMinVariable);
    ratioFieldSecVariable = parseInt(ratioFieldSecVariable);

    if((ratioFieldHourVariable==1) && (ratioFieldMinVariable==1) && (ratioFieldSecVariable==1)){
    exerciseTimeDate = new Date();
    exerciseTimeHour = exerciseTimeDate.getHours();
    exerciseTimeMinutes = exerciseTimeDate.getMinutes();
    exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable>1) && (ratioFieldMinVariable==1) && (ratioFieldSecVariable==1)){  
        addHours = (1000 * 60 * 60) * ratioFieldHourVariable;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addHours);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable>1) && (ratioFieldMinVariable>1) && (ratioFieldSecVariable==1)){
        addHours = (1000 * 60 * 60) * ratioFieldHourVariable;
        addMins = (1000 * 60) * ratioFieldMinVariable;
        addHoursMins = addHours + addMins;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addHoursMins);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable>1) && (ratioFieldMinVariable>1) && (ratioFieldSecVariable>1)){
        addHours = (1000 * 60 * 60) * ratioFieldHourVariable;
        addMins = (1000 * 60) * ratioFieldMinVariable;
        addSecs = 1000 * ratioFieldSecVariable;
        addHoursMinsSecs = addHours + addMins + addSecs;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addHoursMinsSecs);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable==1) && (ratioFieldMinVariable>1) && (ratioFieldSecVariable>1)){
        addMins = (1000 * 60) * ratioFieldMinVariable;
        addSecs = 1000 * ratioFieldSecVariable;
        addMinsSecs = addMins + addSecs;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addMinsSecs);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable==1) && (ratioFieldMinVariable==1) && (ratioFieldSecVariable>1)){
        addSecs = 1000 * ratioFieldSecVariable;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addSecs);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable>1) && (ratioFieldMinVariable==1) && (ratioFieldSecVariable>1)){
        addHours = (1000 * 60 * 60) * ratioFieldHourVariable;
        addSecs = 1000 * ratioFieldSecVariable;
        addHoursSecs = addHours + addSecs;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addHoursSecs);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else if((ratioFieldHourVariable==1) && (ratioFieldMinVariable>1) && (ratioFieldSecVariable==1)){
        addMins = (1000 * 60) * ratioFieldMinVariable;
        addHoursMinsSecs = addHours + addMins + addSecs;
        realTimeDate = new Date();
        numberOfMilliSecondsInRealDate = realTimeDate.getTime();
        exerciseTimeDate = new Date(numberOfMilliSecondsInRealDate + addMins);
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes(); 
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }else{
        exerciseTimeDate = new Date();
        exerciseTimeHour = exerciseTimeDate.getHours();
        exerciseTimeMinutes = exerciseTimeDate.getMinutes();
        exerciseTimeSeconds = exerciseTimeDate.getSeconds();

    }

        exerciseTimeFullYear = formatTime(exerciseTimeDate.getFullYear());
        exerciseTimeMonth = formatTime(exerciseTimeDate.getMonth() + 1);
        exerciseTimeDay = formatTime(exerciseTimeDate.getDate());

    
        exerciseTimeHour = formatTime(exerciseTimeHour);
        exerciseTimeMinutes = formatTime(exerciseTimeMinutes);
        exerciseTimeSeconds = formatTime(exerciseTimeSeconds);


        exerciseTimeDisplay.innerText=`${exerciseTimeHour} : ${exerciseTimeMinutes} : ${exerciseTimeSeconds}`;
        exerciseDateDisplay.innerText=`${exerciseTimeDay} - ${exerciseTimeMonth} - ${exerciseTimeFullYear}`;

}


function formatTime(time){
    if(time < 10){
        return '0' + time;
    }
 return time;
}


function exerciseTimeStart(){
    if(exerciseTimeInterval){
        return;
    }
    exerciseTimeInterval = setInterval(updateExerciseTime, 1000);
}


function exerciseTimeStop(){
    clearInterval(exerciseTimeInterval);
    exerciseTimeInterval = null;
}

function exerciseTimeReset(){
    exerciseTimeStop();
    exerciseTimeDisplay.innerText = `00 : 00 : 00`;
    exerciseDateDisplay.innerText=`DD-MM-YYYY`;
}










//STOPWATCH
const time_el = document.querySelector('.stopwatch .stopwatchTime');
const start_btn = document.getElementById('stopwatchStart');
const stop_btn = document.getElementById('stopwatchStop');
const reset_btn = document.getElementById('stopwatchReset');

let stopwatchSeconds = 0;
let stopwatchInterval = null;


//Event Listeners
start_btn.addEventListener('click', stopwatchStart);
stop_btn.addEventListener('click', stopwatchStop);
reset_btn.addEventListener('click', stopwatchReset);

//update timer
function stopwatchTimer(){
    stopwatchSeconds++;

    //format timer
    let stopwatchHrs = Math.floor(stopwatchSeconds / 3600);
    let stopwatchMins = Math.floor((stopwatchSeconds - (stopwatchHrs*3600)) / 60);
    let stopwatchSecs = stopwatchSeconds % 60;

    if (stopwatchSecs < 10) stopwatchSecs = "0" + stopwatchSecs;
    if (stopwatchMins < 10) stopwatchMins = "0" + stopwatchMins;
    if (stopwatchHrs < 10) stopwatchHrs = "0" + stopwatchHrs;

    time_el.innerText = `${stopwatchHrs} : ${stopwatchMins} : ${stopwatchSecs}`;
}


function stopwatchStart(){
    if(stopwatchInterval){
        return;
    }
    stopwatchInterval = setInterval(stopwatchTimer, 1000);
}

function stopwatchStop(){
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function stopwatchReset(){
    stopwatchStop();
    stopwatchSeconds = 0;
    time_el.innerText = `00 : 00 : 00`;
    return;
}







//COUNTDOWN

var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('second');


var startTimer = null;

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = "0" + 0;
        m.value = "0" + 0;
        s.value = "0" + 0;
    }else if(s.value != 0){
        s.value--;
        s.value = s.value<10? "0" + s.value: s.value;
        
    }else if(m.value !=0 && s.value == 0){
        s.value = 59;
        s.value = s.value<10? "0" + s.value: s.value;
        m.value--;
        m.value = m.value<10? "0" + m.value: m.value;
        
    }else if(h.value !=0 && m.value == 0){
        m.value = 60;
        m.value = m.value<10? "0" + m.value: m.value;
        h.value--;
        h.value = h.value<10? "0" + h.value: h.value;
    }
    return;
}


function stopTimer(){
    clearInterval(startTimer);

}


start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval();
})


reset.addEventListener('click', function(){
    h.value = "0" + 0;
    m.value = "0" + 0;
    s.value = "0" + 0;
    stopTimer();
})