import React from "react";

export default class Student extends React.Component
{
   componentWillUnmount()
   {
      console.log("ComponentWillUnmount called")
   }

   render()
   {
      return (
         <div>
            <h1>Student Component</h1>
         </div>
      )
   }
}