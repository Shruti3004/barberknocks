import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-elements";

let ScreenHeight = Dimensions.get("window").height - 70;
export default function Login({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Forgot");
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/bg_1.jpg")}
        style={{ ...styles.header }}
      >
        <View style={{ ...styles.Logincard }}>
          <Text style={{ ...styles.titleText }}>Sign in to your account</Text>
          <View style={{ ...styles.inputDiv }}>
            <Text style={{ ...styles.inputHeading }}>Email</Text>
            <TextInput style={styles.input} textContentType="emailAddress" />
            <View style={{ ...styles.passwordDiv }}>
              <Text style={{ ...styles.inputHeading }}>Password</Text>
              <TouchableOpacity onPress={handlePress}>
                <Text style={{ ...styles.inputHeading }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TextInput style={styles.input} textContentType="password" />
          </View>
          <Button
            title="Signin"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.touchbutton}>Become a member ? Signup </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: "100%",
  },
  header: {
    flex: 1,
    width: "100%",
    height: ScreenHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  Logincard: {
    padding: 20,
    width: "90%",
    minHeight: ScreenHeight / 2,
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "font-bold",
    fontSize: 30,
    color: "#420a83",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#730fe4",
  },
  buttonText: {
    fontFamily: "font-demi",
    fontSize: 16,
  },
  inputHeading: {
    color: "#420a83",
    fontSize: 18,
    fontFamily: "font-demi",
  },
  input: {
    backgroundColor: "#f3effd",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
  },
  passwordDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  inputDiv: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  touchbutton: {
    paddingTop: 15,
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "font-demi",
  },
});
