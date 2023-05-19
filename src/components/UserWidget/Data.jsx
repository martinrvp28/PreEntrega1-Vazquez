import './Data.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase/database';

const Data = () => {

    const {user, newPhone, newAdress, newName, setNewName, setNewPhone, setNewAdress, isLoading, setIsChanging} = useContext(AuthContext)

    const [isActiveModInfo, setIsActiveModInfo] = useState(false);   

    const ChangeInfo = () => {
        const userDocRef = doc(db, "users", user.username);
        const newValues = {
            name: newName,
            phone: newPhone,
            adress: newAdress
        };
        updateDoc(userDocRef, newValues)
            .then(() => {
                console.log('Información actualizada con éxito');
                handleIsActiveModInfo();
                setIsChanging(prevState => !prevState);
                
        })
            .catch((error) => {
                console.log('Error al actualizar la información', error);
        });
    };

    const handleIsActiveModInfo = () => {
        setIsActiveModInfo(prevState => !prevState);
    };

    const handleChangeName = (e) => {

        setNewName(e.target.value)

    }

    const handleChangePhone = (e) => {

        setNewPhone(e.target.value)

    }

    const handleChangeAdress = (e) => {

        setNewAdress(e.target.value)

    }

    if (isLoading) {

        return(<h1>PANTALLAZO DE CARGA MOMENTANTEA</h1>)

    } else {

        return (
            <div className="containerData">
                
                <h2>Informacion Personal</h2>
    
                <table>
                    <tr>
                        <th>Nombre:</th>
                        {isActiveModInfo ? (
                        <td>
                            <input
                            type="text"
                            value={newName}
                            onChange={handleChangeName}
                            />
                        </td>
                        ) : (
                        <th>{newName}</th>
                        )}
                    </tr>
    
                    <tr>
                    <th>Telefono:</th>
                        {isActiveModInfo ? (
                        <td>
                            <input
                            type="text"
                            value={newPhone}
                            onChange={handleChangePhone}
                            />
                        </td>
                        ) : (
                        <th>{newPhone}</th>
                        )}
                    </tr>
    
                    <tr>
                        <th>Email:</th>
                        <th>{user.username}</th>
                    </tr>
    
                    <tr>
                    <th>Direccion:</th>
                        {isActiveModInfo ? (
                        <td>
                            <input
                            type="text"
                            value={newAdress}
                            onChange={handleChangeAdress}
                            />
                        </td>
                        ) : (
                        <th>{newAdress}</th>
                        )}
                    </tr>
                    
                </table>
    
                <div className='containerButtons'>
    
                    <button onClick={handleIsActiveModInfo} className={`buttonMod ${isActiveModInfo ? 'active' : ''}`} >Modificar Informacion</button>
    
                    <button onClick={ChangeInfo} className={`buttonSave ${isActiveModInfo ? 'active' : ''}`}>Guardar Informacion</button>

                    <button onClick={handleIsActiveModInfo} className={`buttonSave ${isActiveModInfo ? 'active' : ''}`}>Cancelar</button>
    
                </div>
            </div>
        )

    }
        
    }

export default Data;