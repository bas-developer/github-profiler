import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./home.css"
import Header from './header/Header';
import Input from './inpuSection/Input';
import Output from './outputSection/Output';

export default function Home() {
const [data,setData] =useState("");
// const [person,setPeson] =useState("");
const [fetching,setFetching] =useState(false)
const [error,setError] =useState(null);




const FetchingData = async (person)=>{
try {
setFetching(true);console.log("fetching...........");

const respose  = await axios.get(`https://api.github.com/users/${person}`);
const data  = await respose.data;
setData(data);
console.log(data.name);
  
} catch (error) {
  setError(error);
  console.log("Error Of Fetching........ \n"+error);
}
finally{
  setFetching(false)
}


}
useEffect(()=>{
FetchingData()

},[])
  return (
  <>
  <section className="home-body">
<Header/>
<Input find={FetchingData}  />
<Output data={data} fetching={fetching}/>
  </section>
  </>

  )
}
