import { Component } from "react";

export default class ComponetDidMount extends Component 
{
   constructor()
   {
      super();
      this.state = {
         name: "Anil"
      }
      console.log("Constructor Called");
   }

   componentDidMount()
   {
      console.log("ComponentDidMount called");
   }

   render()
   {
      console.log("Render called")
      return (
         <div>
            <h1>Component Did Mount {this.state.name}</h1>
            <button onClick={() => this.setState({name: "Sidhu"})}>Update</button>
         </div>
      )
   }
}