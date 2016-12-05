import { combineReducers } from 'redux'
import locationReducer from './location'
import { reducer as formReducer } from 'redux-form'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
    form: formReducer.plugin({
      create: (state, action) => { // <------ 'contact' is name of form given to reduxForm()
        switch(action.type) {
          case 'redux-form/SET_SUBMIT_SUCCEEDED':
            return {};       // <--- blow away form data
          default:
            return state;
        }
      }
    })
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
