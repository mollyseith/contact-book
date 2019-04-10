import React from 'react';
import ReactDOM from 'react-dom';
import ContactsPage from './components/ContactsPage';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<ContactsPage />);
});
