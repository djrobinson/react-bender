import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducers';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Option1', 'Option2'],
      tally: {Option1: 2}
    }
  }
});

const socket = io(`${location.protocol}//{$location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

const routes =  <Route component={App}>
                  <Route path="/results" components={Results} />
                  <Route path="/" component={VotingContainer} />
                </Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);