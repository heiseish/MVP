'use-strict';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, InputGroup, Icon,  Text } from 'native-base';
import {View} from 'react-native';

import * as userActions from "../../actions/user";
import styles from './styles';


const background = require('../../../imgBackground/NUS.jpg');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  login = (name) => {
    const {store} = this.context;
    const state = store.getState();

    const navigate = this.props.navigation.navigate;

    store.dispatch({
      type: 'SET_USER',
      payload: name
    });
    navigate('Main');
  }
  render() {

    return (
      <Container>
        <View style={styles.container}>
          <Image source={background} style={styles.shadow}/>
          <View style={styles.inputGroup}>
            <InputGroup borderType="underline" >
              <Icon active name="ios-person" />
              <Input placeholder="USERNAME" onChangeText={name => this.setState({ name })} />
            </InputGroup>
          </View>
          <View style={styles.inputGroup}>
            <InputGroup borderType="underline" >
              <Icon name="ios-unlock" />
              <Input
                placeholder="PASSWORD"
                secureTextEntry
              />

            </InputGroup>
          </View>

          <Button style={styles.btn} onPress={() => this.login(this.state.name)}>
            <Text>Login</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
Login.contextTypes = {
  store:React.PropTypes.object
}

export default connect()(Login);
