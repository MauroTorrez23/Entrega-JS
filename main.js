let pizza = [
    "harina",
    "queso",
    "salsa",
    "jamon",
    "sal",
    "agua",
    "levadura",
    "morron",
    "anana",
    "tomate",
];
function contarIngredientes(ingredientes) {
    let pares = [];
    let impares = [];

    for(let i = 0; i<10; i++) 
    {   let contador = pizza[i].length;
        if (contador % 2 ==0)
        {
            pares.push(pizza[i]);
        } else{
            impares.push(pizza[i]);
        }
    }
    console.log(`los ingredientes pares son ${pares}`),
    console.log(`los ingredientes impares son ${impares}`)
}

contarIngredientes(pizza);