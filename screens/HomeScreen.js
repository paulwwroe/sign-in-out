import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const styles = {
  button: {
    flex: 1,
    height: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'right'
  },
  title: {
    fontSize: 36,
  }
};

export default class HomeScreen extends Component {
  
  static navigationOptions = {
    header: null,
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, flexDirection: 'row' }}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={ styles.title }>Welcome</Text>
          </View>
         
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity style={[ styles.button, {backgroundColor: 'green'} ]} onPress={() => navigate('SignOut', { name: 'Jane' })}>
              <Text style={ styles.buttonText }>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ styles.button, {backgroundColor: 'red'} ]} onPress={() => navigate('SignOut', { name: 'Jane' })}>
              <Text style={ styles.buttonText }>Sign Out</Text>
            </TouchableOpacity>
          
          </View>
        
        </View>
          /*    

              </Col>
            </Row>
            <Row style={{ position: 'absolute', top:100, bottom:0, right:0, left:0, backgroundColor: 'green', height:500 }}>
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
            </Row>
          </Grid>
        </Content>
      </Container>*/

    );

  }

}
