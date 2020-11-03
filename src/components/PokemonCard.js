import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    let nclick = !this.state.clicked
    this.setState({
      clicked: nclick
    })
  }


  render() {
    let {id, name, hp, sprites} = this.props.pokemon
    return (
      <Card onClick={this.handleClick}>
        <div>
          {this.state.clicked ? 
                  <div className="image">
                  <img src={`${sprites.back}`} alt="oh no!" />
                </div> : 
                   <div className="image">
                   <img src={`${sprites.front}`} alt="oh no!" />
                 </div>
        
        }
       
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

// "id": 2,
// "name": "ivysaur",
// "hp": 60,
// "sprites": {
//   "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//   "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
// }