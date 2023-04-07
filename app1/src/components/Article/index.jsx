import React, { useState } from 'react'
import './index.less'
import Button from '../Button'

export default function Article(){
  const [value, setValue] = useState(0)

  const handleAddArticle = () => {
    setValue(v => ++v)
  }
  
  return (
    <div className='article_wrap'>
      <h1>article</h1>
      <hr></hr>
      <div className='header'>
        <h3>article list</h3>
        <div>article counts: {value}</div>
      </div>
      <div className='content' onClick={handleAddArticle}>
        add an article
      </div>
      <Button></Button>
    </div>
  )
}