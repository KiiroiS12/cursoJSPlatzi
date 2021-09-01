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

function perimetroTriangulo (lado1, lado2, lado3){
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

    var resultadoCuadrado = document.getElementById("resultadoCuadrado");
    resultadoCuadrado.innerText = "El perimetro del cuadrado es de " + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    var resultadoCuadrado = document.getElementById("resultadoCuadrado");
    resultadoCuadrado.innerText = "El area del cuadrado es de " + area;
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    
    var resultadoTriangulo = document.getElementById("resultadoTriangulo");
    resultadoTriangulo.innerText = "El perimetro del triangulo es de " + perimetro;
}

function calcularAreaTriangulo(){
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const value2 = input2.value;
    const value3 = input3.value;

    const area = areaTriangulo(value2,value3);
    
    var resultadoTriangulo = document.getElementById("resultadoTriangulo");
    resultadoTriangulo.innerText = "El area del triangulo es de " + area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    
    var resultadoCirculo = document.getElementById("resultadoCirculo");
    resultadoCirculo.innerText = "El perimetro del circulo es de " + perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    
    var resultadoCirculo = document.getElementById("resultadoCirculo");
    resultadoCirculo.innerText = "El area del circulo es de " + area;
}