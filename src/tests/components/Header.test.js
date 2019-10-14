import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Header from '../../components/Header';

// import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', ()=> {
  const wrapper = shallow(<Header/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
})