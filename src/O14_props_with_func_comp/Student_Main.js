import Student from './Student';

export default function Student_Main()
{
   return (
      <div className="App">
        <Student name={"Anil"} email = {"anil123@gmail.com"} other={{address: 'Delhi', mobile: "8777887787"}}/>
        <Student name={"Ram"} email = {"ram123@gmail.com"} other={{address: 'Hyderabad', mobile: "8777887787"}}/>
        <Student name={"Kunal"} email = {"kunal123@gmail.com"} other={{address: 'Bengaluru', mobile: "8777887787"}}/>
      </div>
    );
}
