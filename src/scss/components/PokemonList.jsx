import { useEffect, useState } from "react";
const BASE_URL = "https://pokeapi.co/api/v2/";

export default function PokemonList() {
    const [pokemonList, setPokemonlist] = useState([]);

    useEffect(() => {
        const GetPokemonList = async () => {
			try {
				const response = await fetch `${BASE_URL}pokemon?limit=1024`
				const data = response.json();
				const results = data.results

				console.log(results);
			}
		}
    })
	return (
		<div className="pokedex-list">
			<ul></ul>
		</div>
	);
}
