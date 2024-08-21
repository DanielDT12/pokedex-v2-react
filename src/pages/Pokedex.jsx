import PokemonList from "../components/pokedex/PokemonList";
import PrimaryNav from "../components/general/PrimaryNav";

export default function Test() {
	return (
		<>
			<main className="pokedex">
				<div className="pokedex__nav-wrapper">
					<PrimaryNav
						navClass={"pokedex__nav"}
						linkTo={"/"}
						linkClass={"pokedex__link"}
					/>
					<h1>Pokédex</h1>
				</div>
				<PokemonList />
			</main>
		</>
	);
}
