let vitorias = prompt("Por favor, insira o número de vitórias do herói")
let derrotas = prompt("Por favor, insira o número de derrotas do herói")
let nivel

function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

let saldo = saldoVitorias(vitorias, derrotas)

if (saldo < 10) {nivel = "Ferro"}
else if (saldo > 10 && saldo < 21) {nivel = "Bronze"}
else if (saldo >= 21 && saldo < 51) {nivel = "Prata"}
else if (saldo >= 51 && saldo < 81) {nivel = "Ouro"}
else if (saldo >= 81 && saldo < 91) {nivel = "Diamante"}
else if (saldo >= 91 && saldo < 101) {nivel = "Lendário"}
else if (saldo >= 101) {nivel = "Imortal"}

console.log ("O herói tem um saldo de " + saldo + " vitórias e está no nível de " + nivel)
