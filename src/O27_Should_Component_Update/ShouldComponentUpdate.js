import React from "react";

export default class ShouldComponentUpdate extends React.Component
{
   constructor()
   {
      super();
      this.state ={
         count: 0
      }
   }

   shouldComponentUpdate()
   {
      console.log("ShouldComponentUpdate Called", this.state.count);
      //If we don't return true than the Component will never get update 
      if(this.state.count < 10) {
         return true;
      } else {
         return false;
      }
   }

   render()
   {
      return (
         <div>
            <h1>ShouldComponentUpdate {this.state.count}</h1>
            <button onClick={() => {this.setState({count: this.state.count + 1})}}>Update</button>
         </div>
      );
   }
}