import React, { Component } from 'react';
import SVGIcon from '../SVGIcon';

export class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      date: new Date(),
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayOfWeek: '',
      dayOfMonth: '',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      month: '',
      year: '',
      time: '',
      hours: '',
      minutes: ''
    }
  }
  
  render() {
    const {
      dayOfWeek,
      dayOfMonth,
      month,
      year,
    } = this.state;
    return (
      <header className='app-header'>
        {/* left set of red lines to imitate the appearance of paper */}
        <div style={{
          borderLeft: '0.5px solid #ffaa9f',
          borderRight: '0.5px solid #ffaa9f',
          width: '0.2em',
          height: '100vmax',
          float: 'left',
          marginLeft: '4em'
        }} />
        {/* add styling to app title so that it appears above paper's 1st line to the left */}
        <div style={{
          color: '#666',
          fontSize: '3em',
          margin: '0',
          padding: '0',
          textIndent: '0.1em',
          paddingTop: '0.5em',
          lineHeight: '0.8em',
          borderBottom: '1px solid lightblue'
        }}>
          {'To-Do List Manager '}
          <SVGIcon
            name="pencil-and-paper"
            width={25}
            fill="#444"
            style={{
              marginBottom: '-0.02em'
            }}
          />
          {/* add styling to date so that it appears above paper's 1st line to the right */}
          <div className='date' style={{
            float: 'right',
            fontSize: '.5em',
            marginRight: '.75em',
            paddingTop: '1em'
          }}>
            <span className='day-of-week'>{dayOfWeek + ', '}</span>
            <span className='month'>{month + ' '}</span>
            <span className='day-of-month'>{dayOfMonth + ', '}</span>
            <span className='year'>{year}</span>
          </div>
        </div>
      </header>
    )
  }
  
  componentDidMount = () => {
    const {
      date,
      daysOfWeek,
      months,
    } = this.state;
    
    this.setState({
      dayOfWeek: daysOfWeek[date.getDay()],
      dayOfMonth: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
      time: date.getTime(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
    })
  }
}

export default Header;
