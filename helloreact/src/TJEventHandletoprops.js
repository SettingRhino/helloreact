import React from 'react'

const TJEventHandletoprops=(props)=>{
  return(
    <div>
      <div>Child props : {props.parentnumber1}</div>
      <button onClick={props.handlerParentToChild}>handletake</button>
    </div>
  );
}

export default TJEventHandletoprops;
