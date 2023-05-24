import { useState } from "react";
import { Link } from "react-router-dom";
import './Dropdown.css'


const Dropdown = ({info}) => {


    return(
        <>
            <ul className="submenu">
                {info.map((item) =>{
                    return (
                        <Link to={item.path} className='submenuItem'>
                        <li key={item.id}>
                                {item.title}
                        </li>
                        </Link>
                    );
                })}
            </ul>
        </>
    )
}


export default Dropdown;