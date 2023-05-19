import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo1 from '../../assets/img/label1.png';
import { useState, useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import UserWidget from '../UserWidget/UserWidget';


const NavBar = () => {
    
    const {user} = useContext(AuthContext);

    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };


    return (
        <nav className="navBar">

            <div className='containerLogo-cart'>
                <Link to={'/'}>
                    <img className='logo' src={Logo1} alt="logo-super-barato"></img>
                </Link>

                <div className="cart">
                {user.loggedIn===false && <Link to={'/Auth'}><button>INGRESAR</button></Link>}
                {user.loggedIn===true && <UserWidget/> }
                    <CartWidget/>
                </div>
                
            </div>

            <div className="catList">
                <div className="menu-icon" onClick={handleMenuClick}>
                    <img className="icon" src='/img/burguer.svg'></img>
                </div>

                <ul className={`menu ${isActive ? 'active' : ''}`}>

                    <li onClick={handleMenuClick}> <NavLink to={'/category/alimentos'} href='#'>ALIMENTOS</NavLink> </li>
                    <li onClick={handleMenuClick}> <NavLink to={'/category/bebidas'} href='#'>BEBIDAS</NavLink> </li>
                    <li onClick={handleMenuClick}> <NavLink to={'/category/limpieza'} href='#'>LIMPIEZA</NavLink> </li>
                    <li onClick={handleMenuClick}> <NavLink to={'category/ofertas'} href='#'>OFERTAS</NavLink> </li>
                    <li onClick={handleMenuClick}> <NavLink to={'/ultimas-unidades'} href='#'>ULTIMAS UNIDADES</NavLink> </li>
                
                </ul>
            </div>



            
        </nav>
    )
}


export default NavBar;

