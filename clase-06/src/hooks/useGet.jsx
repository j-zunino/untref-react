import { useEffect, useState } from 'react';

export default function useGet() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => setComments(data))
            .catch((error) => console.log({ error }));
    }, []);

    return {
        comments
    };
}
