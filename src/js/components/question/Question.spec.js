import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Question from './Question';

function setup(saving) {
  return shallow(<Question />)
}
//
//describe('visit Question page', () => {
//  it('shows the Question page', () => {
//    const wrapper = setup(false);
//    expect(wrapper.find('h1').text()).toEqual('Questions');
//  });
//});
