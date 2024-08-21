import { useEffect, useState } from "react";
import { BASE_URL } from "../components/pokedex/PokemonList";
import { useParams } from "react-router-dom";

export default function Pokemon() {
	const { pokemonName } = useParams();
	const [pokemonCard, setPokemonCard] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const GetPokemonCard = async (pokemon) => {
			try {
				const response = await fetch(`${BASE_URL}/pokemon/${pokemon}`);

				if (!response.ok) {
					throw new Error(`Pokemon ${pokemon} not found`);
				}

				const data = await response.json();

				setPokemonCard(data);
				setError(null);
			} catch (error) {
				setError(error.message);
				console.error("Fetch failed or something went wrong", error);
			}
		};

		if (pokemonName) {
			GetPokemonCard(pokemonName.toLowerCase());
		}
	}, [pokemonName]);

	if (error !== null) {
		return <div>Error Fetching Data</div>; // PLACEHOLDER
	}

	return (
		<>
			<div>
				<h1>{pokemonCard.name}</h1>
			</div>
		</>
	);
}
