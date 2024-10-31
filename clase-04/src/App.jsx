import styled from 'styled-components';
import PokemonCard from './components/Card/PokemonCard';
import { Pokemon } from './components/data/PokemonData';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: max-content;
    max.height: max-content;

    gap: 15px;
`;

const Title = styled.h1`
    font-family: 'Poppins';
    font-size: 35px;
    text-transform: capitalize;
    text-align: center;
`;

const App = () => {
    const pokemonType = Object.keys(Pokemon);

    return (
        <div>
            <Title>Lista de pokemons</Title>
            <Container>
                {pokemonType.map((type, index) => {
                    return (
                        <PokemonCard
                            key={index}
                            data={Pokemon[type]}
                            type={type}
                        />
                    );
                })}
            </Container>
        </div>
    );
};

export default App;
