const TriviaData = (props) => {
    return (
      <div>
        <div>Answer: {props.trivia[0].answer}</div>
        <div>Category: {props.trivia[0].category.title}</div>
        <div>Points: {props.trivia[0].value}</div>
        <div>Question: {props.trivia[0].question}</div>
      </div>
    );
  };
  
  export default TriviaData;