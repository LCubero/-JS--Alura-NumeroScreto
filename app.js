/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";
 */

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos > 1 ? "veces" : "vez"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function generarNumeroSecreto() {
  // return Math.floor(Math.random() * 10) + 1;
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  console.log(` tamaño de lista ${listaNumerosSorteados.length}`);
  // Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    // Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  // generar el numero aleatoreo
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  // inicializar intentos
  intentos = 1;
}

function reiniciarJuego() {
  // limpiar caja
  limpiarCaja();
  // indicar msj de intervalo de numeros
  condicionesIniciales();
  // desahibilitar el nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
