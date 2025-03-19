let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar campo de texto
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Debe ingresar al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
}
