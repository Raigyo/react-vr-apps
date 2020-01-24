import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';


  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

//AppRegistry.registerComponent('Basics', () => Basics);
