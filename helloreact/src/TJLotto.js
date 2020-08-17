import React, {useState} from "react"
import TJLottoBall from "./TJLottoBall"

const TJLotto = (props)=>{
  //  const [lottonumbers,setLottoNumbers]= useState([])
    const [lottoball,setLottoball]=useState([])
  //  const [lottoAPI,setLottoAPI]=useState("")
    const handlesearchlotto=(e)=>{
        const templottos=[]
        while(templottos.length<7){
            const n =Math.ceil(Math.random()*45);
            if(!templottos.includes(n)){
                templottos.push(n)
            }
        }
        setLottoball(templottos.map((num)=>{
          return(<TJLottoBall lottonumber={num}/>)
        }))
    }

    return (//ListItems를 하위로 만들어준다.=>props로 배열을 넘겨주면 ListItem은 Item을 그만큼 만들어줌
        <div>
        <button onClick={handlesearchlotto}>조회</button>
        <div>{lottoball}</div>
        </div>
      )
}
export default TJLotto
