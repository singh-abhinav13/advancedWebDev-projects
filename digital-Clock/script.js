const hrs = document.querySelector(".hours")
const min = document.querySelector(".mins")
const secs = document.querySelector(".sec")
const amPM = document.querySelector(".time")

function digitalClock() {
    const getDate = new Date()

    let mins = getDate.getMinutes()
    let minutes = mins < 10 ? `0${mins}` : `${mins}`
    min.innerHTML = minutes

    let sec = getDate.getSeconds()
    let second = sec < 10 ? `0${sec}` : `${sec}`
    secs.innerHTML = second

    let hours = getDate.getHours()
    hrs.innerHTML = hours

    const ampm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12 

    amPM.innerHTML = ampm

}



setInterval(digitalClock, 1000)