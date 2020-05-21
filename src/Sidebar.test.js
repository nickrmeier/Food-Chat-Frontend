import React from 'react';
import { shallow } from 'enzyme';
import { SideNav } from './Sidebar';
describe('Sidebar component', () => {
	it('should have Button element ', () => {
		const component = shallow(<SideNav />);
			expect(component.find('.side').length).toBe(1);
	});
});