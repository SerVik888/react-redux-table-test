const initialState = {
  pageSize: 10,
  currentPage: 1,
  currentPosts: [],
}

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_POSTS = 'SET_CURRENT_POSTS'

export const paginateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page }
    case SET_CURRENT_POSTS:
      const lastItemIndex = action.currentPage * state.pageSize
      const firstItemIndex = lastItemIndex - state.pageSize
      return { ...state, currentPosts: action.posts.slice(firstItemIndex, lastItemIndex) }
    default:
      return state
  }
}

export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page })
export const setCurrentPosts = (posts, currentPage) => ({ type: SET_CURRENT_POSTS, posts, currentPage })
