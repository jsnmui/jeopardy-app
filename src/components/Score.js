const Score= (props) => {
   
    return(
      <div> 
       <h2>Score:{props.totalScore}</h2> 
       <button onClick={props.handleSubmit}>Decrease</button>
       <button onClick={props.handleSubmit}>Increase</button>
       </div>
    )
}

export default Score