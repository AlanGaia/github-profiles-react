import React, { FormEvent, useEffect } from 'react'
import {SearchProps} from './SearchProps'

const Search: React.FC<SearchProps> = ({ setUsername }) => {

useEffect(() => setUsername('agusahumada'), [])

  return (
    <div>
      <form>
        <input type="text" value="AlanGaia" name="search"/>
        <button >Search</button>
      </form>
    </div>
  )
}

export default Search
