import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard  extends React.Component{

  constructor(){
    super()
  
    this.state = {
      toggled: false,
    }
  }

  toggle =() => {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render () {
    return (
      <Card >
        <div onClick={this.toggle}>
          <div className="image">
            <img src={this.state.toggled ? this.props.pokemon.sprites.back : 
              this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
