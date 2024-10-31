import { useState } from 'react';
import styled from 'styled-components';
import PowerList from '../PowerList/PowerList';

const Card = styled.div`
    background: ${({ isHovered }) => (isHovered ? '#ebe9eb1c' : '#ebebeb')};
    padding: 20px;
    margin: 0;
    border: 2px solid #d7d7d782;
    border-radius: 12px;
    font-family: 'Poppins';
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 10px #0000001c;
    max-width: 300px;
    min-height: 400px;
    transform: ${({ isHovered }) => (isHovered ? 'scale(1.03)' : 'scale(1)')};
    transition:
        background-color 0.3s ease,
        transform 0.3s ease;

    & img {
        max-width: auto;
        max-height: 200px;
    }

    & h2 {
        font-size: 25px;
        text-align: center;
    }
`;

export default function PokemonCard({ data, type }) {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            {data.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    isHovered={hoveredId === pokemon.id}
                    onClick={() =>
                        alert(`Has seleccionado a ${pokemon.pokemonName}`)
                    }
                    onMouseEnter={() => setHoveredId(pokemon.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <img src={pokemon.avatar} alt={pokemon.pokemonName} />
                    <h2>{pokemon.pokemonName}</h2>
                    {pokemon.power && <PowerList list={pokemon.power} />}
                </Card>
            ))}
        </>
    );
}
