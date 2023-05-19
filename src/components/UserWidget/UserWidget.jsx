import './UserWidget.css'
import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';





const UserWidget = () => {

    const {user, logOut} = useContext(AuthContext);

    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    return(

    <div className='containerUserWidget'>

        <img onClick={handleIsActive} src='/img/user-icon.svg' alt='user-icon'/>

        <div className={`containerInfo ${isActive ? 'active' : ''}`}>

        <p className='userName'>{user.username}</p>

        <ul>
            <Link to={'/user/datos'}><li>Datos</li></Link>
            <Link to={'/user/ultimas-compras'}><li>Ultimas Compras</li></Link>
            <li onClick={logOut}>Cerrar Sesion</li>
        </ul>

        </div>

    </div>
    

    )
}

export default UserWidget;