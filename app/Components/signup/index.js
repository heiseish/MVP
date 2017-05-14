'use-strict';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, InputGroup, Icon,  Text , Spinner } from 'native-base';
import {View, Alert} from 'react-native';

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
      faculty: '',
      email: '',
      password: '',
      emailStatus: 'error',
      passwordStatus : '',
      emailWarningMessage: 'Invalid',
      passwordWarningMessage: ''
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
  renderEmail(email){

  }


  render() {

    return (
      <Container>
        <View style={styles.container}>
          <Image source={background} style={styles.shadow}/>

          <View style={styles.inputGroup}>
            <InputGroup borderType="underline"  >
              <Icon active name="ios-person-outline" />
              <Input
                placeholder="NAME"
                nChangeText={name => this.setState({ name })} />

              </InputGroup>
            </View>
            <View style={styles.filler}/>


            <View style={styles.inputGroup}>
              <InputGroup borderType="underline" >
                <Icon active name="ios-home-outline" />
                <Input placeholder="FACULTY" onChangeText={faculty => this.setState({ faculty })} />
              </InputGroup>
            </View>
            <View style={styles.filler}/>


            <View style={styles.inputGroup}>
              <InputGroup
                borderType="underline"
                success={this.state.emailStatus === 'sucess'}
                error={this.state.emailStatus === 'error'}>
                <Icon active name="ios-mail-outline" />
                <Input
                  placeholder="EMAIL"
                  onChangeText={email => this.setState({ email })}
                  keyboardType='email-address'
                  onEndEditing={email => this.renderEmail(email)}/>
                  <Icon
                    name={this.state.emailStatus === 'sucess' ? 'ios-checkmark-circle' : 'ios-close-circle'}
                    style={ this.state.emailStatus === 'success' ? styles.btnsuccess :
                    this.state.emailStatus === 'error' ? styles.btnerror : styles.btninactive} />
                  </InputGroup>
                </View>

                {this.state.emailStatus === 'error' ? <View style={styles.filler}>
                  <Text style={styles.warningMessage}>{this.state.emailWarningMessage}
                  </Text>
                </View> :
                <View style={styles.filler}/>}

                <View style={styles.inputGroup}>
                  <InputGroup
                    borderType="underline"
                    success={this.state.passwordStatus === 'sucess'}
                    error={this.state.passwordStatus === 'error'} >
                    <Icon name="ios-unlock-outline" />
                    <Input
                      placeholder="PASSWORD"
                      secureTextEntry
                      onChangeText={password => this.setState({ password })}
                      onEndEditing={password => this.renderEmail(password)}
                    />
                    <Icon
                      name={this.state.passwordStatus === 'sucess' ? 'ios-checkmark-circle' : 'ios-close-circle'}
                      style={ this.state.passwordStatus === 'success' ? styles.btnsuccess :
                      this.state.passwordStatus === 'error' ? styles.btnerror : styles.btninactive} />

                    </InputGroup>
                  </View>
                  <View style={styles.filler}/>

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
