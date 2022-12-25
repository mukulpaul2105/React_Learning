import { Component } from "react";

export default class Constructor_Method extends Component 
{
   constructor()
   {
      super();
      this.state = {
         data: "Anil"
      }
   }
   render()
   {
      console.log("render"); 
      return (
         <div>
            <h1>Constructor Method in React</h1>
            <h2>Data: {this.data}</h2>
         </div>
      )
   }
}