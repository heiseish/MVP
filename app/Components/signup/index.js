'use-strict';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, InputGroup, Icon,  Text , Spinner } from 'native-base';
import {View, Alert} from 'react-native';

import * as userActions from "../../actions/user";
import styles from './styles';
import signIn from '../../Model/SignIn';


const background = require('../../../imgBackground/NUS.jpg');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      isLoading: false,
      isSuccessEmail : true,
      isSuccessPassword: true,
    };
  }
  login = (name,pw) => {
    this.setState({
      isLoading: true
    })

    signIn(name,pw).then(res => {
      this.setState({
        isLoading: false
      })
      const {store} = this.context;
      const state = store.getState();

      const navigate = this.props.navigation.navigate;

      store.dispatch({
        type: 'SET_USER',
        payload: name
      });
      navigate('Main');
    }).catch(() => {
      this.setState({
        isLoading: false
      })
      Alert.alert('Error. Cannot find user');
    })

  }
  render() {

    return (
      <Container>
        <View style={styles.container}>
          <Image source={background} style={styles.shadow}/>

          <View style={styles.inputGroup}>
            <InputGroup borderType="underline"  >
              <Icon active name="ios-person-outline" />
              <Input placeholder="NAME" onChangeText={name => this.setState({ name })} />
            </InputGroup>
          </View>


            <View style={styles.inputGroup}>
              <InputGroup borderType="underline" >
                <Icon active name="ios-home-outline" />
                <Input placeholder="FACULTY" onChangeText={name => this.setState({ name })} />
              </InputGroup>
            </View>



          <View style={styles.inputGroup}>
            <InputGroup
              borderType="underline"
              success={this.state.isSuccessEmail}
              error={this.state.isErrorEmail}>
              <Icon active name="ios-mail-outline" />
              <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
            </InputGroup>
          </View>

          <View style={styles.inputGroup}>
            <InputGroup
              borderType="underline"
              success={this.state.isSuccessPassword}
              error={this.state.isErrorPassword} >
              <Icon name="ios-unlock-outline" />
              <Input
                placeholder="PASSWORD"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />

            </InputGroup>
          </View>


          <Button style={styles.btn} onPress={() => this.login(this.state.name,this.state.password)}>
            {this.state.isLoading ? <Spinner/> :<Text>Sign me Up</Text>}
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
