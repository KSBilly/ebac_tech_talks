AOS.init();

const dataDoEvento = new Date("Dec 01, 2025 13:40:00");
const TimeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras=setInterval(function(){
    const agora=new Date();
    const timeStampAtual=agora.getTime();

    const distanciaAteOEvento=TimeStampDoEvento-timeStampAtual;

    const diasMs=(1000*60*60*24)
    const horaMs=(1000*60*60)
    const minMs=(1000*60)

    const diasAteOEvento=Math.floor(distanciaAteOEvento/diasMs);
    const horasAteOEvento=Math.floor((distanciaAteOEvento%diasMs)/horaMs);
    const minutosAteOEvento=Math.floor((distanciaAteOEvento%horaMs)/minMs);
    const segundosAteOEvento=Math.floor((distanciaAteOEvento%minMs)/1000);

    document.getElementById('contador').innerHTML=` ${diasAteOEvento}D  ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S`

    if(distanciaAteOEvento<0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML="Evento já começou!"
    }

},1000);