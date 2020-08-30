import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BarWrapper from './BarWrapper';

Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  shallow(
    <BarWrapper
      activeBarIndex={1}
      barValues={[10, 20, 30]}
      changeActiveBar={() => {}}
    />
  );
});

it('renders the correct number of bars', () => {
  const component = shallow(
    <BarWrapper
      activeBarIndex={1}
      barValues={[10, 20, 30]}
      changeActiveBar={() => {}}
    />
  );

  expect(component.find('Bar').length).toBe(0);
});

