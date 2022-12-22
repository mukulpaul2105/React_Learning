import User from "./User";

export default function User_Main()
{
   function getData()
   {
      alert("hello From User Main");
   }

   return (
      <div>
         <User data={getData}/>

      </div>
   )
}