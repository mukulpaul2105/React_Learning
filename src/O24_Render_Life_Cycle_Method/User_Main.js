import { useState } from "react";
import User from "./User";

export default function User_Main()
{
   const [name, setName] = useState("Anil");
   return (
      <div>
         <User name={name}/>
         <button onClick={() => setName("Sidhu")} >Update</button>
      </div>
   )
}