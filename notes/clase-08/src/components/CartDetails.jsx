import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartDetails() {
    const { cart } = useContext(CartContext);
    return (
        <div>
            <h3>Cart</h3>
            {cart.length === 0 ? (
                <p>El carrito esta vació</p>
            ) : (
                <ul>
                    {cart.map((prod) => (
                        <li key={prod.id}>
                            {prod.name} - ${prod.price}
                            <button>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
