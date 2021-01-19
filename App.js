import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';

export default class App extends Component {
  displayAlert=()=>{
    alert('PlaySound');
  }

  render() {
    return (
        <View style={{
          marginTop: 80,
          marginLeft: 80,
          width: 200,
          height: 150}}>
        <Button 
        color="blue" 
        title="sound 1"
        onPress={this.displayAlert}/>
        <Button 
        color="green" 
        title="sound 2"
        onPress={this.displayAlert}/>
        <Button 
        color="red" 
        title="sound 3"
        onPress={this.displayAlert}/>
        <Button 
        color="purple" 
        title="sound 4"
        onPress={this.displayAlert}/>
        <Button 
        color="orange" 
        title="sound 5"
        onPress={this.displayAlert}/>
        </View>

    );
  }
}