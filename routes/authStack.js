import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Header from "../components/Header";
import Forgot from "../screens/Forgot";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Login" />
            </React.Fragment>
          ),
        })}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={({ navigation }) => ({
          headerTitle: () => (
            <React.Fragment>
              <Header navigation={navigation} title="Forgot Password" />
            </React.Fragment>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
