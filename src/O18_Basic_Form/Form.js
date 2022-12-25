import { useState } from "react";

export default function Form()
{

   const [name, setName] = useState("");
   const [tnc, setTnc] = useState(false);
   const [interest, setInterest] = useState("");

   function getFormData(e)
   {
      console.warn(name, tnc, interest)
      // When we click on the Submit button the page got reloaded so to prevent this we use this method
      e.preventDefault();
   }

   return (
      <div>
         <h1>Handle Form in React</h1>
         <form onSubmit={getFormData}>
            <input type = "text" placeholder = "Enter Name" onChange={(e) => setName(e.target.value)}/> <br />
            <select onChange={(e) => setInterest(e.target.value)}>
               <option>Select Options</option>
               <option>Marvel</option>
               <option>DC Comic</option>
            </select> <br />
            {/* We have to take here target.checked because checked box returns true or false */}
            <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span>
            <br /> <br/>
            <button type = "submit" >Submit</button>
         </form>
      </div>
   )
}