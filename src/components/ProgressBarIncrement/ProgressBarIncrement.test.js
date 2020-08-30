import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBarIncrement from './ProgressBarIncrement';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(
    <ProgressBarIncrement
      value={10}
      changeCurrentBarValue={() => {}}
    />
  );
});

it('calls #changeCurrentBarValue with the correct value when clicked', () => {
  const changeCurrentBarValue = jest.fn();

  const component = shallow(
    <ProgressBarIncrement
      value={10}
      changeCurrentBarValue={changeCurrentBarValue}
    />
  );

  component.simulate('click');

  expect(changeCurrentBarValue).toHaveBeenCalledTimes(1);
  expect(changeCurrentBarValue).toHaveBeenCalledWith(10);
});
