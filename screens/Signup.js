import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Button, Card } from "react-native-elements";
let ScreenHeight = Dimensions.get("window").height - 70;
export default function Signup({ navigation }) {
    return (
       <ScrollView>
          <ImageBackground
          source={require("../assets/bg_1.jpg")}
          style={{ ...styles.header }}
        >
          <View style={{ ...styles.Signupcard}}>
            <Text style={{ ...styles.titleText }}>
             Welcome to Barberknocks, Signup here...
            </Text>
            <View style={{ ...styles.inputDiv}}>
            <Text style={{ ...styles.inputHeading }}>
               Full Name
             </Text>
             <TextInput
             style={styles.input}
             textContentType="none"
             />
             <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
               Email
             </Text>
             <TextInput
             style={styles.input}
             textContentType="emailAddress"
             />
             <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
               Phone Number
             </Text>
             <TextInput
             style={styles.input}
             textContentType="none"
             />
             <View style={{ ...styles.passwordDiv}}>
             <Text style={{ ...styles.inputHeading }}>
               Password
             </Text>
             </View>
             <TextInput
             style={styles.input}
             textContentType="password"
             />
            </View>
           <Button
            title="Signup"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
           />
        </View>
        <TouchableOpacity>
         <Text style={styles.touchbutton}>Already a member ? Signin </Text>
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
      minHeight: ScreenHeight,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    Signupcard: {
      padding: 20,
      width: "90%",
      minHeight: ScreenHeight / 2,
      backgroundColor: "white",
      marginTop: 40,
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
      paddingTop: 30,
      paddingBottom: 30,
    },
    touchbutton: {
      paddingTop: 15,
      color: "#ffffff",
      fontSize: 18,
      fontFamily: "font-demi",
      marginBottom: 40,
    },
    paddingTop: {
      paddingTop: 10,
    },
  });

// Forget Component

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   ScrollView,
//   Text,
//   Dimensions,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity
// } from "react-native";
// import { Button, Card } from "react-native-elements";
// import { globalStyles } from "../styles/global";
// let ScreenHeight = Dimensions.get("window").height - 70;
// export default function Signup({ navigation }) {
//     return (
//        <ScrollView>
//           <ImageBackground
//           source={require("../assets/bg_1.jpg")}
//           style={{ ...styles.header }}
//         >
//           <View style={{ ...styles.Signupcard}}>
//             <Text style={{ ...styles.titleText }}>
//              Enter the E-mail associated with your account
//             </Text>
//             <View style={{ ...styles.inputDiv}}>
//              <Text style={{ ...styles.inputHeading, ...styles.paddingTop }}>
//                Email
//              </Text>
//              <TextInput
//              style={styles.input}
//              textContentType="emailAddress"
//              />
//             </View>
//            <Button
//             title="Send OTP"
//             buttonStyle={styles.button}
//             titleStyle={styles.buttonText}
//            />
//         </View>
//         </ImageBackground>
//        </ScrollView>
//     );
//   }
  
//   const styles = StyleSheet.create({
//      scrollView: {
//         flex: 1,
//         height: "100%",
//       },
//       header: {
//         flex: 1,
//         width: "100%",
//         minHeight: ScreenHeight,
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "rgba(0,0,0,0.5)",
//       },
//       Signupcard : {
//         padding: 20,
//         width: "90%",
//         minHeight: (ScreenHeight/2),
//         backgroundColor: "white",
//         marginTop: 40,
//       },
//       titleText : {
//         fontFamily: "font-bold",
//         fontSize: 40,
//         color: "#420a83",
//         textAlign: "center",
//       }   ,
//       button:{
//         backgroundColor: "#730fe4" ,
//       },
//       buttonText:{
//         fontFamily: "font-demi",
//         fontSize: 16,
//       },
//       inputHeading:{
//         color: "#420a83",
//         fontSize: 18,
//         fontFamily: "font-demi",
//       },
//       input:{
//         backgroundColor: "#f3effd",
//         paddingTop: 10,
//         paddingBottom : 10,
//         paddingLeft : 20,
//         paddingRight : 20,
//         height: 50,
//         marginTop:5,
//         borderWidth: 1,
//         borderColor: "#ced4da",
//         borderStyle: "solid"
//       },
//       passwordDiv:{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingTop:20
//       },
//       inputDiv:{
//         paddingTop: 30,
//         paddingBottom: 30
//       },
//       touchbutton:{
//         paddingTop: 15,
//         color: "#ffffff",
//         fontSize: 18,
//         fontFamily: "font-demi",
//         marginBottom:40
//       },
//       paddingTop:{
//         paddingTop:10
//       }
//   });
  