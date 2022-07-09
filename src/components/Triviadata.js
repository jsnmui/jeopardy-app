import { useState } from "react"
const TriviaData = (props) => {
   
  const [selected, setSelected] = useState(0)

    return (
      <div className="Trivia">
        <div>Category: {props.trivia[0].category.title}</div>
        <div>Points: {props.trivia[0].value}</div>
        <div>Answer: {props.trivia[0].answer}</div>
        <div onClick={() =>{(selected===0) ? setSelected(1) : setSelected(0)}}>
        {(selected === 1) && <div>Question: {props.trivia[0].question}</div>}
        {(selected === 0) && <div>Click To Reveal Question</div>}
        </div>
      </div>
    );
  };
  
  export default TriviaData;