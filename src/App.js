import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
       <NavBar/>

       <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 PAGE NOT FOUND.</h1>}/> 

       </Routes>

     
     </BrowserRouter>


    </div>
    
  );
}

export default App;
