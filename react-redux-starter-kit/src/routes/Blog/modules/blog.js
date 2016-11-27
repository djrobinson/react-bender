// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const ADD_BLOG_POST = 'ADD_BLOG_POST'
// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function addBlogPost (post = {}) {
  console.log("Add Blog Post CAlled");
  return {
    type: ADD_BLOG_POST,
    payload: post
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}


const addBlogPostHelper = (state, action) => {
  const newBlogPosts = [...state.blogPosts, action.payload];
  return newBlogPosts;
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_BLOG_POST]: (state, action) => {
    const blogPosts = addBlogPostHelper(state, action);
    return Object.assign({}, state, {
      blogPosts: blogPosts
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  blogPosts: []
};
export default function blogReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}