import { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    const addToCart = (producto) => {
        if (!user) {
            return alert(
                'Debe iniciar sesión para poder agregar productos al carrito'
            );
        }

        if (user) setCart([...cart, producto]);
    };

    const clearCart = () => setCart([]);

    const totalPrice = cart.reduce(
        (suma, producto) => suma + producto.price,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, addToCart, clearCart, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};
