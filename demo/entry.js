import React from 'react';
import ReactDOM from 'react-dom';
import Red from './red';
import Blue from './blue';
import {
  // Color,
  palletes,
  text,
  PrimaryText,
  SecondaryText,
  HintText,
  DividersText,
  rgba,
  hex,
} from '../lib';
import genereate from './genereate';
const mountNode = document.querySelector('#here');
const Keys = ['50'];
for (let i = 100; i < 1000; i = i + 100) {
  Keys.push(String(i));
}

// const MyText = PrimaryText;
const MyText = SecondaryText;
// const MyText = HintText;
// const MyText = DividersText;

class ColorBox extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: 200,
        backgroundColor: rgba(this.props.color),
        color: rgba(MyText(this.props.color)),
        paddingLeft: 10,
        paddingRight: 10,
      }}>
        <div>
          {this.props.colorKey}
        </div>
        <div>
          {hex(this.props.color).toUpperCase()}
        </div>
      </div>
    )
  }
}

class PrimaryBox extends React.Component {
  render() {
    const { name, color } = this.props;
    return (
      <div style={{
        color: rgba(MyText(color)),
        backgroundColor: rgba(color),
      }}>
        <div style={{
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
          {name}
        </div>
        <ColorBox
          colorKey='500'
          color={color}
        />
      </div>
    )
  }
}

class Palletes extends React.Component {
  render() {
    const { name, colors } = this.props;
    const primary = colors['500'];
    return (
      <div>
        <PrimaryBox
          name={name}
          color={primary}
        />
        {Keys.map(key => {
          const color = colors[key];
          return (
            <ColorBox
              key={key}
              colorKey={key}
              color={color}
            />
          );
        })}
      </div>
    );
  }
}

const Colors = [{
  name: 'Red',
  primary: new Color({ r: 244, g: 67, b: 54 }),
}, {
  name: 'Blue',
  primary: new Color({ r: 33, g: 150, b: 243 }),
}, {
  name: 'Purple',
  primary: new Color({ r: 156, g: 39, b: 176 }),
}, {
  name: 'Teal',
  primary: new Color({ r: 0, g: 150, b: 136 }),
}, {
  name: 'Lime',
  primary: new Color({ r: 212, g: 225, b: 87 }),
}, {
  name: 'Light green',
  primary: new Color({ r: 139, g: 195, b: 74 }),
}, {
  name: 'custom',
  primary: new Color({ r: 72, g: 101, b: 38 }),
}];

const Primaries = genereate(Colors);

class App extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex'
      }}>
        {Primaries.map((p, index) => {
          return (
            <div style={{
              flex: '0 1 auto'
            }}
              key={index}
            >
              <Palletes
                name={p.name}
                colors={p.colors}
              />
            </div>
          )
        })}
      </div>
    )
  }
}


ReactDOM.render(<App />, mountNode);
