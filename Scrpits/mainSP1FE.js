const dias = document.querySelector("#days")
const horas = document.querySelector("#hours")
const minutos = document.querySelector("#minutes")
const segundos = document.querySelector("#seconds")

const fechaActual = new Date()
console.log(fechaActual);

const cumpleaños = new Date("Mon Aug 07 2023 12:00:00")
console.log(cumpleaños);

const showCountDown = () =>{
    const resta = cumpleaños - fechaActual
    console.log(resta);

    const d = Math.floor(resta / 1000 / 60 / 60 / 24);
    const h = Math.floor(resta / 1000 / 60 / 60) % 24;
    const m = Math.floor(resta / 1000 / 60) % 60;
    const s = Math.floor(resta / 1000) % 60
}

showCountDown()
