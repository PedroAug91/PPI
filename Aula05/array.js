let listaFrutas = ['Maçãs', 'Uvas', 'Bananas']

let primeiroItem = listaFrutas[0]
let segundoItem = listaFrutas[1]
let terceiroItem = listaFrutas[2]

/*
    O método forEach percorre cada elemento de uma lista.
    O primeiro parametro é o valor presente na lista, o
    segundo parametro é o indice do elemento na lista e
    o terceiro é a própria lista.

    - item (Retorno padrão)
    - indice (Opcional)
    - arrayOriginal (Opcional)
*/

listaFrutas.forEach(function (item, indice, arrayOriginal) {
    console.log(item, indice, arrayOriginal)
    // Maçãs 0  ['Maçãs', 'Uvas', 'Bananas']
})

listaFrutas.push() // Adiciona elementos no final da lista

listaFrutas.unshift() // Adiciona elementos no inicio da lista

listaFrutas.shift() // Remove o 1º elemento da lista

listaFrutas.pop() // Remove o último elemento da lista

listaFrutas.splice() //  Remove ou adiciona elementos em qualquer posição da lista

listaFrutas.indexOf() // Retorna  o indíce do elemento passado como parametro

listaFrutas.isArray() // Retorna verdadeiro ou falso se a variavel for uma lista

listaFrutas.length() //  Retorna o tamanho da lista
