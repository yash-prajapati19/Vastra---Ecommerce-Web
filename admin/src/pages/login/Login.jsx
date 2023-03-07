import { useState } from 'react'
import {useDispatch} from 'react-redux';
import {login} from "../../redux/apiCalls";

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch,{ username, password});
    }
  return (
    <div 
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1 style={{marginBottom: 20}}>Admin Login</h1>
      <input type='text' style={{
        padding: 10,
        marginBottom: 20
      }} 
      placeholder='username' 
      onChange={e=>setUsername(e.target.value)} />
      <input type='password'
      style={{
        padding: 10,
        marginBottom: 20
      }}  
      placeholder='password' 
      onChange={e=>setPassword(e.target.value)}/>
      <button style={{width: "174px",padding: 10}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
