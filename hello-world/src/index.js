import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: 'DannyRobinson'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        Hello {this.state.username} <br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});


ReactDOM.render(
  <div>
    <App />
    <HelloUser />
  </div>
  ,
  document.getElementById('root')
);