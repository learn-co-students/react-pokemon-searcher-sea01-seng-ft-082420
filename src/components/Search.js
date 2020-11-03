import React from 'react'

const Search = ({ handleChange }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type='text' onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
