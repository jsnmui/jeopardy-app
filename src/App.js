
import "./App.css";
import { Component } from "react";
import TriviaData from "./components/Triviadata"

class App extends Component {
  state = {
    searchURL: "http://jservice.io/api/random",
    trivia: null
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( () => {
      fetch(this.state.searchURL)
      .then(res => res.json())
      .then(json => this.setState({trivia:json}))
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Jeopardy!</h1>
        <h3> Let's Play!</h3>
        <button onClick={this.handleSubmit}>Get Question</button>
          
        {this.state.trivia && <TriviaData trivia={this.state.trivia}/>}
     
       </div>
    );
  }
}

export default App;







