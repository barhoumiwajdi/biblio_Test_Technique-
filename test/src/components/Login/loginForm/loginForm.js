import React, { useState } from "react";
import { Select, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import Axios from "axios";

function LoginForm (){
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
       
        login(email, password)
        
      }
const login = async(email, password) => {
  try {
              setLoading(true)
  const result = await Axios.post(
    "http://localhost:3900/local", {email, password})
    console.log(result.data.reverse())
    setLoading(false)
            } catch (e) {
              console.log("error")
}}
    
    return (
        <div className="app">
            <h1>Login</h1>
            <label>Email</label>
            &nbsp;
            <Input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  &emsp;
  <label>Password</label>
  &nbsp;
  <Input className="input" placeholder="Email" value={password} onChange={(e) => setPassword(e.target.value)} />
  <Button type="primary" onClick={handleLogin}>
      Login
    </Button>
        </div>
    );
};

export default LoginForm;