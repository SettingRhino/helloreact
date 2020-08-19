import React,{useState,useEffect} from 'react'

const TJGivingDataFromChild =(props)=>{
  const [childdata,setChilddata]=useState(1)
  const childFunction=(e)=>{
    if(e!==undefined)
    e.preventDefault();
    setChilddata(childdata*2)
    //props.giveParent(childdata)
    //비동기 useEffect로 해결
  }
  useEffect(()=>{props.giveParent(childdata)},[childdata])
  return(
    <div>
    <div>childState : {childdata}</div>
    <button onClick={childFunction}>ToParent</button>
    </div>
  );
}
export default TJGivingDataFromChild;
