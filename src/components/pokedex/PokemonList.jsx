import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const BASE_URL = "https://pokeapi.co/api/v2/";

export default function PokemonList() {
	const [pokemonList, setPokemonlist] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const GetPokemonList = async () => {
			try {
				const response = await fetch(`${BASE_URL}pokemon?limit=100`);
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
		return <div>Loading....</div>; // placeholder, skal lage custom loading component
	}
	return (
		<div className="pokemon">
			<ol className="pokemon__list" role="list">
				{pokemonList.map((pokemon, index) => (
					<li
						className={`pokemon__list-item ${pokemon.types[0]}-type`} // dynamic class name for background color
						key={index}
					>
						<Link className="pokemon__link" to={`/pokedex/${pokemon.name}`}>
							<div className="flex-between">
								<h2 className="pokemon__name">{pokemon.name}</h2>
								<p>#{pokemon.id}</p>
							</div>
							<div className="pokemon__type-img-container">
								<div className="flex-col" style={{ gap: ".5rem" }}>
									<p className="pokemon__type">{pokemon.types[0]}</p>
									{pokemon.types[1] && (
										<p className="pokemon__type">{pokemon.types[1]}</p>
									)}
								</div>
								<img
									className="pokemon__image"
									src={pokemon.sprite}
									alt={pokemon.name}
								/>
							</div>
						</Link>
					</li>
				))}
			</ol>
		</div>
	);
}
