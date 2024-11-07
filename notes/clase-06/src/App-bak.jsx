import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setMaxPage(data.info.pages);
                setCharacters(data.results);
            });
        // .catch(error => console.log({ Error }))
    }, [page]);

    const nextPage = () => {
        setPage(page + 1);
    };
    const prevPage = () => {
        setPage(page - 1);
    };

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

export default App;
