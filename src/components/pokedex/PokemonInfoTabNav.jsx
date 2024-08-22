export default function PokemonInfoTabNav({
	pokemonCard,
	activeTab,
	setActiveTab,
}) {
	const renderTabContent = () => {
		switch (activeTab) {
			case "about":
				return (
					<div>
						<h1>This is the active tab test</h1>
					</div>
				);
			case "baseStats":
				return (
					<div>
						<h1>This is the base stats tab test</h1>
					</div>
				);
			case "evolution":
				return (
					<div>
						<h1>This is the evolution tab test</h1>
					</div>
				);
			case "moves":
				return (
					<div>
						<h1>This is the moves tab test</h1>
					</div>
				);
		}
	};

	return (
		<>
			<nav className="pokemon-card__tab-nav">
				<button
					onClick={() => setActiveTab("about")}
					className="pokemon-card__tab-button"
				>
					About
				</button>
				<button
					onClick={() => setActiveTab("baseStats")}
					className="pokemon-card__tab-button"
				>
					Base Stats
				</button>
				<button
					onClick={() => setActiveTab("evolution")}
					className="pokemon-card__tab-button"
				>
					Evolution
				</button>
				<button
					onClick={() => setActiveTab("moves")}
					className="pokemon-card__tab-button"
				>
					Moves
				</button>
			</nav>
			<hr className="pokemon-card__tab-hr" />
			<div className="pokemon-card__tab-content">{renderTabContent()}</div>
		</>
	);
}
