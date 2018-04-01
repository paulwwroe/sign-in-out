import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Button
} from 'native-base';

export default class HomeScreen extends Component {
  
  static navigationOptions = {
    header: null,
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container>
      
        <Header />
        
        <Content>

          <Button onPress={() => navigate('SignIn', { name: 'Jane' })}>
            <Text>Sign In</Text>
          </Button>

          <Button onPress={() => navigate('SignOut', { name: 'Jane' })}>
            <Text>Sign Out</Text>
          </Button>

        </Content>

      </Container>

    );

  }

}
