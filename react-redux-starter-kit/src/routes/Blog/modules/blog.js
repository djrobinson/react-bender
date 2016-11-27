import { v4 } from 'node-uuid'
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_BLOG_POST = 'ADD_BLOG_POST'
// ------------------------------------
// Actions
// ------------------------------------

export function addBlogPost (values = {}) {
  console.log("Add Blog Post CAlled");
  values.id = v4();
  return {
    type: ADD_BLOG_POST,
    payload: values
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

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