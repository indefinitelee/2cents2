import React from 'react';
import {
  Button,
  Navigator,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Nav from './Nav.js'

import { MonoText } from '../bits/StyledText';
import { ProfilePic } from '../bits/ProfilePic';
import { UserName } from '../bits/UserName';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: 'Profile',
    };
  }

  onMonthlyPress() {
    this.setState({
      selected: 'MonthlyCap'
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <ProfilePic />
          <UserName />
            <View style={styles.buttonHolder}>
              <Button style={styles.button} title="Change Password" />
              <Button style={styles.button} title="Monthly Cap" onPress={this.onMonthlyPress.bind(this)} />
              <Button style={styles.button} title="Bank Info" />
              <Button style={styles.button} title="Notifications" />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerBar: {
    padding: 20,
    // flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 1)',
    width: '100%',
    height: 80,
  },

  buttonHolder: {
    flexDirection: 'column',
  },

  button: {
    color: 'rebeccapurple',
    backgroundColor: 'black',
    height: 20,
  }

})
