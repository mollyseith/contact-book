import React from "react";
import ContactCard from "./ContactCard.js"
import { Container, Button } from 'semantic-ui-react'

class ContactsPage extends React.Component {

  state = {
    contacts: [],
    favorites: [],
    page: 0
  };

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://lamppoststudios.activehosted.com/api/3/contacts",{
      method: "GET",
      headers:{ "Api-Token": process.env.REACT_APP_API_KEY}
    })
    .then(res => res.json())
    .then(res => this.setContacts(res.contacts));
  }

  setContacts = data => {
    this.setState({
      contacts: data
    });
  };

  addFavorite = id => {
    let selectedContact = this.state.contacts.find(contact => id === contact.id);
    if (this.state.favorites.includes(selectedContact)){
      alert("You've already favorited this contact")
    }
    else{
      this.setState({
        favorites: [...this.state.favorites, selectedContact]
      });
    }};

  addContacts = offset => {
    offset++;
    let off = offset * 20
    let url = "https://cors-anywhere.herokuapp.com/https://lamppoststudios.activehosted.com/api/3/contacts?offset=" + off
    fetch(url,{
      method: "GET",
      headers:{ "Api-Token": process.env.REACT_APP_API_KEY}
    })
    .then(res => res.json())
    .then(res => this.setState({
      contacts: this.state.contacts.concat(res.contacts),
      page: offset,
    }))
  }

  render() {
    let contactCards = this.state.contacts.map(contact => {
    return (
      <ContactCard contact={contact} key={contact.id} addFavorite={this.addFavorite.bind(this)} />
    )})
    return (
      <Container textAlign="center">
        {contactCards}
        <Button onClick={() => this.addContacts(this.state.page)}> Load More Contacts </Button>
      </Container>
    )
  }
}

export default ContactsPage;
