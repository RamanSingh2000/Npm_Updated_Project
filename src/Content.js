import React,{ useState} from 'react'

const Content = (props) => {
 console.log("cls value in content:",props.cls)

  
 const [first, setfirst] = useState('')
 var reg=first.replace(/\s/g, "")
 const uppercase=()=>{

    let v=first.toUpperCase();
    setfirst(v);


 }

 const cleartext=()=>{


    setfirst('');
 }

//  const copytext=()=>{

//     navigator.clipboard.writeText(first);


//  }


const countWords=(str)=> {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

  
 const lowerCase=()=>{


    let v=first.toLowerCase();
    setfirst(v);
 }
    return (
    <>
    <diV  class="container">
    <h2 my-3 class={props.cls==="dark"?`text-white`:`text-dark`}>{props.title}</h2>
    <div class="mb-3">
      <textarea class="form-control" value={first} onChange={(e)=>{setfirst(e.target.value)}} id="Textarea1" rows="3"></textarea>
      </div>

      <button type="button"  onClick={uppercase} class={props.cls==="primary"?`btn btn-warning `:`btn btn-primary`} >Uppercase</button>
      <button type="button"  class={props.cls==="primary"?`btn btn-warning mx-3 `:`btn btn-primary mx-3`} onClick={lowerCase} >Lowercase</button>
      <button type="button"  class={props.cls==="primary"?`btn btn-warning  `:`btn btn-primary `} onClick={cleartext} >Clear Text</button>
      <button type="button"  class={props.cls==="primary"?`btn btn-warning mx-3 `:`btn btn-primary mx-3 `} onClick={()=>{ navigator.clipboard.writeText(first)}} >Copy Text</button>

      <div  class="my-3">
      <h3 class={props.cls==="dark"?`text-white`:`text-dark`} >{reg.length>0? first:"Nothing to Preview"}</h3>
      {reg.length>0 && <p class={props.cls==="dark"?`text-white`:`text-dark`}>There are {reg.length} characters in this text</p>}
     {reg.length>0 && <p class={props.cls==="dark"?`text-white`:`text-dark`}>There are {countWords(first)} words</p>}
     {reg.length>0 && <p class={props.cls==="dark"?`text-white`:`text-dark`}>Average time to read this text is : {countWords(first)/130} minutes</p>}
      </div>
      </diV>
    </>
  ) 
}

export default Content