import React, { useEffect, useState } from 'react';
import "./input.css"

export default function Input({find}) {
  const [person,setPerson] =useState("")

useEffect(()=>{
find("hiteshchoudhary")
},[])

const FindPerson = ()=>{
  if(person==="") {find("hiteshchoudhary")}
  find(person)
}


  return (<>


<div className="input-body">

<div className="input">

    <div className="input-github--logo"><i class="fa-brands fa-github"></i></div>
    <h1 className="slash">/</h1>
    <input value={person}  onChange={(e)=>{  setPerson(e.target.value) 
     }} className='search-input' type="text" placeholder='my-name' />
    <button onClick={FindPerson} className='find--btn'>find</button>
</div>


</div>







</>  )
}
