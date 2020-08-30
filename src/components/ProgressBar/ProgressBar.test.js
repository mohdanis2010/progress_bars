import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(
    <ProgressBar
      buttonValues={[10, 20, 30]}
      changeCurrentBarValue={() => {}}
    />
  );
});

it('renders the correct number of ProgressBarIncrement components', () => {
  const wrapper = shallow(
    <ProgressBar
      buttonValues={[10, 20, 30]}
      changeCurrentBarValue={() => {}}
    />
  );

  expect(wrapper.find('ProgressBarIncrement').length).toBe(3);
});
