import { Component } from 'react';
import { Pokemon } from '/src/data/PokemonsData';
import styled from 'styled-components';

const Card = styled.div`
    padding: 5px 5px;
    margin: 0;

    background: #f5f5f5;
    border: 2px solid #60a78a;
    border-radius: 20px;
`;

const Content = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
        margin: 10px;
        max-height: 100px;
    }

    & h2 {
        margin: 0;
    }
`;

const Button = styled.button`
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    padding: 3px 20px;
    margin: 10px;
    border: 2px solid;
    border-radius: 4px;
`;

class PokeCard extends Component {
    constructor(props) {
        super(props);
        this.types = Object.keys(Pokemon);
        this.state = {
            pokeIndex: 0,
            pokeType: this.types[0],
            pokeData: null
        };
    }

    componentDidMount() {
        this.updatePokemonData();
    }

    updatePokemonData = () => {
        const { pokeType, pokeIndex } = this.state;
        const pokeList = Pokemon[pokeType];
        if (pokeList) {
            this.setState({ pokeData: pokeList[pokeIndex] });
        }
    };

    handlePrev = () => {
        this.setState((prevState) => {
            let nextIndex = prevState.pokeIndex - 1;
            let newType = prevState.pokeType;

            if (nextIndex < 0) {
                const prevTypeIndex =
                    (this.types.indexOf(prevState.pokeType) -
                        1 +
                        this.types.length) %
                    this.types.length;
                newType = this.types[prevTypeIndex];
                nextIndex = Pokemon[newType].length - 1;
            }

            return { pokeType: newType, pokeIndex: nextIndex };
        }, this.updatePokemonData);
    };

    handleNext = () => {
        this.setState((prevState) => {
            const pokeList = Pokemon[prevState.pokeType];
            let nextIndex = prevState.pokeIndex + 1;
            let newType = prevState.pokeType;

            if (nextIndex >= pokeList.length) {
                const nextTypeIndex =
                    (this.types.indexOf(prevState.pokeType) + 1) %
                    this.types.length;
                newType = this.types[nextTypeIndex];
                nextIndex = 0;
            }

            return { pokeType: newType, pokeIndex: nextIndex };
        }, this.updatePokemonData);
    };

    render() {
        const { pokeData } = this.state;

        return (
            <>
                {pokeData ? (
                    <Card>
                        <Content>
                            <img
                                src={pokeData.avatar}
                                alt={pokeData.pokemonName}
                            />
                            <h2>{pokeData.pokemonName}</h2>
                        </Content>
                        <Button
                            style={{
                                background: '#629c44',
                                borderColor: '#FFB42F'
                            }}
                            onClick={this.handlePrev}
                        >
                            Prev
                        </Button>
                        <Button
                            style={{
                                background: '#FFB42F',
                                borderColor: '#629c44'
                            }}
                            onClick={this.handleNext}
                        >
                            Next
                        </Button>
                    </Card>
                ) : (
                    <p>Loading...</p>
                )}
            </>
        );
    }
}

export default PokeCard;
