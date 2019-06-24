import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import NoteListItem from 'containers/NoteListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import NotesList from '../index';

describe('<NotesList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <NotesList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NotesList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the Notes if loading was successful', () => {
    const notes = [{
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-boilerplate/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'react-boilerplate/react-boilerplate',
    }];
    const renderedComponent = shallow(
      <NotesList
        notes={notes}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={notes} component={NoteListItem} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <NotesList
        notes={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
