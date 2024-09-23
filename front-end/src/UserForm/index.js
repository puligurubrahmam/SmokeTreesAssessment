import './index.css'
import {useState} from 'react'
const UserForm =(props)=>
{
    const [name,setName] = useState('');
  const [street,setStreet] = useState('');
  const [city,setCity] = useState('');
  const [state,setStateName] = useState('');
  const [zip_code,setZipCode] = useState('');
  const submitFormDetails= async(event)=>
  {
    event.preventDefault();
    const option = {
      method:'POST',
      body:JSON.stringify({name,street,city,state,zip_code}),
      headers:{
        'Content-type':'application/json'
      }
    }
    const response = await fetch("http://localhost:5000/store",option);
    const result = await response.json();
    console.log(result);
    setName('');
    setStreet('');
    setCity('');
    setStateName('');
    setZipCode('');
    const {history} = props;
    history.replace('/submitted');
  }
  return (
    <div className='container'>
      <h1>User Addresses From</h1>
      <form onSubmit={submitFormDetails}>
        <div className='innerContainer'>
          <label>
            Name:
          </label>
          <input placeholder='Enter name' value={name} onChange={(event)=>{setName(event.target.value)}}/>
        </div>
        <div className='innerContainer'>
          <label>
            Street:
          </label>
          <input placeholder='Enter street' value={street} onChange={(event)=>{setStreet(event.target.value)}}/>
        </div>
        <div className='innerContainer'>
          <label>
            City:
          </label>
          <input placeholder='Enter city' value={city} onChange={(event)=>{setCity(event.target.value)}}/>
        </div>
        <div className='innerContainer'>
          <label>
            State:
          </label>
          <input placeholder='Enter state' value={state} onChange={(event)=>{setStateName(event.target.value)}}/>
        </div>
        <div className='innerContainer'>
          <label>
            State:
          </label>
          <input placeholder='Enter zip-code' value={zip_code} onChange={(event)=>{setZipCode(event.target.value)}}/>
        </div>
        <button onClick={submitFormDetails}>Submit</button>
      </form>
    </div>
  )
}
export default UserForm