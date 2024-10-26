import './Veterinaria.css';
import Caninoinfo from './Caninoinfo.jsx';

const Caninos = [
    {
        id: 1,
        nombre: 'firulais',
        edad: 3,
        sexo: 'macho',
        raza: 'pastor aleman',
        tamaño: 'grande',
        image: 'https://t2.ea.ltmcdn.com/es/posts/3/2/9/curiosidades_del_pastor_aleman_23923_600_square.jpg'
    },
    {
        id: 2,
        nombre: 'maya',
        edad: 4,
        sexo: 'hembra',
        raza: 'pug',
        tamaño: 'chico',
        image: 'https://img.freepik.com/fotos-premium/perro-pug-sienta-suelo-frente-gabinete-madera_1011888-27218.jpg?semt=ais_hybrid'
    },
    {
        id: 3,
        nombre: 'pipo',
        edad: 5,
        sexo: 'macho',
        raza: 'pastor',
        tamaño: 'mediano',
        image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-08australian20shepherd20dog2028129_0.jpg?itok=8X9dpMuC'
    },
    {
        id: 4,
        nombre: 'pacha',
        edad: 4,
        sexo: 'hembra',
        raza: 'pastor',
        tamaño: 'chico',
        image: 'https://cdn.shopify.com/s/files/1/0012/9469/6494/files/Pastor_Belga_Groenendael_600x600.png?v=1698663434'
    },
    {
        id: 5,
        nombre: 'tara',
        edad: 8,
        sexo: 'hembra',
        raza: 'pitbull',
        tamaño: 'grande',
        image: 'https://t2.uc.ltmcdn.com/es/posts/9/8/4/como_es_el_temperamento_del_american_pitbull_terrier_51489_600_square.jpg'
    }
];

export default function Veterinaria() {
    return (
        <div>
            <h1>Clienes caninos de Veterinaria</h1>
            <div>
                <ul className="cards">
                    {Caninos.map((canino) => (
                        <li key={canino.id}>
                            <Caninoinfo canino={canino} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
