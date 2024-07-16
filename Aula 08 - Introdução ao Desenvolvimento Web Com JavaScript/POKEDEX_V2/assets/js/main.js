const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0
//pokemonList.innerHTML += '<li>Teste</li>'
// transformando a lista de pokemons em uma lista html

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // join junta todos os elementos da lista
        const newHtml = pokemons.map((pokemon => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
                
                <div class="species">
                        <p>Espécie: ${pokemon.specie}</p>
                        <p>Peso: ${pokemon.weight} kg </p> 
                        <p>Altura: ${pokemon.height} cm </p> 
                        <p>Habilidade: ${pokemon.abilitie}</>
                </div>
                
            </li>
        `)).join('')
        pokemonList.innerHTML += newHtml 
    })    
}



loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadPokemonItens(offset, limit)
    }
    
})
