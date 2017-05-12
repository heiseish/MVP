'use-strict';
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class App extends Component {
    static navigationOptions = {
        title: ""
    };

    componentWillMount = ()  => {
        // this.setState({
        //     loading: true
        // });
        //
        // this.props.fetchModelYears().then(data => {
        //     this.initDataSource(data.modelYears.Results);
        // });
        console.log(this.props.store);
        if (this.props.user == null)
          this.props.navigation.navigate('Login');
        else
          this.props.navigation.navigate('Main');


    }
    componentDidMount = () => {



    }
    render() {
        return (
            <View><Text>Hi</Text></View>
        );
    }
}



export default connect()(App);
