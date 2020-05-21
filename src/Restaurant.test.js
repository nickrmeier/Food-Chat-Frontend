import React from 'react';
import { shallow } from 'enzyme';
import  Restaurant  from './Restaurant';

describe('Restaurant', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Restaurant debug />);
        expect(component).toMatchSnapshot();
    });
});