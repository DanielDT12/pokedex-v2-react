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

		const statNameArray = [
			"Hp",
			"Attack",
			"Defense",
			"Sp.Atk",
			"Sp.Def",
			"Speed",
		];

		switch (activeTab) {
			case "about":
				return (
					<div className="pokemon-card__tab">
						<ul className="pokemon-card__list" role="list">
							<li className="pokemon-card__list-item">
								<p>Height</p>
								<p>{pokemonCard.height * 10} cm</p>
							</li>
							<li className="pokemon-card__list-item">
								<p>Weight</p>
								<p>{pokemonCard.weight / 10} kg</p>
							</li>
							<li className="pokemon-card__list-item">
								<p>Base.Exp</p>
								<p>{pokemonCard.base_experience}</p>
							</li>
							<li
								className="pokemon-card__list-item flex-col"
								style={{ gap: ".25rem" }}
							>
								<p>Abilities:</p>
								{pokemonCard.abilities.map((ability, index) => (
									<p key={index}>- {ability.ability.name}</p>
								))}
							</li>
						</ul>
					</div>
				);
			case "baseStats":
				return (
					<div className="pokemon-card__tab">
						<ul className="pokemon-card__list" role="list">
							{pokemonCard.stats.map((stat, index) => (
								<li className="pokemon-card__list-item" key={index}>
									<p>{statNameArray[index]}</p>
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
						<h2 style={{ marginBlockStart: "1rem" }}>Moves:</h2>
						<ul className="pokemon-card__list">
							{pokemonCard.moves.map((move, index) => (
								<li className="pokemon-card__list-item" key={index}>
									{move.move.name}
								</li>
							))}
						</ul>
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
