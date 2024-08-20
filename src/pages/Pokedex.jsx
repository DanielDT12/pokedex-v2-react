import { Link } from "react-router-dom";

export default function Test() {
	return (
		<>
			<main className="pokedex">
				<div className="pokedex__nav-wrapper">
					<nav className="pokedex__nav">
						<Link to={"/"} className="pokedex__link">
							&larr; {/** HTML ENTITY CODE FOR LEFT ARROW */}
						</Link>
					</nav>
					<h1>Pokédex</h1>
				</div>
			</main>
		</>
	);
}
