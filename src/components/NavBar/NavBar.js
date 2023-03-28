import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo1 from '../../assets/img/label.png';


const NavBar = () => {
    return (
        <nav className="navBar">
            <img src={Logo1} alt="logo-super-barato"></img>

            <div className="catList">
                
                <ul>
                    <li><a href=''>DESTACADOS</a></li>
                    <li><a href=''>ALIMENTOS</a></li>
                    <li><a href=''>BEBIDAS</a></li>
                    <li><a href=''>LIMPIEZA</a></li>
                    <li><a href=''>ULTIMAS UNIDADES</a></li>

                </ul>

            </div>

            <CartWidget/>
        </nav>
    )
}


export default NavBar