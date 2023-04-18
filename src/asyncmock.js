
const products = [
    {
        id:1,
        name:'Cerveza Patricia 1L',
        price: 135,
        category: 'bebidas',
        img: '/img/products/patricia-litro.svg',
        stock: 99,
        description: "Cerveza PATRICIA 960 ml. Los envases retornables se cobran al momento de la compra online, pero la devolución es exclusiva en los locales físicos."
    },
    {id:2, name: 'Lata Norteña 473ml', price:84, category:'bebidas', img: '/img/products/lata-nortenia.svg', stock:99, description: 'Cerveza NORTEÑA 473 ml. Los envases retornables se cobran al momento de la compra online, pero la devolución es exclusiva en los locales físicos.'},
    {id:3, name: 'Lata Brahma 473ml', price:60, category:'bebidas', img: '/img/products/lata-brahma.svg', stock:99, description: 'Cerveza Brahma Lata 473 Ml'},
    {id:4, name: 'Pepsi 2L', price:129, category:'bebidas', img: '/img/products/pepsi2l.svg', stock:99, description: 'Refresco Pepsi 2,5 L'},
    {id:5, name: 'Bidon Salus 6.25L', price:115, category:'bebidas', img: '/img/products/salus625L.svg', stock:99, description: 'Agua Salus bidón 6,25 L'},
    {id:6, name: 'Azucar Bella Union 1Kg', price:115, category:'alimentos', img:'/img/products/azucar-bella-union.svg', stock:99, description: 'Azúcar blanca BELLA UNIÓN 1 kg'},
    {id:7, name: 'Cafe Bracafe 170gr', price:170, category:'alimentos', img:'/img/products/bracafe-170.svg', stock:99, description:'Café BRACAFÉ 170 g'},
    {id:8, name: 'Cápsulas House Blend STARBUCKS', price:573, category:'alimentos', img:'/img/products/starbuck-coffe.svg', stock:99, description:'Capsulas STARBUCKS 16 Unidades.'},
    {id:9, name: 'Jane 1L', price:88, category:'limpieza', img:'/img/products/jane-1l.svg', stock: 99, description:'Hipoclorito Jane 1L'},
    {id:10, name: 'Jabon Bulddog Barra', price:81, category:'limpieza', img:'/img/products/jabon-bulldog.svg', stock: 99, description:'Jabon neutro Bulldog en barra.'},
    {id:11, name: 'Esponja Jaspe', price:61, category:'limpieza', img:'/img/products/esponja-jaspe.svg', stock: 99, description:'Esponja de cocina Jaspe'}

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







