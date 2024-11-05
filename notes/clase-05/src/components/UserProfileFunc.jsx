import React, { useEffect, useState } from 'react';

export default function UserProfileFunc() {
    const [user, setUser] = useState(null);
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Diplo FrontEnd @ UNTreF');

    useEffect(() => {
        setTimeout(() => {
            setUser({ name: 'Nombre', age: 20 });
        }, 3000);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
            document.title = `${title} ~ ${count + 1}`;
        }, 2000);

        console.log('useEffect: load');

        return () => {
            console.log('useEffect: clear');
            clearInterval(interval);
        };
    }, [title, count]);

    return (
        <>
            {user ? (
                <h1>
                    Perfil de usuario {user.name}, {user.age} años
                </h1>
            ) : (
                <h1>Loading...</h1>
            )}
            <button onClick={() => setTitle('Nombre')}>Cambiar title</button>
        </>
    );
}
