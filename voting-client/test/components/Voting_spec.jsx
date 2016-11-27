import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Option 1", "Option 2"]} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Option 1');
    expect(buttons[1].textContent).to.equal('Option 2');
  })

  it  ('invokes a callback whena button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = renderIntoDocument(
      <Voting pair={["Option 1", "Option 2"]}
              vote={vote} />
      );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Option 1');
  });
});