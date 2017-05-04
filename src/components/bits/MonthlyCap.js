import React from "react";
import {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  Image
} from "react-native";

export class MonthlyCap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<<<<<<< HEAD
    <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.goBack}
          style={styles.backArrow}
        >
          <Text style={styles.arrowText}>
            BACK
=======
      <View style={styles.container}>
          <TouchableHighlight
            onPress={this.props.goBack}
            style={styles.backArrow}
          >
            <Text style={styles.arrowText}>
              BACK
            </Text>
          </TouchableHighlight>
          <Text style={styles.headline}>
            HOW MUCH WILL YOU GIVE?
          </Text>
          <Text style={styles.paragraph}>
            Use the buttons below to set your monthly donation cap. Adjust the cap at any time, your monthly donation will never excceed the amount you set below.
>>>>>>> 9f6b3e41163df19e48ac45ab2b79d290f7319292
          </Text>

        <View style={styles.counter}>
<<<<<<< HEAD
          <View>
            <Text style={{ fontSize: 40 }}>
              {this.props.monthlyCap}
            </Text>
          </View>
=======
                <View>
                  <Text style={{ fontSize: 40 }}>
                    {this.props.monthlyCap}
                  </Text>
                </View>

>>>>>>> 9f6b3e41163df19e48ac45ab2b79d290f7319292
        </View>

          <View style={styles.buttonContainer}>
                <TouchableHighlight
                  onPress={this.props.handleDecreaseCap}
                  style={styles.buttonMinus}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={this.props.handleIncreaseCap}
                  style={styles.buttonAdd}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
          </View>

<<<<<<< HEAD
        <TouchableHighlight
          onPress={this.props.onDoneMonthlyCapPress}
          style={styles.save}
        >
          <Text>Save New Cap</Text>
        </TouchableHighlight>
=======
          <View>
          <TouchableHighlight
            onPress={this.props.onDoneMonthlyCapPress}
            style={styles.save}
          >
            <Text>Save New Cap</Text>
          </TouchableHighlight>
        </View>
>>>>>>> 9f6b3e41163df19e48ac45ab2b79d290f7319292
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 20,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#eee",
    width: "100%",
    marginTop: 30
  },
  save: {
    padding: 20,
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#68DEA8",
    borderRadius: 20,
    height: 50,
    width: 200,
    marginTop: 40
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa"
  },
  backArrow: {
    position: "absolute",
    top: 25,
    left: 25,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#68DEA8",
    height: 30,
    width: 50,
    borderRadius: 20
  },
  arrowText: {
    color: '#fafafa',
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
  },
  capText: {
    textAlign: 'center',
    width: '80%',
    marginBottom: 40,
    color: "#fafafa",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center"
  },
  headline: {
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 10
  },
  paragraph: {
    textAlign: "center",
    width: "90%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  buttonMinus: {
    height: 40,
    width: 80,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 0.8,
    borderColor: "#fafafa",
    backgroundColor: "#68DEA8",
    overflow: "hidden"
  },
  buttonAdd: {
    height: 40,
    width: 80,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.8,
    borderColor: "#fafafa",
    backgroundColor: "#68DEA8",
    overflow: "hidden"
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center"
  }
});
