import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo1 from '../../assets/img/label1.png';

import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navBar">

            <div className='containerLogo-cart'>
                <Link to={'/'}>
                    <img src={Logo1} alt="logo-super-barato"></img>
                </Link>

                <div className="cart">
                    <CartWidget/>
                </div>
                
            </div>
           

            <div className="catList">
                
                <ul>

                    <li> <NavLink to={'/category/alimentos'} href='#'>ALIMENTOS</NavLink> </li>
                    <li> <NavLink to={'/category/bebidas'} href='#'>BEBIDAS</NavLink> </li>
                    <li> <NavLink to={'/category/limpieza'} href='#'>LIMPIEZA</NavLink> </li>
                    <li> <NavLink to={'category/ofertas'} href='#'>OFERTAS</NavLink> </li>
                    <li> <NavLink to={'/ultimas-unidades'} href='#'>ULTIMAS UNIDADES</NavLink> </li>

                </ul>

            </div>

            
        </nav>
    )
}


export default NavBar;