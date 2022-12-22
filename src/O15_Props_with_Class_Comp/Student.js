import React, {Component} from 'react';

export default class Student extends Component
{
   render()
   {
      return (
         <div style={{backgroundColor: 'skyblue', margin: 15}} >
            <h2>Hello: {this.props.name}</h2>
            <h3>Email: {this.props.email}</h3>
         </div>
      )
   }
}