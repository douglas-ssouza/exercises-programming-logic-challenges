// 16 - Validação de CPF
// Desenvolva uma função `cpfValidator`, que recebe uma string no formato de CPF `xxx.xxx.xxx-xx` e verifica se o CPF passado por parâmetro é válido ou não.
// Considere um CPF com os seguintes dígitos:
// `abc.def.ghi-jk`
// Para descobrirmos o primeiro dígito verificado `j`, procedemos da seguinte maneira: multiplicamos o primeiro por 1, o segundo por 2, o terceiro por 3, o quarto por 4 e vamos assim até multiplicarmos o nono por 9. Então, somamos tudo isto. O dígito `j` é o resto da divisão da soma por 11 (ou 0, caso o resto seja 10).
// Para o segundo dígito verificador `k`, temos o seguinte: multiplicamos o segundo digito por 1, o terceiro por 2, o quarto por 3 e vamos assim até multiplicarmos o décimo (primeiro dígito verificador) por 9. Então, somamos tudo isto. O dígito `k` será o resto da divisão da soma por 11 (ou 0, caso o resto seja 10).
// Sabendo que isso vale para 100% dos CPFs, sua missão é implementar uma função que, dado um CPF, diga se ele é válido ou não.
// A saída da sua função deve ser uma string. Quando o CPF for válido, o retorno deve ser `'CPF válido'`; quando o CPF for inválido, o retorno deve ser `'CPF inválido'`
// **Importante:**
// Uma sequência de números iguais, como por exemplo `'000.000.000-00'`, também é um CPF inválido 😉
// Exemplo:
// ```
// // Entrada:
// '397-606-448-34'
// // Saída:
// 'CPF inválido'
// // Entrada:
// '166.354.840-43'
// // Saída:
// 'CPF válido'
// ```
// **O que será verificado:**
// - A função deve retornar a mensagem `'CPF inválido'`, quando o CPF for inválido
// - A função deve retornar a mensagem `'CPF válido'`, quando o CPF for válido.

// Desenvolva seu código aqui