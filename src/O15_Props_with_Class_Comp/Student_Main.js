import { Component } from "react";
import Student from "./Student";

export default class Student_Main extends Component
{

   constructor()
   {
      super();
      this.state = {
         name: "Anil",
         email: "anil123.test.com"
      }
   }

   updateData() 
   {
      this.setState(
         {
            name: "Rahul",
            email: "rahul123@test.com"
         }
      )
   }

   render() 
   {
      return(
         <div>
            <h2>Props With Class Component :)</h2>
            <h2>{this.state.name}</h2>
            <h2>{this.state.email}</h2>
            <button onClick={() => {this.updateData()}}>Update Name</button>
         </div>
      )
   }
}