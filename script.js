let startTime;
let elapsedTime = 0;
let timerInterval;

const displayMin = document.getElementById('minutes');
const displaySec = document.getElementById('seconds');
const displayMs = document.getElementById('milliseconds');
const startPauseBtn = document.getElementById('startPauseBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');

function timeToString(time) {
    let diffInMin = time / 3600000;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    return {
        m: mm.toString().padStart(2, '0'),
        s: ss.toString().padStart(2, '0'),
        ms: ms.toString().padStart(2, '0')
    };
}

function print(time) {
    let res = timeToString(time);
    displayMin.innerHTML = res.m;
    displaySec.innerHTML = res.s;
    displayMs.innerHTML = res.ms;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        print(elapsedTime);
    }, 10);
    showButton('PAUSE');
    lapBtn.disabled = false;
}

function pause() {
    clearInterval(timerInterval);
    showButton('START');
}

function reset() {
    clearInterval(timerInterval);
    print(0);
    elapsedTime = 0;
    showButton('START');
    lapsList.innerHTML = '';
    lapBtn.disabled = true;
}

function addLap() {
    let res = timeToString(elapsedTime);
    let lapTime = `${res.m}:${res.s}.${res.ms}`;
    let li = document.createElement('li');
    li.classList.add('lap-item');
    li.innerHTML = `<span>Lap ${lapsList.childElementCount + 1}</span> <span>${lapTime}</span>`;
    lapsList.prepend(li);
}

function showButton(buttonKey) {
    if (buttonKey === 'PAUSE') {
        startPauseBtn.innerHTML = 'Pause';
        startPauseBtn.className = 'btn pause';
    } else {
        startPauseBtn.innerHTML = 'Start';
        startPauseBtn.className = 'btn start';
    }
}

startPauseBtn.addEventListener('click', () => {
    if (startPauseBtn.innerHTML === 'Start') {
        start();
    } else {
        pause();
    }
});

resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', addLap);