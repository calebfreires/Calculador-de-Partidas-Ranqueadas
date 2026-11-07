# 🏆 Calculadora de Partidas Rankeadas

Projeto desenvolvido em **JavaScript** como parte dos desafios de lógica de programação do bootcamp DIO Santander.

A aplicação calcula o saldo de vitórias de jogadores, determina seu nível em um sistema de classificação e processa múltiplos jogadores utilizando estruturas de repetição.

O objetivo do exercício foi praticar fundamentos essenciais da programação, com foco em lógica, organização e tratamento de dados.

## 🚀 Funcionalidades

- Calcula o saldo de vitórias de cada jogador.
- Classifica jogadores de acordo com o saldo obtido.
- Processa múltiplos jogadores automaticamente.
- Valida os dados de entrada.
- Identifica valores negativos, decimais e entradas que não sejam números inteiros.
- Exibe o resultado individual de cada execução.

## 🧠 Regras de classificação

O saldo é calculado pela seguinte operação:

```javascript
saldoVitorias = vitorias - derrotas;
```

A classificação segue as seguintes faixas:

| Saldo de vitórias | Nível    |
| ----------------- | -------- |
| Até 10            | Ferro    |
| 11 a 20           | Bronze   |
| 21 a 50           | Prata    |
| 51 a 80           | Ouro     |
| 81 a 90           | Diamante |
| 91 a 100          | Lendário |
| Acima de 100      | Imortal  |

**Decisão de implementação:** a classificação considera o saldo de vitórias, conforme a operação solicitada no desafio. Essa interpretação evita classificar um jogador com muitas vitórias, mas também muitas derrotas, como alguém de nível elevado apenas pelo número bruto de vitórias.

Um saldo negativo é permitido, pois pode resultar naturalmente de uma quantidade de derrotas superior à de vitórias. Nesse caso, o jogador permanece na categoria Ferro.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Git e GitHub

## ▶️ Como executar o projeto

### 1. Pré-requisitos

É necessário ter o [Node.js](https://nodejs.org/) instalado.

Para verificar a instalação, execute no terminal:

```bash
node -v
```

### 2. Clone o repositório

```bash
git clone https://github.com/calebfreires/Calculador-de-Partidas-Ranqueadas
```

### 3. Acesse a pasta do projeto

```bash
cd calculadora-partidas-rankeadas
```

### 4. Execute o código

Considerando que o arquivo principal se chama `index.js`:

```bash
node index.js
```

Os resultados serão exibidos diretamente no terminal.

## 📚 Conceitos de programação aplicados

Durante o desenvolvimento, foram trabalhados os seguintes conceitos:

### 1. Variáveis e operadores aritméticos

Utilização de variáveis para armazenar os dados dos jogadores e operadores para calcular o saldo de vitórias.

### 2. Estruturas condicionais

Uso de `if`, `else if` e `else` para implementar as regras de classificação.

Também foi trabalhada a importância da ordem das condições e dos limites de cada faixa, evitando classificações incorretas.

### 3. Funções e retorno de valores

Criação da função `calcularNivel(vitorias, derrotas)`, responsável por centralizar o cálculo e a classificação.

Utilização de `return` para retornar múltiplos resultados em um array:

```javascript
return [saldoVitorias, nivel];
```

### 4. Arrays e objetos

Organização dos jogadores em um array de objetos, permitindo armazenar e acessar os dados de cada jogador de maneira estruturada.

```javascript
let jogadores = [
    { vitorias: 25, derrotas: 10 },
    { vitorias: 56, derrotas: 10 },
    { vitorias: 105, derrotas: 10 }
];
```

### 5. Estruturas de repetição

Utilização do laço `for` para percorrer o array de jogadores e executar a mesma lógica para cada registro.

Isso evita a repetição manual de chamadas da função e permite processar quantos jogadores forem adicionados ao array.

### 6. Validação e tratamento de dados

Utilização de operadores lógicos (`||`), operadores relacionais e `Number.isInteger()` para verificar se os dados fornecidos atendem aos requisitos.

Um dos aprendizados importantes foi distinguir dados de entrada inválidos de resultados negativos gerados por operações matemáticas.

Por exemplo, um saldo negativo não representa necessariamente um erro, pois pode ser o resultado válido da subtração entre vitórias e derrotas.

## 🧪 Cenários de teste

Foram considerados diferentes cenários para verificar o comportamento da aplicação:

| Vitórias | Derrotas | Saldo | Resultado        |
| -------: | -------: | ----: | ---------------- |
|       10 |       10 |     0 | Ferro            |
|       25 |       10 |    15 | Bronze           |
|        5 |       15 |   -10 | Ferro            |
|       56 |       10 |    46 | Prata            |
|      105 |       10 |    95 | Lendário         |
|      306 |       10 |   296 | Imortal          |
|     "30" |       10 |     — | Entrada inválida |
|     30.5 |       10 |     — | Entrada inválida |
|       -5 |       10 |     — | Entrada inválida |

## 🎯 Principais aprendizados

Mais do que implementar uma calculadora, este desafio ajudou a desenvolver habilidades importantes para a construção de soluções:

- Decompor um problema em etapas menores.
- Transformar regras de negócio em condições lógicas.
- Identificar e corrigir erros de comparação e limites.
- Entender a diferença entre parâmetros, processamento e retorno de uma função.
- Reutilizar código por meio de funções e estruturas de repetição.
- Validar entradas sem confundi-las com resultados do processamento.
- Pensar em diferentes cenários antes de considerar uma implementação concluída.

## 👨‍💻 Autor

**Caleb Freires**

Desenvolvedor Web com foco em JavaScript, Front-End e evolução em desenvolvimento Back-End.

[GitHub](https://github.com/calebfreires) • [LinkedIn](https://www.linkedin.com/in/calebfreires/)
