const botones = document.querySelectorAll('button');  //console.log(botones[1])
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');
let puntuacionUsuario = 0;
let puntuacionOrdenador = 0;

botones.forEach(boton => {
    boton.addEventListener('click', function(){
        const eleccionusuario = boton.dataset.jugada;    console.log(eleccionusuario);
        const eleccionpc = getrandom();
        const resultado = comparar(eleccionusuario, eleccionpc);
        console.log(resultado);
        resultadoFinal(eleccionusuario, eleccionpc, resultado);
    })
})

function getrandom(){
    const elegirpc = ['piedra', 'papel', 'tijera'];
    const aleatoria = Math.floor(Math.random() * elegirpc.length);
    return elegirpc[aleatoria];
    // console.log('pc', elegirpc[aleatoria]);
}
//getrandom();

function comparar(eleccionusuario, eleccionpc){
    if (eleccionusuario === eleccionpc){
        return 'EMPATE'
    }
    else if (
        
        (eleccionusuario === 'piedra' && eleccionpc === 'tijera')
        || (eleccionusuario === 'papel' && eleccionpc === 'piedra')
        || (eleccionusuario === 'tijera' && eleccionpc === 'papel')
    )
    {puntuacionUsuario++
    return 'GANAS'
    }

    else {puntuacionOrdenador++
         return'PIERDES'}
}

function resultadoFinal(eleccionusuario, eleccionpc, resultado){
    
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = resultado;
    contadorUsuario.innerHTML = 'Tus puntos : ' + puntuacionUsuario;
    contadorOrdenador.innerHTML = 'Puntos máquina : ' + puntuacionOrdenador;
}

