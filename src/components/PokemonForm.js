import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(){
    super()
    this.state ={
      name: " ",
      hp:" ",
      sprites:{
        front:" ",
        back:" "
      }
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: this.state.name,
        hp:this.state.hp,
        sprites:{
          front:this.state.front,
          back:this.state.back
      }
    })
    })
.then(response => response.json())
.then(data => {
  this.props.addPokemon(data)
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
  }

  handleChange = (e) =>{
    this.setState({
      ...this.state,[e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => this.handleChange(e)} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => this.handleChange(e)}  />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.handleChange(e)} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.handleChange(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
