import React,{useState} from 'react'
import TJEventHandletoprops from './TJEventHandletoprops'
import TJGivingDataFromChild from './TJGivingDataFromChild'
const TJEventEx=(props)=>{
  const [number1,setNumber1]=useState(0);
  const [number2,setNumber2]=useState(0);
  const handlerParentToChild=(e)=>{
    e.preventDefault();
    setNumber1(number1+1)
  }
  const GivingDataFromChildFunc=(childdata)=>{
    setNumber2(childdata)
  }
  return(
    <div>
    <div>이벤트핸들러 props로 넘겨주기, 상태 props로 넘겨주기</div>
    <div>parent state : {number1}</div>
    <TJEventHandletoprops handlerParentToChild={handlerParentToChild} parentnumber1={number1}/>
    <div>parent state2 From Child state: {number2}</div>
    <TJGivingDataFromChild giveParent={GivingDataFromChildFunc}/>
    </div>
  );
}
export default TJEventEx
