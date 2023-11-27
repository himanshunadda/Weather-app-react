import React from 'react'

export default function Search(props) {
    const handleOnChange = (event)=>{
      props.setPlace(event.target.value);
      console.log(props.place);
    }
  return (
    <div className=' d-flex justify-content-center align-items-center'>
      <form>
        <input 
           className=" search form-control me-2" type="search" onChange={handleOnChange} placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  )
}
