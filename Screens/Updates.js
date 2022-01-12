import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

export default class UpdateScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
      <Text>literally updates</Text>      
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1.5,
     backgroundColor:'indigo',
    },
  });