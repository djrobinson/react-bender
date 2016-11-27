import moment from 'moment';
// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_DATE = 'SELECT_DATE'
// ------------------------------------
// Actions
// ------------------------------------


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_DATE]: (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  selectedDate: new Date()
};
export default function calendarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}