import { useState } from 'react';
import usePost from '../hooks/usePost';

const Form = () => {
    const { formData, setFormData } = usePost();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Comentario añadido con éxito!');
                console.log('Nuevo comentario:', data);
                setFormData({ postId: 0, name: '', email: '', body: '' });
            })
            .catch((error) => console.error('Error adding comment:', error))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <>
            <h2>Agregar un nuevo comentario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.name}
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="email"
                    value={formData.email}
                    name="email"
                    placeholder="email@domain.com"
                    onChange={handleChange}
                    required
                />
                <br />
                <textarea
                    value={formData.body}
                    name="body"
                    placeholder="Mensaje"
                    onChange={handleChange}
                    required
                ></textarea>
                <br />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar comentario'}
                </button>
            </form>
        </>
    );
};

export default Form;
