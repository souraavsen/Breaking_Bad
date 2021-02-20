import Header from './Component/Header'
import Characters from "./Component/Characters";
import Search from "./Component/Search";


import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


const App = () => {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchitem = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(response.data)
      setLoading(false)
    };
    fetchitem();
  },[query]);


  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q)=>{setQuery(q)} }/>
      <Characters loading={loading} items={items} />
    </div>
  );
}

export default App;
