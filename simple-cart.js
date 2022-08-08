const shoppingcart = [
    {name: 'shoe', price : 2600},
    {name:'shirt', price : 1800},
    {name: 'watch', price : 20000},
    {name: 'pant',  price : 1500}   
]
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
    const product= products[i]
    sum = sum + product.price; 
    // console.log(product)

    }
    return sum;
}
const expence = totalCost(shoppingcart)
console.log('total expence today', expence)