import React, { useEffect } from "react";

export default function User(props) {
   // const [data, setData] = useState(10);
   // const [count, setCount] = useState(100);

   // // This will work with data
   // useEffect(() => {
   //    console.warn("Use Effect called with data state", data);
   // }, [data]);

   
   // // This will work with count
   // useEffect(() => {
   //    console.warn("Use Effect called with count state", count);
   // }, [count]);

   useEffect(() => {
      alert("Count is: " + props.count);
   }, [props.count])


   return (
      <div>
         <h1>useEffect in React </h1>
         <h2>Count Props: {props.count}</h2>
         <h2>Data Props: {props.data}</h2>
         {/* <button onClick={() => setCount(count + 1)}>Update Count</button> 
         <button onClick={() => setData(data + 1)}>Update Data</button> */}
      </div>
   )

}