import React from 'react';
import { shallow, render } from 'enzyme';

import NoteLink from '../NoteLink';

describe('<NoteLink />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<NoteLink />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<NoteLink />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<NoteLink id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<NoteLink attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
