import React from 'react'
import Button from 'app1/Button'
import utils from 'app1/utils'
console.log(utils)

export default function App(){
  return (
    <div>
      <h1>我是container</h1>
      <hr></hr>
        下面是app1的Button组件：
        <Button></Button>
    </div>
  )
}