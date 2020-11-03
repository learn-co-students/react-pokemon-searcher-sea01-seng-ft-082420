import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imgUrl: this.props.pokemon.sprites.front
  }

  handleClick = () => {
    if (this.state.imgUrl === this.props.pokemon.sprites.front) {
      this.setState({
        imgUrl: this.props.pokemon.sprites.back
      })
    } else {
      this.setState({
        imgUrl: this.props.pokemon.sprites.front
      })
    }
  }

  render() {

    const { name, hp } = this.props.pokemon

    return (
      <Card onClick={() => this.handleClick()}>
        <div>
          <div className="image">
            <img src={this.state.imgUrl} alt="oh no!" />
          </div>
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
