import React from 'react'

function Search() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchIcon />
        <input placeholder='Search for Artists, Songs, or Artists' type='text' 


name='search'
type='text' 
value={search.search}
onChange ={handleChange}
/>
<button onClick={handleSubmit}>Submit</button>
</form>
      </div>

  )
}

export default Search;