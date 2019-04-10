import React, { Component } from 'react';
import { Image, Header, Segment } from 'semantic-ui-react'
import phoneBook from './phoneBook.svg';
import ContactsPage from './components/ContactsPage.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment inverted>
          <Header as='h2' inverted color='grey'>
            Contact Book
          </Header>
          <Image src={phoneBook} centered size='tiny'/>
        </Segment>
      <ContactsPage />
      </div>
    );
  }
}

export default App;
