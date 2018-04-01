import React, { Component } from 'react';
import {
  Row,
  Col,
  Grid,
  Container,
  Header,
  Content,
  Text,
  Button,
  Form,
  Input,
} from 'native-base';

import { Image, TextInput } from 'react-native';

export default class SignIn extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      base64: '',
      name: '',
      showSelfie: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleSignIn = this.handleSignIn.bind(this);

  }

  componentWillMount() {
    
    const { state } = this.props.navigation;
    
    if (state.params && state.params.base64) {
      this.setState({
        base64: 'data:image/png;base64,' + state.params.base64,
      });
    }

  }

  handleSignIn() {}

  handleNameChange(text) {
    this.setState({
      name: text
    });
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container>
        
        <Content>
         
         <Grid>

            <Row>
              <Col>
                <Text>Welcome</Text>
              </Col>
              <Col>
                <Input
                  placeholder="Please enter your name"
                  onChangeText={ (text) => this.setState({name: text}) }
                  value={ this.state.name } />
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Button onPress={ () => navigate('Selfie', {name: this.state.name}) }>
                  <Text>Selfie?</Text>
                </Button>
              </Col>
              <Col>
                <Button onPress={ () => this.handleSignIn }>
                  <Text>Sign In</Text>
                </Button>
              </Col>
              <Col>
                <Button onPress={ () => navigate('Barcode') }>
                  <Text>Barcode</Text>
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                {this.state.base64 ? <Image
                  style={{width: 300, height: 300, resizeMode: Image.resizeMode.contain, borderWidth: 1, borderColor: 'red'}}
                  source={{ uri: this.state.base64 }} /> : ''}
              </Col>
            </Row>

          </Grid>

        </Content>

      </Container>

    );

  }

}