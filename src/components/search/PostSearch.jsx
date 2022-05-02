import React, { useState } from 'react'
import s from './postSearch.module.css'

export const PostSearch = ({ filterPosts }) => {
  const [value, setValue] = useState('')

  const search = () => {
    filterPosts(value)
  }

  return (
    <div className={s.search}>
      <input placeholder='Поиск' value={value} onChange={e => setValue(e.target.value.trim())} />
      <button onClick={search}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'
          alt=''
        />
      </button>
    </div>
  )
}
