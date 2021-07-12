import { mount } from 'enzyme';
import { App } from '../App';

const handleAddAppoinment = jest.fn();

describe('App Tests', () => {
  const wrapper = mount(<App />);

  beforeEach(() => jest.clearAllMocks());

  test('should match snaphot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have correct title when no appoinments are added', () => {
    expect(wrapper.find('h2').at(1).text()).toBe('Add an Appoinment');
  });

  test('should not call handleAddAppoinment with no inputs', () => {
    wrapper.find('button').simulate('click');

    expect(handleAddAppoinment).toHaveBeenCalledTimes(0);
  });
});
