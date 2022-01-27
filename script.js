//var é algo que fica solto

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log(area)

//let permite trocar os valores, porém tem que declarar antes de ser utilizada

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area =(altura * comprimento) / 2
// }

// console.log(area)

// const é algo fixo, valor declarado antes

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else { 
    area = (altura * comprimento) / 2
}

console.log(area)