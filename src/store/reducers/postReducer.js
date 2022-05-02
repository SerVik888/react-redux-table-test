import { API } from '../../api/api'

const initialState = {
  posts: [],
  isLoading: true,
  error: '',
  sortPosts: null,
}

const SET_POSTS = 'SET_POSTS'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_ERROR = 'SET_ERROR'
const SET_FILTER_POSTS = 'SET_FILTER_POSTS'
const SORT_TOP = 'SORT_TOP'
const SORT_DOWN = 'SORT_DOWN'

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts, isLoading: false }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_ERROR:
      return { ...state, error: action.error, isLoading: false }
    case SET_FILTER_POSTS:
      return {
        ...state,
        currentPage: 1,
        posts: state.posts.filter(post => {
          return (
            String(post.id).toLowerCase().includes(action.string.toLowerCase()) ||
            String(post.title).toLowerCase().includes(action.string.toLowerCase()) ||
            String(post.body).toLowerCase().includes(action.string.toLowerCase())
          )
        }),
      }
    case SORT_TOP:
      return {
        ...state,
        posts: [...state.posts.sort((a, b) => (a[action.item] < b[action.item] ? 1 : -1))],
        sortPosts: action.item,
      }
    case SORT_DOWN:
      return {
        ...state,
        posts: [...state.posts.sort((a, b) => (a[action.item] > b[action.item] ? 1 : -1))],
        sortPosts: null,
      }
    default:
      return state
  }
}

export const setPosts = posts => ({ type: SET_POSTS, posts })
export const setError = error => ({ type: SET_ERROR, error })
export const setIsLoading = isLoading => ({ type: SET_IS_LOADING, isLoading })
export const filterPosts = string => ({ type: SET_FILTER_POSTS, string })
export const sortTop = item => ({ type: SORT_TOP, item })
export const sortDown = item => ({ type: SORT_DOWN, item })

export const fetchPosts = () => async dispatch => {
  dispatch(setIsLoading(true))
  const data = await API.getPosts()
  if (!data.message) {
    dispatch(setPosts(data))
  } else {
    dispatch(setError(data.message))
  }
  dispatch(setIsLoading(false))
}
