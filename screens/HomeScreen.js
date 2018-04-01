import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
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
        <Content>
          <Grid>
            <Col>
              <Button style={{ position:'absolute', top:0, right:0, bottom:0, left:0 }} onPress={() => navigate('SignIn', { name: 'Jane' })}>
                <Text>Sign In</Text>
              </Button>
            </Col>
            <Col>
              <Button style={{ position:'absolute', top:0, right:0, bottom:0, left:0 }} onPress={() => navigate('SignOut', { name: 'Jane' })}>
                <Text>Sign Out</Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Container>

    );

  }

}
