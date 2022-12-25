import './style1.css';
import style from './custom.module.css';

export default function User()
{
   return (
      <div>
         <h1 className='primary'>Style Type 1 in React JS</h1>
         <h1 style={{color: 'red', backgroundColor:'black'}}>Style Type 2 Inline in React JS</h1>
         {/* Modular CSS */}
         <h1 className={style.success}>Style Type 2 Inline in React JS</h1>
      </div>
   )
}