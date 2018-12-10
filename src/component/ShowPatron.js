import React from 'react'
import Cat from '../assets/Cat.jpg'
import Horse from '../assets/Horse.jpg'
import Phoenix from '../assets/Phoenix.jpg'
import Wolf from '../assets/wolf.jpg'
import Stag from '../assets/Stag.png'

class ShowPatron extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scoreIndex: this.props.scoreIndex,
      patron: [
        Stag,
        Phoenix,
        Wolf,
        Cat,
        Horse
      ]
    }
  }

  render() {
    let style = {
      height: '250px',
      width: '200px'
    }
    return(
      <div className="image-box">
        {this.props.scoreIndex === -1 ? '' : <img style={style} src={this.state.patron[this.props.scoreIndex]} alt="Patron" />}
      </div>
    )
  }
}

export default ShowPatron