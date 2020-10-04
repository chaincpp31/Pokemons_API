import React, { useState, useEffect } from "react";
import "./styles.css";

const API_PO_KE =
  "https://pokeapi.co/api/v2/pokemon?fbclid=IwAR0B-qsNtOrApiurXXHa3iOv5O1HUyQ9zCyFFkDvR7QJOr642B7muZAeyf4";

function Pokedex() {
  // const pokemon = await fetch(`$(API_PO_KE)`)
  const [pokesData, setPokesData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log(useEffect);
  //   setLoading(true);
  //   fetch(API_PO_KE)
  //     .then((show_data) => show_data.json())
  // .then((data) => setPokesData(data.results))
  // .finally(setLoading(false));
  // }, []);
  // console.log(API_PO_KE);

  useEffect(() => {
    setLoading(true);
    fetch(API_PO_KE)
      .then((show_data) => show_data.json())
      .then((data) => setPokesData(data.results))
      .finally(setLoading(false));
  }, []);

  return (
    <React.Fragment>
      <h1>Pokedex</h1>
      {!isLoading && (
        <ul>
          {pokesData.map((pokemon) => (
            <li>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

export default Pokedex;
