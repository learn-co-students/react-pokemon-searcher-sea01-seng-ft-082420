import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        pokemons
      })

      // console.log('pokemons'),
      // console.log(pokemons)
    })
  }

  handleChange= (e) => {
    this.setState({
      search: e.target.value
    })
  }

  selectPokemons = (search, pokemons) => {
    return pokemons.filter(pokemon => pokemon.name.slice(0,search.length).toLowerCase() === search.toLowerCase())
  }

  addPokemon = (pokemon, e) => {
    e.preventDefault()
    fetch((URL), {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: pokemon.name,
        hp: pokemon.hp,
        sprites: {
          front: pokemon.frontUrl,
          back: pokemon.backUrl
        }
      })
    }).then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      })
    })

    // console.log(e)
    // console.log(pokemon)
    // "id": 2,
    // "name": "ivysaur",
    // "hp": 60,
    // "sprites": {
    //   "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    //   "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
    // }
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.addPokemon}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        {this.state.search === '' ? 
        <PokemonCollection pokemons={this.state.pokemons}/>
          : 
          <PokemonCollection pokemons={this.selectPokemons(this.state.search,this.state.pokemons)}/>
          }
      </Container>
    )
  }
}

export default PokemonPage
