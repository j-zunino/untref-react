import { useEffect, useState } from 'react';

export default function useGet() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => {
                setComments(data.slice(0, 5));
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    return {
        comments,
        loading,
        error
    };
}
