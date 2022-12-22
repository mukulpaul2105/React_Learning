import React, {useState} from 'react';
import With_button_Student from "./With_button_Student";

export default function With_Button_Main()
{
   const [name, setName] = useState("Anil");

   return (
      <div >
        <With_button_Student name={name} />
         <button onClick={() => {setName("Sidhu")} }>Update Name</button>
      </div>
    );
}