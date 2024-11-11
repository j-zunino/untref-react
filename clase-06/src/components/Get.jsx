import useGet from '../hooks/useGet';

const Get = () => {
    const { comments } = useGet();

    console.log(comments[0]);

    return (
        <div>
            <ul>
                {comments.map((object) => (
                    <li key={object.id}>{object.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Get;
