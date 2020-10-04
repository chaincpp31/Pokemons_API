import React, { useState, useEffect } from "react";
import "./styles.css";

const API_PO_KE =
  "https://pokeapi.co/api/v2/pokemon?fbclid=IwAR0B-qsNtOrApiurXXHa3iOv5O1HUyQ9zCyFFkDvR7QJOr642B7muZAeyf4";

function Pokedex() {
  // const pokemon = await fetch(`$(API_PO_KE)`)
  const [pokesData, setPokesData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const FetchData = async () => {
    setLoading(true);
    try {
      fetch(API_PO_KE)
        .then((show_data) => show_data.json())
        .then((data) => setPokesData(data.results))
        .finally(setLoading(false));
    } catch {
      setError("Error!! can not pull API");
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <React.Fragment>
      <h1>Pokedex</h1>
      <h3>{error}</h3>
      {!Loading && pokesData && (
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
