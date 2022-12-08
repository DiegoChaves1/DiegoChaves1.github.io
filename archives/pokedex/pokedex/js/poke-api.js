
const pokeapi = {}

function convertpokeDetailtoPokemon(pokedetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokedetail.name

    const types = pokedetail.types.map((typeslot) => typeslot.type.name)
    const [type] = types
    pokemon.number = pokedetail.order
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokedetail.sprites.other.dream_world.front_default
    return pokemon

}

pokeapi.getpokemonDetail = (pokemon) => {
   return fetch(pokemon.url).then((response) => response.json())
   .then(convertpokeDetailtoPokemon)

   
}



pokeapi.getpokemons = (offset=0, limit=12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapi.getpokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails)
    
    }
    

