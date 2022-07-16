import React, { useState, useEffect} from "react";
import { Select, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import Axios from "axios"

function CategorieForm (){
    const [loading, setLoading] = useState(false)
    const { Option } = Select;
    const [nomcategorie, setNomcategorie] = useState("")
    const [listeDesLivres, setListeDesLivres] = useState([{}])
    const [livre, setLivre] = useState([])
    useEffect(() => {
        async function getLivre(){
      const res = await Axios.get("http://localhost:3900/livres")
      console.log("data livres", res.data.reverse()) 
      setLivre(res.data.reverse())}
      getLivre();
      },[])

    const handleAddCategorie = async () => {
       
        addCategorie(nomcategorie,listeDesLivres)
        
      }
const addCategorie = async(nomcategorie, listeDesLivres) => {
  try {
              setLoading(true)
  const result = await Axios.post(
    "http://localhost:3900/categorie/add", {nomcategorie, listeDesLivres})
    console.log(result.data.reverse())
    setLoading(false)
            } catch (e) {
              console.log("error")
}}
    
    return (
        <div className="app">
            <h1>ADD LIVRES</h1>
            <label>Nom categorie</label>
            &nbsp;
            <Input className="input" placeholder="Nom categorie" value={nomcategorie} onChange={(e) => setNomcategorie(e.target.value)} />
  &emsp;
  <label>List des Livres</label>
  &nbsp;
  <Select
    showSearch
    style={{ width: 100 }}
    optionFilterProp="children"
    onChange={(value) => setListeDesLivres([{value}])}
  >
{livre?.map(elt=> <Option value={elt._id}>{elt.titre}</Option> )}
    
  </Select>
  &nbsp;
  <Button type="primary" onClick={handleAddCategorie}>
      Add categorie
    </Button>
    <br/>
    <br/>
    <br/>
        </div>
    );
};

export default CategorieForm;