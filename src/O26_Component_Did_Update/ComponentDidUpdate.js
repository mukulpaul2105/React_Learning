import React from "react";

export default class ComponentDidUpdate extends React.Component
{
   constructor()
   {
      super();
      // console.log("Constructor called");
      this.state ={
         counter: 0
      }
   }

   componentDidUpdate(preProps, preState, snapshot)
   {
      console.log("ComponentDidUpdate called", preState.counter, this.state.counter);
      if(this.state.counter < 10) {
         this.setState({count: this.state.counter + 1})
      }
   }


   render()
   {
      // console.log("Render called");
      return (
         <div>
            <h1>Component Did Update</h1>
            <h2>Updated Counter: {this.state.counter}</h2>
            <button onClick={() => this.setState({counter: 1})}>Update</button>
         </div>
      )
   }
}