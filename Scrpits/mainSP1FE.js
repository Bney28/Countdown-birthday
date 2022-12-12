const divMeses = document.querySelector("#months")
const divDias = document.querySelector("#days")
const divHoras = document.querySelector("#hours")
const divMinutos = document.querySelector("#minutes")
const divSegundos = document.querySelector("#seconds")

const fechaActual = new Date()
console.log("Hoy es " + fechaActual);

const cumpleaños = new Date("Mon Aug 07 2023 00:00:00")
console.log("Mi cumpleaños es " + cumpleaños);

const showCountDown = (contador) =>{

    const meses = Math.floor(contador / 1000 / 60 / 60 / 24 / 30);
    const dias = Math.floor(contador / 1000 / 60 / 60 / 24) % 30;
    const horas = Math.floor(contador / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(contador / 1000 / 60) % 60;
    const segundos = Math.floor(contador / 1000) % 60

    divMeses.innerHTML = meses <10 ? `0${meses}` : meses;
    divDias.innerHTML = dias <10 ? `0${dias}` : dias;
    divHoras.innerHTML = horas <10 ? `0${horas}` : horas;
    divMinutos.innerHTML = minutos <10 ? `0${minutos}` : minutos;
    divSegundos.innerHTML = segundos <10 ? `0${segundos}` : segundos;
}

setInterval(() => {
    const fechaActual = new Date();
    const countDown = cumpleaños - fechaActual
    showCountDown(countDown)
}, 1000);


// Calculadora

let resultado = ""
let pantalla = ""
let divPantalla = document.querySelector(".pantalla")

const ver = (numero) => {
    pantalla += numero
    divPantalla.innerHTML = pantalla
}

const borrar = () => {
    pantalla = ""
    pantalla.innerHTML= ""
}

const calcular = () =>{
    resultado = eval(pantalla)
    divPantalla.innerHTML = pantalla
    pantalla = ""
}