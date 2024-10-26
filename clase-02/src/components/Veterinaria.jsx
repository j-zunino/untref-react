import Caninoinfo from './Caninoinfo.jsx';

const Caninos = [
    {
        id: 1,
        nombre: 'Firulais',
        edad: 3 + ' Años Humanos',
        sexo: 'Macho',
        raza: 'pastor aleman',
        tamaño: 'grande'
    },
    {
        id: 2,
        nombre: 'Maya',
        edad: 4 + ' Años Humanos',
        sexo: 'Hembra',
        raza: 'pug',
        tamaño: 'chico'
    },
    {
        id: 3,
        nombre: 'Pipo',
        edad: 5 + ' Años Humanos',
        sexo: 'Macho',
        raza: 'pastor',
        tamaño: 'mediano'
    },
    {
        id: 4,
        nombre: 'pacha',
        edad: 4 + ' Años Humanos',
        sexo: 'Hembra',
        raza: 'pastor',
        tamaño: 'chico'
    },
    {
        id: 5,
        nombre: 'Tara',
        edad: 8 + ' Años Humanos',
        sexo: 'Hembra',
        raza: 'Pitbull',
        tamaño: 'grande'
    }
];

export default function Veterinaria() {
    return (
        <div>
            <h1>Clienes caninos de Veterinaria</h1>
            <ul>
                {Caninos.map((canino) => (
                    <li key={canino.id}>
                        <Caninoinfo canino={canino} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
