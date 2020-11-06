import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      pokemons:[],
      // selectedPokemon:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      pokemons:data,
      // selectedPokemon:data
    }))
  }

  displayPokemon = (name) =>{
    this.setState({
      // selectedPokemons:this.state.pokemons.filter(pokemon => pokemon.name === name)
      pokemons:[...this.state.pokemons.filter(pokemon => pokemon.name === name)]
   })
  }

  addPokemon = (pokemon) =>{
    console.log(pokemon)
    this.setState({
      pokemons:[...this.state.pokemons,pokemon]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search  displayPokemon={this.displayPokemon}/> 
        <br />
        <PokemonCollection  pokemons={this.state.pokemons} />
        {/* <PokemonCollection  pokemons={this.state.selectedPokemons} /> */}
      </Container>
    )
  }
}

export default PokemonPage
