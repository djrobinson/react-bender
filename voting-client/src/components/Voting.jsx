import React from 'react';
import {connect} from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';

export const Voting = React.createClass({
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winnder={this.props.winner} /> :
        <Vote {...this.props} />
      }
    </div>;
  }
})

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);