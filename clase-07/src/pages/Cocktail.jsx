import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Cocktail = () => {
    let { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const navigate = useNavigate();

    const getCocktail = async () => {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setCocktail(data.drinks[0]);
    };

    useEffect(() => {
        getCocktail();
    }, [id]);

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div>
            {cocktail ? (
                <>
                    <button onClick={handleClick}>Volver atrás</button>
                    <div className="card">
                        <h2>{cocktail.strDrink}</h2>
                        <img
                            src={cocktail.strDrinkThumb}
                            alt="cocktail-detail"
                        />
                        <p>{cocktail.strInstructions}</p>
                        <p>Ingredientes:</p>
                        <ul>
                            {[...Array(15)].map((_, index) => {
                                if (cocktail[`strIngredient${index + 1}`]) {
                                    return (
                                        <li key={index}>
                                            {
                                                cocktail[
                                                    `strIngredient${index + 1}`
                                                ]
                                            }
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default Cocktail;
