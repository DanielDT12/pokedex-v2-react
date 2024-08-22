import { useEffect, useState } from "react";
import { BASE_URL } from "./PokemonList";
import { useParams } from "react-router-dom";
import PrimaryNav from "../general/PrimaryNav";
import PokemonInfoTabNav from "./PokemonInfoTabNav";

export default function Pokemon() {
	const { pokemonName } = useParams();
	const [pokemonCard, setPokemonCard] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("about");

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
			} finally {
				setLoading(false);
			}
		};

		if (pokemonName) {
			GetPokemonCard(pokemonName.toLowerCase());
		}
	}, [pokemonName]);

	if (error !== null) {
		return <div>Error Fetching Data</div>; // PLACEHOLDER
	}

	if (loading) {
		return <div>Loading...</div>; // PLACEHOLDER
	}

	return (
		<>
			<div className="pokemon-card">
				<div className="pokemon-card__top-half">
					<PrimaryNav
						navClass={"pokemon-card__nav"}
						linkTo={"/pokemon"}
						linkClass={"pokemon-card__link"}
					/>
					<div className="flex-between">
						<h2 className="pokemon-card__name">{pokemonCard.name}</h2>
						<p>#{pokemonCard.id}</p>
					</div>
					<div className="pokemon-card__types flex-between">
						<p className="pokemon-card__type">
							{pokemonCard.types[0].type.name}
						</p>
						{pokemonCard.types[1] && (
							<p className="pokemon-card__type">
								{pokemonCard.types[1].type.name}
							</p>
						)}
					</div>
				</div>
				<img
					className="pokemon-card__image"
					src={pokemonCard.sprites.other["official-artwork"].front_default}
					alt={pokemonCard.name}
				/>
				<div className="pokemon-card__lower-half">
					<PokemonInfoTabNav
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						pokemonCard={pokemonCard}
					/>
				</div>
			</div>
		</>
	);
}
