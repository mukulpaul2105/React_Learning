import { useState } from "react"

// This is for 3 options 1, 2, 3
export default function Profile()
{
   // Both normal variable as well as state will work for the if else condition as long as 
   // It is not getting updated by user (dynamically)
   const [loggedIn, setLoggedIn] = useState(3);
   // let loggedIn = 3;

   // 1, 2, 3
   // This is also called Turnery Operator
   return (
      <div>
         <h1>Profile Component</h1>
         {
            loggedIn == 1 ?
            <h2>Wellcome Mukul</h2> 
            : loggedIn == 2 ?
            <h2>Wellcome Anil</h2> 
            : <h3>Wellcome Guest</h3>
         }
      </div>
   )
}


// This is for 2 Options eg true or false
// export default function Profile()
// {

//    const [loggedIn, setLoggedIn] = useState(true);

//    // Not Recomended
//    // if(loggedIn) 
//    // {
//    //    return (
//    //       <div>
//    //          <h2>Wellcome Mukul</h2>
//    //       </div>
//    //    )
//    // } else
//    // {
//    //    return (
//    //       <div>
//    //          <h2>Wellcome Guest</h2>
//    //       </div>
//    //    )
//    // }

//    // Recomended
//    return (
//       <div>
//          <h1>Profile Component</h1>
//          {
//             loggedIn ?
//             <h2>Wellcome Mukul</h2>
//             : <h2>Wellcome Guest</h2>
//          }
//       </div>
//    )
// }