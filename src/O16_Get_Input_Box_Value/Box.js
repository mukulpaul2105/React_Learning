import { useState } from "react"

export default function Box() {
   // This sate is for Updating the Data
   const [data, setData] = useState(null);
   // This state is for Printing the Data
   const [print, setPrint] = useState(false);
   function getData(val) 
   {
      console.warn(val.target.value);
      // Setting the data
      setData(val.target.value);
      // While We are typing something on the box hide the data by making print as false
      setPrint(false);
   }

   return (
      <div>
         <h1>Get Input Box Value</h1>
         {
            // Cheking if the print is True then only print the data in the viewport 
            print ?
            <h3>{data}</h3>
            // If print is false print nothing
            : null
         }
         <input type="text" onChange={getData}/>
         {/* On clicking the button setting the print as true to print the data on the viwport */}
         <button onClick={() => setPrint(true)}>Print Data</button>
      </div>
   )
}