
// Formas de Escrever , forma mais robusta

/*

fetch(url) está fazendo uma requisição para o url
    .then(function (response){
   return response.json()
})
    .then(function (jsonBody){
        console.log(jsonBody)
    })
    .catch(function(error){
    console.log(error)
})
    */

 //Utilizando Arrow Function para simplificar

 
 const pokemonList = document.getElementById('pokemonsList')
 const loadMoreButton = document.getElementById("loadMoreButton")
 const limit = 20
 let offset = 0





function loadPokemonsItens(offset, limit){

    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
    const newHtml = pokemons.map((pokemon) =>
        `
        <li class="pokemon"  data-type="${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name"><h2>${pokemon.name}</h2></span>
    
            <div class="detail">
    
              <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type" data-type="${type + '-A'}">${type}</li>`).join('')}
              </ol>
    
              <img src="${pokemon.photo}" alt="${pokemon.name}">
            
            </div>
          </li>
        `
    ).join('')
    pokemonList.innerHTML += newHtml

    })

}

loadPokemonsItens(offset, limit)

loadMoreButton.addEventListener('click' , () =>{
    offset += limit
    loadPokemonsItens(offset , limit)
 })