import React from 'react'
import { Form } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon'

class PokemonForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault()
    let pokemon = e.target

    const pokemonData = {
      name: pokemon.name.value,
      hp: pokemon.hp.value,
      sprites: {
        front: pokemon.frontUrl.value,
        back: pokemon.backUrl.value
      }
    }

    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemonData)
    }
    
    fetch(URL, configObj)
    .then(resp => resp.json())
    .then(pokemon => this.props.addPokemon(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
