import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
 
 
 
    return (
    <>

<nav class={props.cls==="dark"?`navbar navbar-expand-lg navbar-white bg-white`:`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div class="container-fluid">
    <Link className="navbar-brand">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link to="/">
      <button>Textutil</button>
       </Link>
        </li>
        
        <li class="nav-item">
        <Link to="/about">   
       <button>About</button>
       </Link>
        </li>
       
        
      
      </ul>
      <form class="d-flex">
        
<button type="button"  onClick={()=>{props.togglemode('primary')}} style={{height:'30px' }} class="btn btn-primary border border-warning border-4"></button>
<button type="button" onClick={()=>{props.togglemode('secondary')}} class="btn btn-secondary  border border-warning border-4"></button>
<button type="button" onClick={()=>{props.togglemode('success')}} class="btn btn-success  border border-warning border-4"></button>
<button type="button" onClick={()=>{props.togglemode('danger')}} class="btn btn-danger  border border-warning border-4"></button>

<button type="button"  onClick={()=>{props.togglemode('light')}} class="btn btn-light  border border-warning border-4"></button>
<button type="button" onClick={()=>{props.togglemode('dark')}} class="btn btn-dark  border border-warning border-4"></button>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar