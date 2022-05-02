import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { Pagination } from './components/pagination/Pagination'
import { PostSearch } from './components/search/PostSearch'
import { PostTable } from './components/table/PostTable'
import { useActions } from './hooks/useActions'

function App() {
  const { posts, error, isLoading, sortPosts } = useSelector(state => state.posts)
  const { currentPosts, pageSize, currentPage } = useSelector(state => state.paginate)
  const { fetchPosts, sortTop, sortDown, filterPosts, setCurrentPage, setCurrentPosts } = useActions()

  useEffect(() => {
    fetchPosts()
  }, [])

  if (isLoading) {
    return <h1>Подождите идёт загрузка данных</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  // Выводим номер страницы в адресную строку браузера
  window.history.pushState('', '', currentPage)

  return (
    <div className='app'>
      <div className='searchWrapper'>
        <PostSearch filterPosts={filterPosts} />
      </div>
      <div className='tableWrapper'>
        <PostTable posts={currentPosts} sortTop={sortTop} sortDown={sortDown} sortPosts={sortPosts} />
      </div>
      <div className='paginateWrapper'>
        <Pagination
          setCurrentPosts={setCurrentPosts}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          posts={posts}
          pageSize={pageSize}
        />
      </div>
    </div>
  )
}

export default App
