// Import Hooks 
import { useState, useEffect } from 'react'

// Import axios
import axios from 'axios';

// Import Components
import TrainerImage from './components/TrainerImage';
import Nav from './components/Nav';

// Import CSS stylesheets
import './App.css'
import './index.css'

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the Pokémon API endpoint
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

        // Extract the data from the response
        const { results } = response.data;

        setPokemonData(results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchData();
  }, []);

  let loggedIn = false

  let trainer = {
    name: "Trainer",
    gender : "Male"
  }

  return (
    <div className='container'>
        <Nav name={trainer.name} />
        <TrainerImage gender={trainer.gender} />
    </div>
  )
};
