import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Button
} from 'native-base';

export default class SignOut extends Component {

  static navigationOptions = {
    title: 'Sign Out',
  };

  render() {

    return (
      <Container>
        <Text>Sign Out</Text>
      </Container>
    );

  }

}