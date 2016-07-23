import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import AboutPage from './AboutPage';

function setup(saving) {
  return shallow(<AboutPage />)
}

describe('visit about page', () => {
  it('shows the about page', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h1').text()).toEqual('About Page');
  });
});
