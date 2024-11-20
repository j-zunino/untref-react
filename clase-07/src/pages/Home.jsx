import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
    const [cocktails, setCocktails] = useState([]);

    const getCocktails = async () => {
        const res = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
        );
        const data = await res.json();
        setCocktails(data.drinks);
    };

    useEffect(() => {
        getCocktails();
    }, []);

    return (
        <>
            <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
            <div className="grid">
                {cocktails.length
                    ? cocktails.map((cocktail) => (
                          <Card key={cocktail.idDrink} data={cocktail} />
                      ))
                    : null}
            </div>
        </>
    );
};

export default Home;
