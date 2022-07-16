import React, { useState} from "react";
import { Select, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import Axios from "axios"

function ClinetForm (){
    const [loading, setLoading] = useState(false)
    const { Option } = Select;
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [type, setType] = useState("")

    const handleAddClient = async () => {
       
        addClient(password, email)
        
      }
const addClient = async(password, email) => {
  try {
              setLoading(true)
  const result = await Axios.post(
    "http://localhost:3900/account/register", {password, email, type})
    console.log(result.data.reverse())
    setLoading(false)
            } catch (e) {
              console.log("error")
}}
    
    return (
        <div className="app">
            <h1>ADD CLIENT</h1>
            <label>Email</label>
            &nbsp;
            <Input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  &emsp;
  <label>Password</label>
            &nbsp;
            <Input className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  &emsp;
  <label>Type</label>
  &nbsp;
  <Select
    showSearch
    style={{ width: 100 }}
    optionFilterProp="children"
    onChange={(value) => setType(value)}
  >
    <Option value="Naormal">Normal</Option>
    <Option value="Abonne">Abonne</Option>
  </Select>
  &nbsp;
  <Button type="primary" onClick={handleAddClient}>
      Add client
    </Button>
    <br/>
    <br/>
    <br/>
        </div>
    );
};

export default ClinetForm;