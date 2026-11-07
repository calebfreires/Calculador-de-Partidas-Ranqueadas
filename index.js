function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (saldoVitorias <= 10) {
    nivel = "Ferro"
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze"
  } else if (saldoVitorias <= 50) {
    nivel = "Prata"
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro"
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante"
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário"
  } else {
    nivel = "Imortal"
  }

  return [saldoVitorias, nivel]
}

let jogadores = [
  { vitorias: -5, derrotas: 10 },
  { vitorias: 10, derrotas: 10 },
  { vitorias: 25, derrotas: 10 },
  { vitorias: 56, derrotas: 10 },
  { vitorias: 55, derrotas: 10 },
  { vitorias: 105, derrotas: 10 },
  { vitorias: "30", derrotas: 10 },
  { vitorias: 306, derrotas: 10 },
]


for (let i = 0; i < jogadores.length; i++) {
  let jogador = jogadores[i]
  let resultado = calcularNivel(jogador.vitorias, jogador.derrotas)


  if (jogador.vitorias < 0 || jogador.derrotas < 0 || !Number.isInteger(jogador.vitorias) || !Number.isInteger(jogador.derrotas)) {
    console.log(`Erro na execução ${i + 1}: Dado inválido, forneça somente números inteiros e positivos`)
  } else {
    console.log(`Execução ${i + 1}: O jogador tem um saldo de vitórias de ${resultado[0]} e está no nível ${resultado[1]}`)
  }

}
