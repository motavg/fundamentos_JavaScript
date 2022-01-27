// tipo de dados
// booleanos

// conversão implicita
const numero = 456;
const numeroString = '456'; //const numeroString = Number(456); ==> converte a string

console.log(numero == numeroString)

//number()
//String()
console.log(numero + numeroString) //ele concatenou
console.log(numero + Number(numeroString)) //ele converte => number()

//conversão explicita