export const PokemonCard = ({currPokemon}) => {
    return (
        <li className="pokemon-card">
            <figure>
                <img className="pokemon-img" src={currPokemon.sprites.other.dream_world.front_default} alt="" />
            </figure>
            <div className="pokemon-name">
                <h2>{currPokemon.name}</h2>
            </div>
            <div className="pokemon-type">
                <h3>{currPokemon.types.map((currType) => currType.type.name).join(", ")}</h3>
            </div>
            <section className="pokemon-info-container">
                <div className="pokemon-info1">
                    <span>Height:</span>
                    <p>{currPokemon.height}</p>
                </div>
                <div className="pokemon-info1">
                    <span>Weight:</span>
                    <p>{currPokemon.weight}</p>
                </div>
                <div className="pokemon-info1">
                    <span>Speed:</span>
                    <p>{currPokemon.stats[5].base_stat}</p>
                </div>
                <div className="pokemon-info2">
                    <p>{currPokemon.base_experience}</p>
                    <span>Experience</span>
                </div>
                <div className="pokemon-info2">
                    <p>{currPokemon.stats[1].base_stat}</p>
                    <span>Attack</span>
                </div>
                <div className="pokemon-info2">
                    <p>
                        {currPokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0,1).join()}
                    </p>
                    <span>Abilities</span>
                </div>
            </section>
        </li>
    )
}