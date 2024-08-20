import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BASE_URL = "https://pokeapi.co/api/v2/";

export default function PokemonList() {
	const [pokemonList, setPokemonlist] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const GetPokemonList = async () => {
			try {
				const response = await fetch(`${BASE_URL}pokemon?limit=10`);
				const data = await response.json();
				const results = data.results;

				const finalPokemonObj = await Promise.all(
					// MAPPER OVER ALLE URL OG LAGER EGET OBJECT I RETURN
					results.map(async (pokemon) => {
						const finalResponse = await fetch(pokemon.url);
						const details = await finalResponse.json();

						return {
							id: details.id,
							name: details.name,
							sprite: details.sprites.other["official-artwork"].front_default,
							types: details.types.map((type) => type.type.name),
						};
					})
				);

				setPokemonlist(finalPokemonObj);
				setLoading(false);
			} catch (error) {
				console.error("Fetch failed or something went wrong", error);
				setLoading(false);
			}
		};

		GetPokemonList();
	}, []);

	if (loading) {
		return <div>Loading....</div>;
	}
	return (
		<ul className="pokedex__list" role="list">
			{pokemonList.map((pokemon, index) => (
				<li key={index}>
					<Link to={`/pokedex/${pokemon.name}`}>
						<div>
							<h2>{pokemon.name}</h2>
							<p>#{pokemon.id}</p>
						</div>
						<div>
							<div>
								<p>{pokemon.types[0]}</p>
								<p>{pokemon.types[1]}</p>
								{/** TRENGER FIX, ER IKKE ALLE SOM HAR 2 TYPER */}
							</div>
							<img src={pokemon.sprite} alt={pokemon.name} />
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
