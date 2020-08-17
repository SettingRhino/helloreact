import React,{useState,useEffect,useRef} from "react"



const TJGuGuDan=(props)=>{
  const [numbers,setNumbers]=useState([])
  const [resultInput,setResultInput]=useState('')
  const [result,setResult]=useState('')
  const inputRef=useRef()
  useEffect(()=>{
    randomNumbers()
  },[])
  const randomNumbers=()=>{
    const firstNumber=Math.ceil(Math.random()*9)
    const lastNumber=Math.ceil(Math.random()*9)
    setNumbers([firstNumber,lastNumber])
  }
  const onChanged=(e)=>{
    console.log(e.target.value)
    setResultInput(e.target.value)
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    if(numbers[0]*numbers[1] === parseInt(resultInput))
    {
      setResult('정답')
      setResultInput('')
      randomNumbers();
    }
    else{
      setResult('땡')
    }
    inputRef.current.focus();

  }
  return(
    <div className='TJGuGuDan'>
    <div>{numbers[0]} X {numbers[1]} 은 </div>
    <form onSubmit={onSubmit}>
    <input ref={inputRef} type="number" onChange={onChanged} value={resultInput}/><button>결과</button>
    </form>
    <div>{result}</div>
    </div>
  )
}
export default TJGuGuDan
