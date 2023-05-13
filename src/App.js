import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import LastUnitsContainer from './components/LastUnits/LastUnitsContainer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <CartProvider>

        <NavBar/>

        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/ultimas-unidades' element={<LastUnitsContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='cart/checkout' element={<Checkout/>}/> 
            <Route path='*' element={<h1>404 PAGE NOT FOUND.</h1>}/> 
        </Routes>

      </CartProvider>
      </BrowserRouter>


    </div>
    
  );
}

export default App;
