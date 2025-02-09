import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text } from 'react-vr';

class Task extends Component {
  render()  {
    return  (
      <Text style={{textAlign: 'center', fontSize: 0.2}}>Todo: {this.props.text}</Text>
    )
  }
}

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <View style={{
            transform: [{translate: [0, 0, -3]}],
            layoutOrigin: [0.5, 0.5]
          }}>
          <Task text='Task 1'/>
          <Task text='Task 2'/>
          <Task text='Task 3'/>
        </View>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
