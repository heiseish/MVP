'use strict';

var ScrollableTabView = require('react-native-scrollable-tab-view');
const TabBar = require('../Components/TabBar/defaultTabBar');
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
const styles = require('../style/style')
import React, { Component } from 'react';
var Home = require('../Components/home/')
var Ask = require('../Components/ask/')
var Notification = require('../Components/Notification/')
var Profile = require('../Components/Profile/')
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        'Home',
        'Ask',
        'Notification',
        'Profile'
      ]
    }
  }

  componentDidMount(){
    const {store} = this.context;
    const state = store.getState();
    console.log(state);
  }

  render(){
    return <ScrollableTabView
      style={{marginTop:25}}
      initialPage={1}
      renderTabBar={() => <TabBar names={this.state.tabs}/>} //pasing props to tabbar
      >
      <Home tabLabel="ios-home" style={styles.tabView}/>
      <Ask tabLabel="ios-chatboxes" style={styles.tabView}/>
      <Notification tabLabel="ios-notifications" style={styles.tabView}/>
      <Profile tabLabel="ios-man-outline" style={styles.tabView}/>

    </ScrollableTabView>;
  }
};
Main.contextTypes = {
  store:React.PropTypes.object
}

export default connect()(Main);
