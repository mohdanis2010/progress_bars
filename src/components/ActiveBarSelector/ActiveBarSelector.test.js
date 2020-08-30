import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ActiveBarSelector from './ActiveBarSelector';
Enzyme.configure({ adapter: new Adapter() });
const changeActiveBarMock = jest.fn();

it('renders without crashing', () => {
  shallow(
    <ActiveBarSelector
      barValues={[-20, 1, 2, 3]}
      activeBarIndex={1}
      changeActiveBar={changeActiveBarMock}
    />
  );
});

it('renders the correct number of options', () => {
  const component = shallow(
    <ActiveBarSelector
      barValues={[-20, 1, 2, 3]}
      activeBarIndex={1}
      changeActiveBar={() => {}}
    />
  );

  const options = component.find('option');
  expect(options.length).toBe(4);
});

it('renders a friendly name for the options', () => {
  const component = shallow(
    <ActiveBarSelector
      barValues={[-20, 1, 2, 3]}
      activeBarIndex={1}
      changeActiveBar={() => {}}
    />
  );

  const options = component.find('option').at(1);
  expect(options.text()).toBe('Progress bar #2');
});

it('calls #changeActiveBar when clicked', () => {
  const component = shallow(
    <ActiveBarSelector
      barValues={[-20, 11, 12, 13]}
      activeBarIndex={1}
      changeActiveBar={changeActiveBarMock}
    />
  );

  component.find('.ActiveBarSelector__select').simulate('change', {
    target: {
      value: '11',
    },
  });

  expect(changeActiveBarMock).toHaveBeenCalledTimes(1);
  expect(changeActiveBarMock).toHaveBeenCalledWith(11);
});
