import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from './NavBar';
describe('NavBar component', () => {
	it('should have className title and the length to be 1 ', () => {
		const component = shallow(<NavigationBar />);
		expect(component.find('.title').length).toBe(1);
	});
});
describe('NavBar component', () => {
	it("should not have h1 element", () => {
		const component = shallow(<NavigationBar />);
		expect(component.contains(<h1></h1>)).toBe(false);
	});
});

