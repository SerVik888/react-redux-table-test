import React from 'react'
import s from './table.module.css'

export const PostTableBody = ({ posts }) => {
  return (
    <tbody className={s.tableRow}>
      {posts.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
      ))}
    </tbody>
  )
}
