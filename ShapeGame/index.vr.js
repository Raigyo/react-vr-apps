import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-vr';
//import component
import Shape from './vr/components/Shape';

class ShapeGame extends Component {
  constructor(){
    super();
    this.state = {
      //array: number of shapes used in the game
      gameShapes: [1, 1, 1, 1]
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Find the Odd Shape</Text>
        {/*
        //<Shape shapeNum={0} transform={[{translate: [0, 0, -5]}]}/>
        //map => browse the array gameShapes
        //coordinate modified each time in X
        */}
        {
          this.state.gameShapes.map((shape, index) => {
            return (
              <View key={index}>
                <Shape
                  shapeNum={shape}
                  colorNum={index}
                  transform={[{translate: [(index-1.5)*1.5, 0, -5]}]}
                />
              </View>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color:'#fff',
    transform: [{translate: [0, 2, -5]}]
  }
});

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);
