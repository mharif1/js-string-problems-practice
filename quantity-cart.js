const shoppingcart = [
    {name: 'shoe', price : 2600, quantity: 2},
    {name:'shirt', price : 1800, quantity: 5},
    {name: 'watch', price : 20000, quantity: 4},
    {name: 'pant',  price : 1500, quantity: 3},   
]
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
    const product= products[i]
    const totalProduct = product.price * product.quantity;
    sum = sum + totalProduct; 
    // console.log(product)

    }
    return sum;
}
const expence = totalCost(shoppingcart)
console.log('total expence today', expence)