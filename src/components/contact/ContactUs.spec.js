import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ContactUs from './ContactUs';

function setup(saving) {
  return shallow(<ContactUs />)
}

describe('visit Contact Us page', () => {
  it('shows the Contact page', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h1').text()).toEqual('Contact Us');
  });
});
