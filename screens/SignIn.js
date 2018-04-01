import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Button
} from 'native-base';

export default class SignIn extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  render() {

    return (
      <Container>
        <Text>Sign In</Text>
      </Container>
    );

  }

}