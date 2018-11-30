const manecillaDos = document.querySelector('.second-hand');
const manecillaMinutos = document.querySelector('.min-hand'); 
const manecillaHoras = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();


    const segundos = now.getSeconds();
    const segundosDegrees = ((segundos /60 ) * 360) + 90;
    manecillaDos.style.transform = `rotate(${segundosDegrees}deg)`;
    

    const mins = now.getMinutes();
    const minDegrees = ((mins / 60)*360) +90;
    manecillaMinutos.style.transform = `rotate(${minDegrees}deg)`;

    const horas = now.getHours;
    const horasDegrees = ((horas / 12)*360) +90;
    manecillaHoras.style.transform = `rotate(${horasDegrees}deg)`;
}

setInterval(setDate, 1000);  