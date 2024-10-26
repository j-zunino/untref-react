import './Caninoinfo.css';

const Caninoinfo = ({ canino }) => {
    return (
        <div className="card">
            <img src={canino.image} />
            <div>
                <h2>{canino.nombre}</h2>
                <p>Edad: {canino.edad} Años humanos</p>
                <p>Sexo: {canino.sexo}</p>
                <p>Raza: {canino.raza}</p>
                <p>Tamaño: {canino.tamaño}</p>
            </div>
        </div>
    );
};

export default Caninoinfo;
