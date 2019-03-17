import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';
import { contacts } from './contacts';
import SearchInput from './SearchInput';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: contacts,
      searchtext: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchtext: event.target.value })
  }

  render() {

    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.searchtext.toLowerCase());
    })

    return (
      <div>
        <h1>Friends List</h1>
        <SearchInput searchChange={this.onSearchChange} />
        <div className="container">
          <FriendsList contacts={filteredContacts} />
        </div>
      </div>
    );
  }
}

export default App;
