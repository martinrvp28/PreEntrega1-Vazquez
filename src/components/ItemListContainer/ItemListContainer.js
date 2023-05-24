import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../Firebase/database"

import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    const [selectedFilters, setSelectedFilters] = useState({ brand: [] });
    const [brandCounts, setBrandCounts] = useState({});

    const {categoryId} = useParams();
    const {subCatId} = useParams();

    useEffect (() => {

        const cat = subCatId 
            ? subCatId
            : categoryId;

        const collectionRef = cat
            ? query(collection(db, 'products'), where('category', "array-contains", cat))
            : collection(db, "products")

            const fetchData = async () => {
                try {
                    const response = await getDocs(collectionRef);
                    const productsAdapted = response.docs.map((doc) => {
                        const data = doc.data();
                        return { id: doc.id, ...data };
                    });
                    setProducts(productsAdapted);
                
                    const uniqueBrands = Array.from(
                        new Set(productsAdapted.map((product) => product.marca))
                    );
                    uniqueBrands.sort();
                    setBrands(uniqueBrands);
                    } catch (error) {
                    console.log(error);
                    }
            };
            
            fetchData();
            
            }, [categoryId,subCatId]);

            useEffect(() => {

                const countBrands = () => {
                const counts = {};
                products.forEach((product) => {
                    const brand = product.marca;
                    counts[brand] = (counts[brand] || 0) + 1;
                });
                setBrandCounts(counts);
                };
            
                countBrands();
            }, [products]);
            

        const filteredProducts = selectedFilters.brand.length > 0
            ? products.filter((product) => selectedFilters.brand.includes(product.marca))
            : products;


    return(

        <main className="containerMain">

        <aside className="asideContainer">

            <h2>Resultados filtrados por:</h2>

            <div className="containerFilter">
                <h3 className="labelItem">Marcas</h3>

                {brands.map((brand) => (
                    <label key={brand}>
                    <input
                        type="checkbox"
                        value={brand}
                        onChange={(event) => {
                        const checked = event.target.checked;
                        setSelectedFilters((prevState) => ({
                            ...prevState,
                            brand: checked
                            ? [...prevState.brand, brand]
                            : prevState.brand.filter((b) => b !== brand),
                        }));
                        }}
                    />
                    <span className="brandItem">{brand}</span>
                    <span className="counterProd">{brandCounts[brand] || 0}</span>
                    </label>
            ))}
            </div>

        </aside>

        <div className="mainList">
            <ItemList products={filteredProducts}/>
        </div>

        </main>
    )
}


export default ItemListContainer;