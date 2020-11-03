import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    text: ''
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(pokemons => {
      this.setState({
        pokemons
      })
    })
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSearchPokemon = () => {
    const { pokemons, text } = this.state
    if (text) {
      return pokemons.filter((pokemon) => pokemon.name === text)
    } else {
      return pokemons
    }

  }

  addPokemon = (pokemon) => {
    // console.log(pokemon.name.value, pokemon.hp.value)
    // const pokemonData = {
    //   name: pokemon.name.value,
    //   hp: pokemon.hp.value,
    //   sprites: {
    //     front: pokemon.frontUrl.value,
    //     back: pokemon.backUrl.value
    //   }
    // }

    let newPokemon = this.state.pokemons.push(pokemon)
    this.setState({
      pokemons: newPokemon
    })

    // const configObj = {
    //   mehtod: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify(pokemonData)
    // }
    
    // fetch(URL, configObj)
    // .then(resp => resp.json())
    // .then(console.log)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemons={this.handleSearchPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
