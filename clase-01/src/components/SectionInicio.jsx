import pepegrillo from '../assets/pepegrillo.webp';

export default function SectionInicio() {
    return (
        <section id="inicio" className="section">
            <h2>Inicio</h2>
            <p>
                Esta es una página de ejemplo con más etiquetas de HTML y CSS
                para practicar la conversión a React.
            </p>
            <img src={pepegrillo} width="200px" alt="Ejemplo de imagen" />
        </section>
    );
}
