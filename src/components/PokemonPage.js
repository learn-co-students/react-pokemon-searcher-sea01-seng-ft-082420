import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { FormInput } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()

    this.state= {
      pokemons: [],
      search: '',
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then (res => res.json())
    .then( pokemons => {
      this.setState({
        pokemons
      })
    })
  }

  handleSearch = e => {
    this.setState ({
      search: e.target.value
    })
  }

  addPokemon = pokemon => {
    let newPokemons = this.state.pokemons.push(pokemon)
    this.setState({
      pokemons: newPokemons
    })
  }

  

  render() {
    let searchedPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={searchedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
