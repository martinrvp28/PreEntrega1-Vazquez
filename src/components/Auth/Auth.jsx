import './Auth.css';
import { useContext, useEffect } from 'react';
import { auth } from '../Firebase/database';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const Auth = () => {
  const { setUser } = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const contextName = { username: email, loggedIn: true };
        setUser(contextName);
        localStorage.setItem('user', JSON.stringify(contextName));
        console.log('Inicio de sesión exitoso');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error al iniciar sesión:', errorMessage);
    });
};

return (
    <div className="containerLogin">
    <h2>Ingresar</h2>
    <form>
        <div className="containerInput">
            <input type="email" required id="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="email">Email</label>
        </div>
        <div className="containerInput">
            <input type="password" required id="password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
        </div>
        <Link to="/">
        <button onClick={login}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ENTRAR
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Auth;
