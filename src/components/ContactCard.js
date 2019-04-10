import React, { Component } from "react";
import { Card, Icon, Button } from 'semantic-ui-react';

class ContactCard extends Component {

  render () {
    let { id, firstName, lastName, email, organization } = this.props.contact

    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Name: {firstName} {lastName}</Card.Header>
          <Card.Meta>
            <span className='id'>ID: {id} </span>
          </Card.Meta>
          <Card.Description>Email: {email} </Card.Description>
          <Card.Description>Organization: {organization} </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button onClick={() => this.props.addFavorite(id)}>
            <Icon name='heart outline'/>
            Favorite
            </Button>
        </Card.Content>
      </Card>
    )}
}

export default ContactCard;
