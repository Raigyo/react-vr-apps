import React, { Component } from 'react';
import { Box, Sphere, Cylinder } from 'react-vr';

//Array with shapes
const shapes = [Box, Sphere, Cylinder];

export default class Shape extends Component {
  render() {
    //Number received from props in gameShapes.map
    let Component = shapes[this.props.shapeNum];
    let colors = ['#c33', '#3c3', '#33c', '#ccc']

    return (
        <Component
          style={{
            color: colors[this.props.colorNum],
            transform: this.props.transform
          }}
        />
      )
    }
  };
