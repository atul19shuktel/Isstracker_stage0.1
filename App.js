import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import HomeScreen from './Screens/Home';
import LocationScreen from './Screens/Location';
import MeteorScreen from './Screens/Meteors';
import UpdateScreen from './Screens/Updates';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

export default class App extends React.Component {
  render(){
  return (

    <NavigationContainer style={styles.container}>
         
      <Stack.Navigator initialRouteName='meteor' >
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='location' component={LocationScreen}/>
        <Stack.Screen name='meteor' component={MeteorScreen}/>
        <Stack.Screen name='updates' component={UpdateScreen}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
