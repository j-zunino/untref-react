import { useEffect, useState } from 'react';

export function Pedido() {
    const [pedidos, setPedidos] = useState(null);

    const cancelarPedido = () => {
        alert('El pedido fue cancelado');

        setPedidos(null);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setPedidos({ pedido: 'Pizzas' });
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (pedidos) console.log('Componente actualizado');

        return () => {
            console.log('Componente desmontado');
        };
    }, [pedidos]);

    return (
        <>
            <h1>Su pedido</h1>
            {pedidos ? <p>- {pedidos.pedido}</p> : <p></p>}
            <button onClick={cancelarPedido}>Cancelar pedido</button>
        </>
    );
}
