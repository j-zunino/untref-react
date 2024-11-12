import useGet from '../hooks/useGet';

const Comments = () => {
    const { comments } = useGet();

    return (
        <div>
            <h2>Comentarios</h2>
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <li key={comment.id}>
                            <h3>{comment.email}</h3>
                            <p>
                                <strong>{comment.name}</strong>
                            </p>
                            <p>{comment.body}</p>
                        </li>
                    ))
                ) : (
                    <p>Cargando comentarios...</p>
                )}
            </ul>
        </div>
    );
};

export default Comments;
