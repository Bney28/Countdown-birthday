const divMeses = document.querySelector("#months")
const divDias = document.querySelector("#days")
const divHoras = document.querySelector("#hours")
const divMinutos = document.querySelector("#minutes")
const divSegundos = document.querySelector("#seconds")

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

export default showCountDown