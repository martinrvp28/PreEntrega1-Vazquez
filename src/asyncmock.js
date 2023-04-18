
const products = [
    {
        id:1,
        name:'Cerveza Patricia 1L',
        price: 135,
        category: 'bebidas',
        img: 'img/products/patricia-litro.svg',
        stock: 99,
        description: "not now"
    },
    {id:2, name: 'Lata Norteña 473ml', price:84, category:'bebidas', img: 'img/products/lata-nortenia.svg', stock:99, description: 'not now'},
    {id:3, name: 'Lata Brahma 473ml', price:60, category:'bebidas', img: 'img/products/lata-brahma.svg', stock:99, description: 'not now'},
    {id:4, name: 'Pepsi 2L', price:129, category:'bebidas', img: 'img/products/pepsi2l.svg', stock:99, description: 'not now'},
    {id:5, name: 'Bidon Salus 6.25L', price:115, category:'bebidas', img: 'img/products/salus625L.svg', stock:99, description: 'not now'},
    {id:6, name: 'Azucar Bella Union 1Kg', price:115, category:'alimentos', img:'img/products/azucar-bella-union.svg', stock:99, description: 'not now'},
    {id:7, name: 'Cafe Bracafe 170gr', price:170, category:'alimentos', img:'img/products/bracafe-170.svg', stock:99, description:'not now'},
    {id:8, name: 'Cápsulas House Blend STARBUCKS', price:573, category:'alimentos', img:'img/products/starbuck-coffe.svg', stock:99, description:'not now'},
    {id:9, name: 'Jane 1L', price:88, category:'limpieza', img:'img/products/jane-1l.svg', stock: 99, description:'not now'},
    {id:10, name: 'Jabon Bulddog Barra', price:81, category:'limpieza', img:'img/products/jabon-bulldog.svg', stock: 99, description:'not now'},
    {id:11, name: 'Esponja Jaspe', price:61, category:'limpieza', img:'img/products/esponja-jaspe.svg', stock: 99, description:'not now'}

]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCat) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCat ))
        })
    })
}







