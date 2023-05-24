import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo1 from '../../assets/img/label1.png';
import { useState, useContext } from 'react';

import { Link} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import UserWidget from '../UserWidget/UserWidget';

import { category } from './NavBarItems';
import Dropdown from './Dropdown';


const NavBar = () => {
    
    const {user} = useContext(AuthContext);

    const [isActive, setIsActive] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    const handleDropdownMenuIn = (index) => {
        setDropdown(index);
    }

    const handleDropdownMenuOut = () => {
        setDropdown(null);
    }

    return (
        <nav className="navBar">
            <div className='testMargin'>

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

            </div>

            <div className="catList">
                <div className="menu-icon" onClick={handleMenuClick}>
                    <img className="icon" src='/img/burguer.svg'></img>
                </div>

                <ul className={`catUl ${isActive ? 'active' : ''}`}>

                    {
                    category.map((item,index) => {
                        return(
                            <li key={item.id} className={item.cName} onMouseEnter={() => handleDropdownMenuIn(index)} onMouseLeave={() => handleDropdownMenuOut()}>
                                <Link className='link' to={item.path}>{item.title}</Link>
                                {dropdown === index && item.subCat && <Dropdown info={item.subCat} />}
                            </li>
                        )
                        
                    })}
                
                </ul>
            </div>



            
        </nav>
    )
}


export default NavBar;

