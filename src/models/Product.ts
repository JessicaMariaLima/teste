type Product = {
    title: string,
    price: number
}


const data = [
    {title: 'Produto X', preco: 200},
    {title: 'Produto G', preco: 54},
    {title: 'Produto R', preco: 50},
]

export const Product = {
    getAll:() => {
        return data 
    }
}