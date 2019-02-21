import React, { Component } from 'react';
import SVGIcon from '../SVGIcon';

export class Header extends Component {
  render() {
    let date = new Date();
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = daysOfWeek[date.getDay()];
    let dayOfMonth = date.getDate();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    // let time = date.getTime();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();

    return (
      <header className='app-header'>
        <div style={verticalRedLines} />
        <div style={appTitleStyle}>
          {'To-Do List Manager '}
          <SVGIcon
            name="pencil-and-paper"
            width={25}
            fill="#444"
            style={{
              marginBottom: '-0.02em'
            }}
          />
          <div style={dateStyle}>
            <span className='day-of-week'>{dayOfWeek + ', '}</span>
            <span className='month'>{month + ' '}</span>
            <span className='day-of-month'>{dayOfMonth + ', '}</span>
            <span className='year'>{year}</span>
          </div>
        </div>
      </header>
    )
  }
}

// left set of red lines to imitate the appearance of paper
const verticalRedLines = {
  borderLeft: '0.5px solid #ffaa9f',
  borderRight: '0.5px solid #ffaa9f',
  width: '0.2em',
  height: '100vmax',
  float: 'left',
  marginLeft: '4em'
}

// add styling to app title so that it appears above paper's 1st line to the left
const appTitleStyle = {
  color: '#666',
  fontSize: '3em',
  margin: '0',
  padding: '0',
  textIndent: '0.1em',
  paddingTop: '0.5em',
  lineHeight: '0.8em',
  borderBottom: '1px solid lightblue'
}

// add styling to date so that it appears above paper's 1st line to the right
const dateStyle = {
  float: 'right',
  fontSize: '.5em',
  marginRight: '.75em',
  paddingTop: '1em'
}

export default Header;
