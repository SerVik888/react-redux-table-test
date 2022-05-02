import React from 'react'
import s from './table.module.css'

export const PostTableHead = ({ sortTop, sortDown, sortPosts }) => {
  return (
    <thead className={s.tableHead}>
      <tr>
        <th
          onClick={() => {
            sortPosts === 'id' ? sortDown('id') : sortTop('id')
          }}
          className={sortPosts === 'id' ? s.sortColumn : s.column}
        >
          <span>ID</span>
        </th>
        <th
          onClick={() => {
            sortPosts === 'title' ? sortDown('title') : sortTop('title')
          }}
          className={sortPosts === 'title' ? s.sortColumn : s.column}
        >
          <span>Заголовок</span>
        </th>
        <th
          onClick={() => {
            sortPosts === 'body' ? sortDown('body') : sortTop('body')
          }}
          className={sortPosts === 'body' ? s.sortColumn : s.column}
        >
          <span>Описание</span>
        </th>
      </tr>
    </thead>
  )
}
