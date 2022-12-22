export default function User(props)
{
   return (
      <div>
         <h1>Pass Function as Props</h1>
         {/* <button onClick={() => props.data()} >Call Data Function</button>
         Or */}
         <button onClick={props.data} >Call Data Function</button>
      </div>
   )
}