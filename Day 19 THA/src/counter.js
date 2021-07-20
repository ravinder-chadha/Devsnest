import React from "react";

export default class counter extends React.Component{
  constructor(){
    super();
    this.state= {
      count:0
  }
}

  handleCount = ()=>{
    this.setState((prevState) => {
       return {
        count : prevState.count+1 
      }
   })
}

render(){
return (
<button onClick = {this.handleCount}>
{this.state.count}</button>
    )
}
}