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
  TouchableHighlight,
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
      visibility: 'hidden',
    };
  }

    onMonthlyPress() {
      this.setState({
        picked: 'MonthlyCap'
      });
    }

    onChangePassword() {
    this.setState({
      picked: 'ChangePassword'
    });
  }

    onBankInfo() {
    this.setState({
      picked: 'BankInfo'
    });
  }

    onNotifications() {
    this.setState({
      picked: 'Notifications'
    });
  }

   goToPage() {
     if (this.state.picked === 'ChangePassword') {
       return <ChangePassword />;
     } else if (this.state.picked === 'MonthlyCap') {
       return <MonthlyCap />;
     } else if (this.state.picked === 'BankInfo') {
       return <BankInfo />;
     } else if (this.state.picked === 'Notifications') {
       return <Notifications />;
     }
   }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <ProfilePic />
          <UserName />
        </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button}> <Text>Change Password</Text> onPress={this.onChangePassword.bind(this)}</TouchableHighlight>
            <TouchableHighlight style={styles.button}> <Text>Monthly Cap</Text> onPress={this.onMonthlyPress.bind(this)} </TouchableHighlight>
            <TouchableHighlight style={styles.button}> <Text>Bank Info</Text> onPress={this.onBankInfo.bind(this)}</TouchableHighlight>
            <TouchableHighlight style={styles.button}> <Text>Notifications</Text> onPress={this.onNotifications.bind(this)}</TouchableHighlight>
          </View>
          <View>
            {this.goToPage()}
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 1)',
    width: '100%',
    height: 80,
  },

  buttonContainer: {
    flexDirection: 'column',

  },



  button: {
    color: 'rebeccapurple',
    backgroundColor: 'black',
    height: 20,
  }

})
