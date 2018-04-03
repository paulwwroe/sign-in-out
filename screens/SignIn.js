import React, { Component } from 'react';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { Alert } from 'react-native';
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
      hasSelfie: false,
      name: '',
      scanData: null,
      showSelfie: false,
      base64: ''
    };

    this._handleBarCodeRead = this._handleBarCodeRead.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
    this._handleRejectSelfie = this._handleRejectSelfie.bind(this);
  }

  componentDidMount() {
    
    const { state } = this.props.navigation;
    
    if (state.params && state.params.base64) {

      this.setState({
        base64: 'data:image/png;base64,' + state.params.base64,
        showSelfie: true
      });

    }

  }

  _handleSignIn() {

    if (this.state.name.length > 0) {
      
      let formData = new FormData();

      formData.append('name', this.state.name);

      if (this.state.showSelfie && this.state.base64) {
        formData.append('selfie', this.state.base64);
      }

      fetch('http://www.blatchingtoncourt.org.uk/sign-in-out/in', { 
        
        method: 'POST',
        headers: {
          'Accept': 'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      
      }).then((response) => {
        
        if (response.ok) {
          navigate('HomeScreen');
        }
      
      }).catch((error) => {

        console.error(error);

      });

    }

  }

  _handleRejectSelfie() {  
    this.setState({
      base64: '',
      showSelfie: false
    });
  }

  _handleBarCodeRead(data) {  
    this.setState({
      scanData: data,
    });
  }

  _handleSelfie() {

    const { navigate } = this.props.navigation;

    if (this.state.showSelfie) {
      return (
        <Content>
          
          <Image style={{width: 400, height: 400, resizeMode: Image.resizeMode.contain}} source={{ uri: this.state.base64 }} />
          
          <Button onPress={() => navigate('Selfie', {name: this.state.name}) }>
            <Text>Try Again</Text>
          </Button>
          <Button onPress={ this._handleRejectSelfie }>
            <Text>Reject</Text>
          </Button>
        </Content>
      );
    }

    return (
      <Content>
        <Image style={{width: 400, height: 400, backgroundColor: 'red'}} />
        <Button onPress={() => navigate('Selfie', {name: this.state.name}) }>
          <Text>Selfie?</Text>
        </Button>
      </Content>
    );

  }

  render() {

    const { navigate } = this.props.navigation;

    if (this.state.scanData) {

      return (<Text>Goodbye!</Text>);

    }

    return (
      <Container>

        /*<BarCodeScanner
          type={ 'front' }
          onBarCodeRead={ this._handleBarCodeRead }
          style={{ position:'absolute', top:0, bottom:0, width:0, height:0 }} />*/
        
        <Content>
         
         <Grid>

            <Row>
              <Col>
                <Text>Sign In</Text>
              </Col>
            </Row>

            <Row>

              <Col>{ this._handleSelfie() }</Col>

              <Col>
                <Input
                  placeholder="Please enter your name"
                  onChangeText={ (text) => this.setState({name: text}) }
                  value={ this.state.name } />

                <Button onPress={ this._handleSignIn }>
                  <Text>Sign In</Text>
                </Button>

              </Col>
            </Row>

          </Grid>

        </Content>

      </Container>

    );

  }

}