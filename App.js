import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'ToDoList', //Set Header Title
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
