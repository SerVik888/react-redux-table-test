import React from 'react'
import { PostTableBody } from './PostTableBody'
import { PostTableHead } from './PostTableHead'
import s from './table.module.css'

export const PostTable = ({ posts, sortTop, sortDown, sortPosts }) => {
  if (!posts.length) {
    return <h1>Ничего не найдено</h1>
  }

  return (
    <table className={s.table}>
      <PostTableHead sortPosts={sortPosts} sortTop={sortTop} sortDown={sortDown} />
      <PostTableBody posts={posts} />
    </table>
  )
}
