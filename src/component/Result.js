import React from 'react'
import ShowPatron from './ShowPatron'

class Result extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      stag:[5, 2, 3, 1],
      phoenix:[3, 5, 1, 2],
      wolf:[5, 1, 3, 2],
      cat:[4, 2, 3, 5],
      horse:[5, 3, 2, 1],
    }
    this.renderResults = this.renderResults.bind(this)
  }

  renderResults() {
    let {stag, phoenix, wolf, cat, horse, result, resultIndex} = ''
    const userScore = this.props.userScore
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    stag = this.state.stag.map(function(item, index) {
        return Math.abs(item - userScore[index])
    })
    phoenix = this.state.phoenix.map(function(item, index) {
      return Math.abs(item - userScore[index])
    })
    wolf = this.state.wolf.map(function(item, index) {
      return Math.abs(item - userScore[index])  
    })
    cat = this.state.cat.map(function(item, index) {
    return Math.abs(item - userScore[index])
    })
    horse = this.state.horse.map(function(item, index) {
    return Math.abs(item - userScore[index])
    })

    const results = [
        stag = stag.reduce(reducer),
        phoenix = phoenix.reduce(reducer),
        wolf = wolf.reduce(reducer),
        cat = cat.reduce(reducer),
        horse = horse.reduce(reducer),
      ]
      resultIndex = results.indexOf(Math.min.apply( Math, results ));
      result = Math.min.apply( Math, results )

      return [result, resultIndex]
  }

  render() {
    return(
      <div>
        <h3>Your Patronous score is: {!this.renderResults()[0] ? '' : this.renderResults()[0] }</h3>
        <ShowPatron scoreIndex={this.renderResults()[1]} />
      </div>
    )
  }
}

export default Result 