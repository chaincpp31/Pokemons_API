import React, { useState, useEffect } from "react";
import "./styles.css";

const API_PO_KE =
  "https://pokeapi.co/api/v2/pokemon?fbclid=IwAR0B-qsNtOrApiurXXHa3iOv5O1HUyQ9zCyFFkDvR7QJOr642B7muZAeyf4";

function Pokedex() {
  // const pokemon = await fetch(`$(API_PO_KE)`)
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    console.log(useEffect);
    fetch(API_PO_KE)
      .then((show_poke) => show_poke.json())
      .then((api_poke) => setPokes(api_poke.results));
  }, []);
  console.log(API_PO_KE);

  return (
    <React.Fragment>
      <h1>Pokedex</h1>
      {
        <ul>
          {pokes.map((pokemon) => (
            <li>{pokemon.name}</li>
          ))}
        </ul>
      }
    </React.Fragment>
  );
}

export default Pokedex;