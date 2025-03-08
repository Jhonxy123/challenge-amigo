// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if(!nombre){
        alert('Por favor ingrese un nombre válido');
        return;
    }

    if(amigos.includes(nombre)){
        alert('¡Este nombre ya existe en la lista!');
        input.value = '';
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
}

function actualizarListaAmigos(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i<amigos.length;i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('¡Agrega al menos un amigo a la lista!');
        return;
    }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const nombreSeleccionado =amigos[indiceAleatorio];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '<li>'+'El elegido es: '+nombreSeleccionado;
}

function imprimir_amigos(nombre){
    for(i=0;i<=nombre.length;i++){
        document.getElementById('listaAmigos').innerHTML='<li>'+nombre[i]+'</li>';
    }
}