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

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <ProfilePic />
          <UserName />
        </View>
          <View>
            <Button style={styles.button} title="Change Password"  />
            <Button style={styles.button} title="Monthly Cap"  />
            <Button style={styles.button} title="Bank Info" />
            <Button style={styles.button} title="Notifications" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBar: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 1)',
    width: '100%',
    height: 80,
  },
  button: {
    backgroundColor: 'rebeccapurple',
  }

})
