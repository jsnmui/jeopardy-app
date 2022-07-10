
import "./App.css";
import {Component} from "react";
import TriviaData from "./components/Triviadata"
import Score from "./components/Score";
import Buttons from "./components/Buttons"

class App extends Component {
  state = {
    searchURL: "http://jservice.io/api/random",
    trivia: null,
    Value:0, 
    totalScore:0
    };

  
 handleSubmit = (e) => {
    e.preventDefault();
    this.setState(  () => {
      fetch(this.state.searchURL)
      .then(res => res.json())
      .then(json => this.setState({trivia:json}))
     });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Jeopardy!</h1>
        {this.state.trivia && <Score totalScore={this.state.totalScore} trivia={this.state.trivia} />}
        <h3> Let's Play!</h3>
        <Buttons handleSubmit={this.handleSubmit}/>
        {this.state.trivia && <TriviaData trivia={this.state.trivia} getValue={this.getValue} />}
     
       
     </div>
    );
  }
}

export default App;







