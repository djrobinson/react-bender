import { v4 } from 'node-uuid'
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_BLOG_POST = 'ADD_BLOG_POST'
export const DELETE_BLOG_POST = 'DELETE_BLOG_POST'
export const EDIT_BLOG_POST = 'EDIT_BLOG_POST'
export const UPDATE_BLOG_POST = 'UPDATE_BLOG_POST'
// ------------------------------------
// Actions
// ------------------------------------

export function addBlogPost (values = {}) {
  console.log("Add Blog Post Called");
  values.id = v4();
  values.isEditable = false;
  return {
    type: ADD_BLOG_POST,
    payload: values
  }
}

export function deleteBlogPost (id = '') {
  console.log("Delete Blog Post Called");
  return {
    type: DELETE_BLOG_POST,
    id: id
  }
}

export function editBlogPost (id = '') {
  console.log("Edit Blog Post called");
  return {
    type: EDIT_BLOG_POST,
    id: id
  }
}

export function updateBlogPost (values = {}) {
  console.log("Update blog post claled");
  return {
    type: UPDATE_BLOG_POST,
    payload: values
  }
}

const addBlogPostHelper = (state, action) => {
  const newBlogPosts = [...state.blogPosts, action.payload];
  return newBlogPosts;
}

const removeBlogPostHelper = (state, action) => {
  const newBlogPosts = state.blogPosts.filter((el) => {
    if (el.id !== action.id) return el
  })
  return newBlogPosts;
}

const editBlogPostHelper = (state, action) => {
  const newBlogPosts = state.blogPosts.map((el) => {
    if (el.id === action.id){
      el.isEditable = !el.isEditable;
      console.log("Here was the next editable one: ", el);
      return el;
    } else if (el.isEditable) {
      console.log("Here was the last editable one: ", el);
      el.isEditable = !el.isEditable;
      return el;
    } else {
      return el;
    }
  })
  return newBlogPosts;
}

const updateBlogPostHelper = (state, action) => {
  console.log("Update Blog Post State: ", state);
  const newBlogPosts = state.blogPosts.map((el) => {
    if (el.id === action.payload.id){
      el.firstName = action.payload.firstName;
      el.lastName = action.payload.lastName;
      el.email = action.payload.email;
      el.isEditable = false;
      console.log("Update Blog Post Helper", el);
      return el;
    }
    return el;
  })
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
  },
  [DELETE_BLOG_POST]: (state, action) => {
    const blogPosts = removeBlogPostHelper(state, action);
    return Object.assign({}, state, {
      blogPosts: blogPosts
    })
  },
  [EDIT_BLOG_POST]: (state, action) => {
    const blogPosts = editBlogPostHelper(state, action);
    return Object.assign({}, state, {
      blogPosts: blogPosts
    })
  },
  [UPDATE_BLOG_POST]: (state, action) => {
    const blogPosts = updateBlogPostHelper(state, action);
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