import React, { useEffect } from 'react'
import s from './pagination.module.css'

export const Pagination = ({ setCurrentPage, posts, pageSize, setCurrentPosts, currentPage }) => {
  useEffect(() => {
    setCurrentPosts(posts, currentPage)
  }, [posts])

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(posts.length / pageSize); i++) {
    pageNumbers.push(i)
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setCurrentPosts(posts, currentPage - 1)
    }
  }
  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
      setCurrentPosts(posts, currentPage + 1)
    }
  }

  return (
    <div className={s.pagination}>
      <button className={s.paginationButton} onClick={prevPage}>
        Назад
      </button>
      <div>
        {pageNumbers.map(number => (
          <button
            key={number}
            className={number === currentPage ? s.activePageNum : s.pageNum}
            onClick={() => {
              setCurrentPage(number)
              setCurrentPosts(posts, number)
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <button className={s.paginationButton} onClick={nextPage}>
        Далее
      </button>
    </div>
  )
}
