import React from "react";
import Result from "./Result";

class PatronForm extends React.Component {
  constructor() {
    super();

    this.state = {
      loyalty: undefined,
      mean: undefined,
      sports: undefined,
      money: undefined,
      userScore: [],

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let userScore = [
      this.state.loyalty,
      this.state.mean,
      this.state.sports,
      this.state.money
    ];

    this.setState({
      userScore: userScore
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Loyalty is more important than honesty</label>
          <br />
          <select
            name="loyalty"
            value={this.state.loyalty}
            onChange={this.handleChange}
          >
            <option value={undefined}>--Please Select a Rating--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />

          <label>Mean people will get what they deserve</label>
          <br />
          <select
            name="mean"
            value={this.state.mean}
            onChange={this.handleChange}
          >
            <option value={undefined}>--Please Select a Rating--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />

          <label>Sports are the best way to spend free time</label>
          <br />
          <select
            name="sports"
            value={this.state.sports}
            onChange={this.handleChange}
          >
            <option value={undefined}>--Please Select a Rating--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />

          <label>Money is more important than friendship</label>
          <br />
          <select
            name="money"
            value={this.state.money}
            onChange={this.handleChange}
          >
            <option value={undefined}>--Please Select a Rating--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <button>Find my Patronus</button>
        </form>
        <Result userScore={this.state.userScore} />
      </div>
    );
  }
}

export default PatronForm;
