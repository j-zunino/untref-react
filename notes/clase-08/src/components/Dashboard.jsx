import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AdminPanel from './AdminPanel';
import CartDetails from './CartDetails';
import ProductList from './ProductList';

export default function Dashboard() {
    const { user, login, logout } = useContext(AuthContext);

    const handleLogin = () => login('Papu', 'admin');

    return (
        <div>
            {!user ? (
                <>
                    <h2>Bienvenido, invitado</h2>
                    <button onClick={handleLogin}>Iniciar sesión</button>
                </>
            ) : (
                <>
                    <h2>Bienvenido, {user.username}</h2>
                    <p>Rol: {user.role}</p>
                    <button onClick={logout}>Cerrar sesión</button>
                    {user.role === 'admin' && <AdminPanel />}
                    <ProductList />
                    <CartDetails />
                </>
            )}
        </div>
    );
}
