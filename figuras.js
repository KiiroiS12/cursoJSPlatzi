//Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();


//Código del Triangulo
console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + lado3;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Código del Círculo
console.group("Círculos");

const PI = Math.PI;
function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo (radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
