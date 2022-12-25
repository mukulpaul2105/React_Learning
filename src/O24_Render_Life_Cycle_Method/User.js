import { Component } from "react";

export default class User extends Component
{
   render() 
   {
      console.warn("Render Method", this.props);
      return (
         <div>
            <h1>User Component {this.props.name}</h1>
         </div>
      )
   }
}