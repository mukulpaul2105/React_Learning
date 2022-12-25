import React from "react";
import Student from "./Student";
export default class User extends React.Component
{
   constructor()
   {
      super();
      this.state = {
         show: true
      }
   }
   render()
   {
      return (
         <div>
            {
               this.state.show ?
               <Student />
               : <h2>Child Component Removed</h2>
            }
            <button onClick={() => this.setState({show: !this.state.show})}>Toggle Child Component</button>
         </div>
      )
   }
}