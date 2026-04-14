import React, { useState } from 'react';

type Joke = {
    value: string;
};

const ButtonJoke: React.FC = () => {
    const [joke, setJoke] = useState<string>('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data: Joke = await response.json();
            setJoke(data.value);
        } catch (error) {
            console.error('Erro ao buscar piada:', error);
            setJoke('Erro ao carregar piada.');
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetchJoke();
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Buscar Piada</button>
            {joke && <p>{joke}</p>}
        </div>
    );
};

export default ButtonJoke;