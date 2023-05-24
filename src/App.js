import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext';
import { AuthProvider } from './components/Context/AuthContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import LastUnitsContainer from './components/LastUnits/LastUnitsContainer';
import Banner from './components/Banner/Banner';
import Auth from './components/Auth/Auth';
import Data from './components/UserWidget/Data';
import LastBuysList from './components/UserWidget/LastBuysList';
import Home from './components/Home/Home';

const DefaultLayout = () => (
  <div className="App">

    <NavBar />
    <Banner />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/category/:categoryId/:subCatId" element={<ItemListContainer />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/ultimas-unidades" element={<LastUnitsContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<Checkout />} />
      <Route path="*" element={<h1>404 PAGE NOT FOUND.</h1>} />
    </Routes>
    
  </div>
);

const AuthLayout = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/*" element={<h1>404 PAGE NOT FOUND</h1>}/>
    </Routes>
  </div>
);

const InfoLayout = () => {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/datos" element={<Data />} />
        <Route path="/ultimas-compras" element={<LastBuysList />} />
        <Route path="/*" element={<h1>404 PAGE NOT FOUND</h1>}/>

      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider> 
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/Auth/*" element={<AuthLayout />} />
          <Route path="/*" element={<DefaultLayout />} />
          <Route path="/user/*" element={<InfoLayout />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;