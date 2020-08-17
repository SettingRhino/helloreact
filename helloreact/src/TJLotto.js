import React, {useState} from "react"

const TJLotto = (props)=>{
    const [lottonumbers,setLottoNumbers]= useState([])
    const [lottoAPI,setLottoAPI]=useState("")
    const handlesearchlotto=(e)=>{
        const templottos=[]
        while(templottos.length<7){
            const n =Math.ceil(Math.random()*45);
            if(!templottos.includes(n)){
                templottos.push(n)
            }
        }
        setLottoNumbers(templottos.concat())
    }
  /*  const  callApi = (e) => {
        e.preventDefault()
        //
        fetch("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903",{
          mode: 'cors',
          headers:{
            'Access-Control-Allow-Origin':'*'
          }
        })
            .then(res => res.json())
            .then(json => {
                setLottoAPI(json.toString())
            })
    }*/



    return (//ListItems를 하위로 만들어준다.=>props로 배열을 넘겨주면 ListItem은 Item을 그만큼 만들어줌
    <div>
        {console.log(lottoAPI)}
        <div>{lottonumbers[0]}</div>
        <div>{lottonumbers[1]}</div>
        <div>{lottonumbers[2]}</div>
        <div>{lottonumbers[3]}</div>
        <div>{lottonumbers[4]}</div>
        <div>{lottonumbers[5]}</div>
        <div>{lottonumbers[6]}</div>
        <button onClick={handlesearchlotto}>조회</button>

    </div>
)
}
export default TJLotto
