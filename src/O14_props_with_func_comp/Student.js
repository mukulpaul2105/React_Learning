export default function Student(props)
{
   console.log(props.name, " ", props.email);
   return (
      <div style={{backgroundColor: "skyblue", margin: 10}}>
         <h1>Hello {props.name}</h1>
         <h3>Email: {props.email}</h3>
         <h5>Address: {props.other.address}</h5>
         <h5>Mobile: {props.other.mobile}</h5>
      </div>
   )
}