import './index.css';
import Header from './components/Header';
import SectionInicio from './components/SectionInicio';
import SectionSobreMi from './components/SectionSobreMi';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <SectionInicio />
                <SectionSobreMi />
                <Contacto />
                <Footer />
            </main>
        </>
    );
}

export default App;
