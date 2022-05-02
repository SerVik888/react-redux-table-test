import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchPosts,
  setError,
  filterPosts,
  setIsLoading,
  setPosts,
  sortDown,
  sortTop,
} from '../store/reducers/postReducer'
import { setCurrentPage, setCurrentPosts } from '../store/reducers/paginateReducer'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(
    { fetchPosts, setPosts, setError, setIsLoading, filterPosts, sortTop, sortDown, setCurrentPage, setCurrentPosts },
    dispatch
  )
}
