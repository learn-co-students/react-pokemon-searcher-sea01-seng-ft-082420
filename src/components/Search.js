import React from 'react'

const Search = props => {

 const handleSearch = (e) =>{
  //  console.log(e.target.value)
    props.displayPokemon(e.target.value)
  }
  // console.log(props)


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => handleSearch(e)}/>
        <i className="search icon"   />
      </div>
    </div>
  )
}

export default Search
