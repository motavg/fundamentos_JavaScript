// parametros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(2, 200))

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome}, minha idade é ${idade}`;
}

console.log(nomeIdade("Vinícius", 30))


function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

               //function soma e depois a multiplicação
console.log(multiplica(soma(4, 5), soma(3, 3)))


function multiplica1(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

               //function soma e depois a multiplicação
console.log(multiplica1(soma(4, 5)))

