import React,{useEffect,useState} from 'react'

function Playlist() {
const[search,setSearch] = useState("")

function handleChange(e){
  setSearch(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  fetch(`/spotify_api/${search}`)
  .then((r)=>r.json())
  .then((results)=> console.log(results))
}

  return (
    <div>
      <form onSubmit={handleSubmit}>


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

export default Playlist