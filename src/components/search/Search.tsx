import React, { useState } from 'react'
import {SearchProps} from './SearchProps'

const Search: React.FC<SearchProps> = ({ setUsername }) => {

  const [data, setData] = useState({searchValue:''});

  const {searchValue} = data;

  const handleSubmit = e  => {
    e.preventDefault();
    setUsername(searchValue);    
  }

  //Handle change Search input value
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleChange} name="searchValue"/>
        <button type="submit" >Search</button>
      </form>
    </div>
  )
}

export default Search
