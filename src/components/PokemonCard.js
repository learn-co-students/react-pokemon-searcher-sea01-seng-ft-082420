import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      clicked: false
    }
  }

  handleClick =() =>{
    this.setState({
      clicked:!this.state.clicked
    })
  }


  render() {

    const{pokemon} = this.props
    let backUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`
    let frontUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    const url = this.state.clicked? backUrl : frontUrl
    return (
      <Card>
        <div>
          <div className="image">
            <img src={url}  alt="oh no!" onClick={() => this.handleClick()} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
