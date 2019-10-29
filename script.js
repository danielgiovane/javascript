// Faça um programa que converta esses valores de dolar para real e depois some todos os valores e retorne o resultado.



// const produtos = [
//     {
//         nome: "notebook",
//         preco: 2800
//     },
//     {
//         nome: "tablet",
//         preco: 800
//     }
// ]

// const valorEmReal = produtos.map(p => p.preco * 4)
// console.log(valorEmReal)


// const valorEmReal = produtos.map(p =>p.preco * 4).reduce((x,y) => x + y, 0)
// console.log(valorEmReal)

// var numeros = [1,23,4,5]

// var quadrados = numeros.map((item) => Math.pow(item, 2))
// console.log(quadrados)

// var quadrados = numeros.map(function(item){
//     return Math.pow(item,2)
// })

// console.log(quadrados)

// var valores = [1,25,55,10]

// var totalDosValores = valores.reduce((a,b) => a + b, 0)
// console.log(totalDosValores) 

//  var total2 = valores.reduce((a,b) => a + b , 0 )

// console.log(total2)

// console.log("===================================================================")


var vencedores = [
    {
        nome: "Gremio",
        pais: "brasil"
    },
    {
        nome: "Galão",
        pais: "belgica"
    },
    {
        nome: "fregues",
        pais: "paraguai"
    }
]

var podio = vencedores.map((item, indice )=> `<tr> <td>${indice + 1} </td> <td>${item.nome} </td> <td>${item.pais} </td> </tr>`)
document.querySelector("#tbPodio tbody").innerHTML = podio.join("")

