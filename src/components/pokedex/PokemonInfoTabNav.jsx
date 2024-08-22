export default function PokemonInfoTabNav({
	pokemonCard,
	activeTab,
	setActiveTab,
}) {
	const renderTabContent = () => {
		const calculateTotal = () => {
			return pokemonCard.stats.reduce((total, stat) => {
				return total + stat.base_stat;
			}, 0);
		};

		switch (activeTab) {
			case "about":
				return (
					<div className="pokemon-card__tab">
						<h1>This is the active tab test</h1>
					</div>
				);
			case "baseStats":
				return (
					<div className="pokemon-card__tab">
						<ul className="pokemon-card__stats-list" role="list">
							{pokemonCard.stats.map((stat, index) => (
								<li className="pokemon-card__list-item" key={index}>
									<p>{stat.stat.name}</p>
									<p>{stat.base_stat}</p>
								</li>
							))}
							<li className="pokemon-card__list-item">
								<p>Total</p>
								<p>{calculateTotal()}</p>
							</li>
						</ul>
					</div>
				);
			case "evolution":
				return (
					<div className="pokemon-card__tab">
						<h1>This is the evolution tab test</h1>
					</div>
				);
			case "moves":
				return (
					<div className="pokemon-card__tab">
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
