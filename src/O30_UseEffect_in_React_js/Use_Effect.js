import React, { useEffect, useState } from "react";

export default function Use_Effect() {
   // React.useEffect(() => {

   // });
   // Or

   const [count, setCount] = useState(0);

   useEffect(() => {
      console.log("useEffect");
   })

   return (
      <div>
         <h1>useEffect in React {count}</h1>
         <button onClick={() => setCount(count + 1)}>Update Counter</button>
      </div>
   )
}