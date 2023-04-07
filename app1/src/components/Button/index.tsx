import React, { useState, useEffect } from "react";
import './index.less'
import { setLocalStorage, cleanLocalStorage } from "../../utils/index";

interface Props {
  name?: string
  age?: number
}

const Button: React.FC<Props> = () => {
  const [value, setValue] = useState(0)

  useEffect(()=>{
    if(value >= 1){
      setLocalStorage('count', value)
    }
  },[value])

  const handleClick = () => {
    setValue(v=>++v)
  }

  const handleClean = () => {
    cleanLocalStorage('count')
  }

  return (
    <div className="button_wrap">
      {/* <div>click count: {value}</div> */}
      <div className="btn" onClick={handleClick}>click me!</div>
      <div onClick={handleClean}>click to clean storage</div>
    </div>
  )
}

export default Button