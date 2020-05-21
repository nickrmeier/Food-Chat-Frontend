import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './HomePage';
describe('HomePage component', () => {
	it('should have className cities and length to be 3', () => {
		const component = shallow(<Home />);
		expect(component.find('.cities').length).toBe(3);
	});
});
describe('HomePage component', () => {
	it("should not have div element ", () => {
		const component = shallow(<Home/>);
		expect(component.contains(<div></div>)).toBe(false);
	});
});
