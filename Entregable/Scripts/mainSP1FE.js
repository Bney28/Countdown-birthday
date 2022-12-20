import "../Styles/styleSP1FE.sass"
import showCountDown from "./ComponentsSP1FE"

const fechaActual = new Date()
console.log("Hoy es " + fechaActual);

const cumpleaños = new Date("Mon Aug 07 2023 00:00:00")
console.log("Mi cumpleaños es " + cumpleaños);

setInterval(() => {
    const fechaActual = new Date();
    const countDown = cumpleaños - fechaActual
    showCountDown(countDown)
}, 1000);
