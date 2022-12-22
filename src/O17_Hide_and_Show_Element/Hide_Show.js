import { useState } from "react"

export default function Hide_Show()
{
   const [status, setStatus] = useState(false);
   return (
      <div>
         {
            status ?
            <h1>Hello World!</h1>
            : null
         }
         {/* For Two buttons  */}
         {/* <button onClick={() => setStatus(false)}>Hide</button>
         <button onClick={() => setStatus(true)}>Show</button> */}

         {/* Toggle */}
         <button onClick={() => setStatus(!status)}>Toggle</button>
      </div>
   )
}