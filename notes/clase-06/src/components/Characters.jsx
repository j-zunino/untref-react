import useCharacters from '../hooks/useCharacters';

function Characters() {
    const { characters, page, prevPage, nextPage, maxPage } = useCharacters();

    return (
        <>
            <h1>Rick and Morty</h1>
            <button onClick={prevPage} disabled={page === 1}>
                Prev
            </button>
            <button onClick={nextPage} disabled={page >= maxPage}>
                Next
            </button>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Characters;
