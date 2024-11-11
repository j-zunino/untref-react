import { useEffect, useState } from 'react';

export default function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setMaxPage(data.info.pages);
                setCharacters(data.results);
            })
            .catch((error) => console.log({ error }));
    }, [page]);

    const nextPage = () => {
        setPage(page + 1);
    };
    const prevPage = () => {
        setPage(page - 1);
    };

    return {
        characters,
        page,
        prevPage,
        nextPage,
        maxPage
    };
}
