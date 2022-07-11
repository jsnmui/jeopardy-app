import React from "react";

class Score extends React.Component {
  
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.reset = this.reset.bind(this);
  } 
  
  onIncrease(e) {
    this.props.onIncrease(e)    // increase totalsore by points of the questipn
    this.props.getValue(this.props.trivia[0].value)  
  }

  onDecrease(e) {
    this.props.onDecrease(e); //decrease  totalsore by points of the questipn
    this.props.getValue(this.props.trivia[0].value)
  }

  reset(e) {
    this.props.reset(e); //decrease  totalsore by points of the questipn
    this.props.getValue(this.props.trivia[0].value)
  }

   render() {
    return(
       <div> 
         
       <h2 id="score">Score: {this.props.totalScore}  </h2> 
       <button id="inc" onClick={this.onIncrease}>Increase</button>
       <button id="dec" onClick={this.onDecrease}>Decrease</button>
       <button id="reset" onClick={this.reset}>Reset</button>

       </div>
    )
    } 
}

export default Score