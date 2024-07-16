const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) /*conversao para string */
    const [type] = types
    
    const abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
    const [abilitie] = abilities

    pokemon.types = types
    pokemon.type = type

    pokemon.specie = pokeDetail.species.name
    pokemon.weight = pokeDetail.weight * 0.10
    pokemon.height = pokeDetail.height.toFixed((fixed) => fixed * 0.10)
    
    pokemon.abilitie = abilitie
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) /*json com a lista de pokemond */
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}