'use-strict';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input,Toast, Button, InputGroup, Icon,  Text , Spinner } from 'native-base';
import {View, Alert} from 'react-native';
import {checkEmail , checkPassword} from './utility';
import * as userActions from "../../actions/user";
import styles from './styles';


const background = require('../../../imgBackground/NUS.jpg');

class SignUp extends Component {

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
      emailStatus: '',
      passwordStatus : '',
      emailWarningMessage: '',
      passwordWarningMessage: '',
      isRendering: false
    };
  }

  renderEmail = (email) => {
    this.setState({isRendering: true})
    let err = checkEmail(email);

    if (err  === null)
    this.setState({
      isRendering: false,
      emailStatus: 'success',
    })
    else
    this.setState({
      isRendering: false,
      emailStatus: 'error',
      emailWarningMessage: err
    })


  }
  renderPassword = (pw) => {
    this.setState({isRendering: true})
    let err = checkPassword(pw);

    if (err  === null)
    this.setState({
      isRendering: false,
      passwordStatus: 'success',
    })
    else
    this.setState({
      isRendering: false,
      passwordStatus: 'error',
      passwordWarningMessage: err
    })


  }

  signUp = (name,faculty, email, pw) => {
    if (this.state.isRendering)
      Toast.show({
              text: 'Please wait!',
              position: 'bottom',
              buttonText: 'Okay',
            })
    this.props.navigation.navigate('Main');


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
                success={this.state.emailStatus === 'success'}
                error={this.state.emailStatus === 'error'}>
                <Icon active name="ios-mail-outline" />
                <Input
                  placeholder="EMAIL"
                  onChangeText={email => this.setState({ email })}
                  keyboardType='email-address'
                  onEndEditing={(e) =>  this.renderEmail(e.nativeEvent.text)}/>
                  <Icon
                    name={this.state.emailStatus === 'success' ? 'ios-checkmark-circle' : 'ios-close-circle'}
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
                    success={this.state.passwordStatus === 'success'}
                    error={this.state.passwordStatus === 'error'} >
                    <Icon name="ios-unlock-outline" />
                    <Input
                      placeholder="PASSWORD"
                      secureTextEntry
                      onChangeText={password => this.setState({ password })}
                      onEndEditing={(e) =>  this.renderPassword(e.nativeEvent.text)}/>
                    <Icon
                      name={this.state.passwordStatus === 'success' ? 'ios-checkmark-circle' : 'ios-close-circle'}
                      style={ this.state.passwordStatus === 'success' ? styles.btnsuccess :
                      this.state.passwordStatus === 'error' ? styles.btnerror : styles.btninactive} />

                    </InputGroup>
                  </View>
                  {this.state.passwordStatus === 'error' ? <View style={styles.filler}>
                    <Text style={styles.warningMessage}>{this.state.passwordWarningMessage}</Text>
                  </View> :
                  <View style={styles.filler}/>}


                  <Button style={styles.btn} onPress={() => this.signUp(
                    this.state.name,
                    this.state.faculty,
                    this.state.email,
                    this.state.password)}>
                    {this.state.isRendering ? <Spinner/> :<Text>Sign Up</Text>}
                  </Button>

              </View>

            </Container>
        );
    }
}
SignUp.contextTypes = {
    store:React.PropTypes.object
}

export default connect()(SignUp);
