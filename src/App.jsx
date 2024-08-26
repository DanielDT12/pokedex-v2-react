import { SiPokemon } from "react-icons/si";
import { Link } from "react-router-dom";

export default function App() {
	return (
		<main className="homepage">
			<div className="homepage__wrapper">
				<SiPokemon className="homepage__pkmn-logo" />
				<nav>
					<ul className="homepage__links-list" role="list">
						<li>
							<Link to={"/pokedex"}>Pokedex</Link>
						</li>
						<li>
							<Link>Items</Link>
						</li>
						<li>
							<Link>Abilities</Link>
						</li>
						<li>
							<Link>Misc</Link>
						</li>
					</ul>
				</nav>
			</div>
		</main>
	);
}
