const Caninoinfo = (canino) => {
    return (
        <div>
            <h2>Nombre: {canino.nombre}</h2>
            <p>Edad: {canino.edad}</p>
            <p>Sexo: {canino.sexo}</p>
            <p>Raza: {canino.raza}</p>
            <p>Tamaño: {canino.tamaño}</p>
        </div>
    );
};

export default Caninoinfo;
