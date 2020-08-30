import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import { getAppDataService } from './api';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./api.js', () => ({
  getAppDataService: jest.fn(() => Promise.resolve({
    buttonValues: [],
    barValues: [],
  })),
}));

it('renders without crashing', () => {
  shallow(<App />);
});

it('fetches data when mounted', () => {
  mount(<App />);

  expect(getAppDataService).toHaveBeenCalledTimes(2);
});

it('when BarWrapper calls #changeActiveBar, it changes the state', () => {
  const component = shallow(<App />);

  expect(component.state().activeBarIndex).toBe(0);

  component.find('BarWrapper').prop('changeActiveBar')(2);

  expect(component.state().activeBarIndex).toBe(2);
});

it('when ActiveBarSelector calls #changeActiveBar, it changes the state', () => {
  const component = shallow(<App />);

  expect(component.state().activeBarIndex).toBe(0);

  component.find('ActiveBarSelector').prop('changeActiveBar')(3);

  expect(component.state().activeBarIndex).toBe(3);
});

describe('when ProgressBar calls #changeCurrentBarValue', () => {
  it('changes the state', () => {
    const component = shallow(<App/>);

    component.setState({
      activeBarIndex: 1, // the middle value
      barValues: [10, 20, 30],
    });

    component.find('ProgressBar').prop('changeCurrentBarValue')(30);

    expect(component.state().barValues).toEqual([10, 50, 30]);
  });

  
});
