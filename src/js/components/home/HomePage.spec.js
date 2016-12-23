import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import HomePage from './HomePage';

function setup() {
  return shallow(<HomePage />)
}

describe('visit the index route', () => {
  it('shows the home page', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h1').text()).toEqual('Questions app');
  });
});
