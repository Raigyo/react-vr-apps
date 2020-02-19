import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, AsyncStorage } from 'react-vr';
//import component
import Shape, { shapes } from './vr/components/Shape';

class ShapeGame extends Component {
  constructor(){
    super();
    this.state = {
      //array: number and type of shapes used in the game
      gameShapes: [1, 1, 1, 1],
      score: 0,
      specialIndex: 0
    }
  }

  //load the method on mount + the last score in a promise
  componentDidMount(){
    AsyncStorage.getItem('score')
    .then(value => {
      this.setState({score: value});
    })
    this.newGameSet();
  }

  //calculate the score
  pickShape(shapeIndex) {
    let score = this.state.score;
    score = this.state.specialIndex === shapeIndex ? score + 1 : score - 1;
    this.setState({score}); //== this.setState({score: score});
    AsyncStorage.setItem('score', score); //data stored locally in the browser
    this.newGameSet();
  }

  //Setup for the game: create gameShapes [] with random figures
  newGameSet(){
    //Math.floor: greatest integer <= of number x
    //Math.random: float number between [0, 1[

    //baseShapeId => used for the 3 identical shapes
    let baseShapeId = Math.floor(Math.random() * shapes.length);

    //specialShapeId => used for the unique shape
    let specialShapeId = baseShapeId;
    while (specialShapeId === baseShapeId) {
      specialShapeId = Math.floor(Math.random() * shapes.length);
    }

    //Create a new array with the new shapes (3 are the same, 1 is unique)
    let newGameShapes = [];
    for (let i=0; i<this.state.gameShapes.length; i++) {
      newGameShapes[i] = baseShapeId;
    }
    let specialIndex = Math.floor(Math.random() * newGameShapes.length);
    newGameShapes[specialIndex] = specialShapeId;
    //console.log('newGameShapes', newGameShapes);

    //Change the states
    this.setState({
      gameShapes: newGameShapes,
      specialIndex: specialIndex
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Find the Odd Shape</Text>
        <Text style={styles.text}>{this.state.score}</Text>
        {/*
        //<Shape shapeNum={0} transform={[{translate: [0, 0, -5]}]}/>
        //map => browse the array gameShapes
        //coordinate modified each time in X
        */}
        {
          this.state.gameShapes.map((shape, index) => {
            return (
              <View
                key={index}
                onEnter={() => this.pickShape(index)}
              >
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
    transform: [{translate: [-2, 2, -5]}]
  }
});

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);
