import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../../style/style')
var tabIcons = [];
class TabBar extends Component {


  static propTypes =  {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    names: React.PropTypes.array
  };

  componentDidMount =() => {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  };

  setAnimationValue = ({ value, }) => {
    tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i))
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  };

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor = (progress) => {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  };

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
          <Icon
            name={tab}
            size={30}
            color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => {
              tabIcons[i] = icon;
            }}
          />
          <Text>{this.props.names[i]}</Text>
        </TouchableOpacity>;
      })}
    </View>;
  }
};



module.exports =  TabBar;
