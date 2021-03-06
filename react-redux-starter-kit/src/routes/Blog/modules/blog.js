import { v4 } from 'node-uuid'
import Moment from 'moment';
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_BLOG_POST = 'ADD_BLOG_POST'
export const DELETE_BLOG_POST = 'DELETE_BLOG_POST'
export const EDIT_BLOG_POST = 'EDIT_BLOG_POST'
export const UPDATE_BLOG_POST = 'UPDATE_BLOG_POST'
export const CHANGE_DATE = 'CHANGE_DATE'
// ------------------------------------
// Actions
// ------------------------------------

export function addBlogPost (values = {}) {
  console.log("Add Blog Post Called", values);
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

export function changeDate (data = Moment()) {
  console.log("Change Selected Date", data);
  return {
    type: CHANGE_DATE,
    selectedDate: data
  }
}

const addBlogPostHelper = (state, action) => {
  console.log("Add Blog Post State: ", state);
  action.payload.date = state.selectedDate;

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
      el.isEditable = false;
      console.log("Update Blog Post Helper", el);
      return el;
    }
    return el;
  })
  return newBlogPosts;
}

const changeDateHelper = (state, action) => {
  return action.selectedDate;

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
  },
  [CHANGE_DATE]: (state, action) => {
    const selectedDate = changeDateHelper(state, action);
    return Object.assign({}, state, {
      selectedDate: selectedDate
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