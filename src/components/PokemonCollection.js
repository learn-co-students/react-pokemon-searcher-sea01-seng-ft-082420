import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = props => {
  
    return (
      <div>
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
      </Card.Group>
      </div>
    )
  
}

export default PokemonCollection
