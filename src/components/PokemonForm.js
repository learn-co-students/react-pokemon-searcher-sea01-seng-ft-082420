import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: 0,
    sprites:{
      front: '',
      back: '',
    }
  }

  handleSubmit =e => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.front,
        back: this.state.back,
      }
    })
    })
    .then(res => res.json())
    .then(pokemon => this.props.addPokemon(pokemon))

  }

  //Need to fix Form, it adds a pokemon to db but does not update in DOM 

  handleChange =e => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    })
  }
  // handleChange = (e, {name, value}) => {
  //   this.setState({
  //     [name] : value
  //   })
  // }

  // handleChange = (event) => {
  //   if (event.target.name === 'front') {
  //     this.setState({
  //       sprites: {
  //         front: event.target.value,
  //         back: this.state.sprites.back
  //       }
  //     })
  //   } else if (event.target.name === 'back'){
  //     this.setState({
  //       sprites: {
  //         front: this.state.sprites.front,
  //         back: event.target.value
  //       }
  //     })
  //   } else {
  //     this.setState({[event.target.name]: event.target.value})
  //   }
  // }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.handleChange} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.handleChange} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.handleChange} placeholder="url" name="front" />
            <Form.Input fluid label="Back Image URL" onChange={this.handleChange} placeholder="url" name="back" />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
