"use strict"

var bStart = document.getElementById('start')
var barra = document.getElementById('progress')
var btModal = document.getElementById('bt-modal')
var containerModal = document.getElementById('modal-container')

var minutesSec = 1476
var minutes = 24
var seconds = 60
var rodando = 0

var tempoTotal = minutesSec

var time = 1000
var cronometer

function isRunning() {
    var rodando = 0
    if(rodando == 0){
        return bStart.disabled = false
    }
}

bStart.addEventListener('click', function start() {
    if(rodando == 0){
        cronometer = setInterval( () => { timer() }, time)
        rodando++
    }else if(rodando == 1){
        bStart.disabled = true
    }
})

function stop() {
    clearInterval(cronometer)
    rodando = 0
    isRunning()
}

function reset() {
    clearInterval(cronometer)
    minutes = 24
    seconds = 60
    rodando = 0
    minutesSec = tempoTotal
    isRunning()
    document.getElementById('contagem').innerHTML ='25:00'
    document.title = "25:00 | Pomodoro-Timer"
    barra.style.width = 100 + '%'
}

console.log(rodando)

function timer() {
    seconds--
    minutesSec--

    if(seconds == 0){
        seconds= 59
        minutes --
    }

    if(minutes == 0 && seconds == 1){
        seconds = 0
        rodando = 0
        bStart.disabled = true
        clearInterval(cronometer)
    }

    var format = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    document.getElementById('contagem').innerHTML = format
    
    var tempoRestante = minutesSec
    let tempPercent = (tempoRestante*100) / tempoTotal

    barra.style.width = tempPercent + '%'

    document.title = format + " | Pomodoro-Timer"
    
    if(window.Notification&&Notification.permission!=='denied'){
        Notification.requestPermission(function(status){
            if(minutes == 0 && seconds == 0){
                let n = new Notification('O TEMPO ACABOU!', {
                    body: "00:00 Descanse por 5 minutos e reinicie o timer",
                    icon: 'icons/timer.png'
                })
            }
            
        })
    }

}

var info = document.getElementById('info-button')

info.addEventListener('click', () => {
    containerModal.style.display = 'initial'
})

btModal.addEventListener('click', () => {
    containerModal.style.display = 'none'
})
