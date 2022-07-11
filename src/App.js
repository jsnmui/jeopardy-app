
import "./App.css";
import {Component} from "react";
import TriviaData from "./components/Triviadata"
import Score from "./components/Score";
import Buttons from "./components/Buttons"

class App extends Component {

  constructor(props) {
    super(props);
   
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);

    this.state = { 
   
      searchURL: "http://jservice.io/api/random",
      trivia: null,
      Value:0, 
      totalScore:0
    };
  }

  getValue=(value) =>{
    this.setState({Value:value})
 }

 increaseCounter() {
    this.setState({ totalScore: this.state.totalScore + this.state.Value });
  }

  decreaseCounter() {
    this.setState({ totalScore: this.state.totalScore - this.state.Value });
  }

  resetCounter = () => {
     this.setState({ totalScore:0 });
  }

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
       
        {this.state.trivia && <Score totalScore={this.state.totalScore} trivia={this.state.trivia}   onIncrease={this.increaseCounter}   onDecrease={this.decreaseCounter} getValue={this.getValue} reset={this.resetCounter}/>}
        <h3 id="lets"> Let's Play!</h3>
        <Buttons handleSubmit={this.handleSubmit}/>
        {this.state.trivia && <TriviaData trivia={this.state.trivia} />}
     
       
     </div>
    );
  }
}

export default App;







