import { useState } from "react";
import { useEffect } from "react"
import { PokemonCard } from "./PokemonCard";
import { Loader } from "./Loader";

export const Pokemon = () => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=201";
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [search, setSearch] = useState("");

    const handlePokemonApi = async () => {
        try {
            const res = await fetch(apiURL);
            const apiData = await res.json();
    
            const pokemonPromise = apiData.results.map(async (currPokemon) => {
                const res = await fetch(currPokemon.url);
                const data = await res.json();
                return data;
            })
    
            const allPokemon = await Promise.all(pokemonPromise);
            setPokemons(allPokemon);
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            setErr(error);
        }
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const filteredPokemons = pokemons.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        handlePokemonApi();
    }, [])

    if(loading) {
        return <Loader />
    }

    if(err) {
        return <h1>{err.message}</h1>
    }

    return (
        <div className="container">
            <header className="website-heading">
                <h1>Catch The Pokémon</h1>
                <input className="pokemon-search" type="text" placeholder="Search the pokemon" value={search} onChange={handleInputChange} />
            </header>
            <div>
                <ul className="card-container">
                    {filteredPokemons.map((currPokemon) => {
                        return <PokemonCard key={currPokemon.id} currPokemon={currPokemon}/>
                    })}
                </ul>
            </div>
        </div>
    )
}