



const pokemoneslist = document.getElementById('pokemoneslist')
const loadmorebutton = document.getElementById('loadmore')
const limit = 12
let offset = 0



function loadmoreitens(offset, limit) {
    pokeapi.getpokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type} "> ${type}</li>`).join('')}
                        

                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                
            </li>
            `).join('') 
        pokemoneslist.innerHTML += newHtml
    })
}

loadmoreitens(offset, limit)

loadmorebutton.addEventListener('click', () => {
    offset += limit
    loadmoreitens (offset, limit)
})