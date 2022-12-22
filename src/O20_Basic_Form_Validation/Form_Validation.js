import { useState } from "react";

export default function Form_Validation()
{
   // These 2 are for User Inputs
   const [user, setUser] = useState(false);
   const [password, setPassword] = useState("");

   // This is for User Validation
   let [userErr, setUserErr] = useState(false);

   // This is for Password Validation
   let [passErr, setPassErr] = useState(false);

   function loginHandle(e)
   {
      // if(user.length < 3 || password.length < 6) {
      //    alert("Type correct credentials")
      // } 
      // Or
      if(userErr == true || passErr == true)
      {
         alert("Invalid Credentials")
      } else {
         alert("All Good")
      }
      console.log(user, password);
      e.preventDefault();
   }

   function userHandler(e)
   {
      // Taking the lenght of the String given by user in the user id box
      let item = e.target.value;
      if(item.length < 3) {
         setUserErr(true);
         console.log("Invalid");
      } else
      {
         setUserErr(false);
      }
      setUser(item);
      console.warn(e.target.value, e.target.value.length);
   }

   function passwordHandler(e)
   {
      // Taking the lenght of the String given by user in the user id box
      let item = e.target.value;
      if(item.length < 6) {
         setPassErr(true);
         console.log("Invalid");
      } else
      {
         setPassErr(false);
      }
      setPassword(item);
      console.warn(e.target.value, e.target.value.length);
   }

   return (
      <div>
         <h1>Basic Form Validatin Using React!</h1>
         <form onSubmit={loginHandle}>
            <input type="text" placeholder = "Enter User Id" onChange={userHandler}/> 
            {
               userErr ?
               <span>User not valid</span>
               : <span></span>
            }
             <br />
            <input type="password" placeholder ="Enter Password" onChange={passwordHandler}/>
            {
               passErr ?
               <span>Invalid Password</span>
               : <span></span>
            }
            
            <br/><br/>
            <button type = "submit" >Login</button>
         </form>
      </div>
   )
}