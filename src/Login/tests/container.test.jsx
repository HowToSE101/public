import test from 'tape';
import {LoginContainer} from 'Login/Container';
import React from 'react';
import {shallow} from 'enzyme';

test('render LoginContainer', (t) => {
  t.plan(1);
  const wrapper = shallow(<LoginContainer />);
  t.equal(wrapper.find('button').text(), 'Log in');
});
