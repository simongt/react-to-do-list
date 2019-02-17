import React, { Component } from 'react';

export class AddItem extends Component {
  state = {
    description: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const { addItem } = this.props;
    const { description } = this.state;
    addItem(description);
    this.setState({
      description: ''
    });
  }

  render() {
    const { description } = this.state;
    const { label } = this.props.list;
    const placeholder = '(Click here and enter a new to-do item to ' + label + '.)';
    return (
      <div style={insertNewItemStyle}>
        <form 
          onSubmit={this.onSubmit}
          style={insertNewItemFormStyle} 
          className='insert-new-item'
        >
          <input
            type='text'
            style={insertNewItemInputStyle}
            name='description'
            placeholder={placeholder}
            value={description}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='+'
            style={insertButtonStyle}
          />
        </form>
      </div>
    )
  }
}

const insertNewItemStyle = {
  paddingTop: '.75em',
  paddingBottom: '0.1em'
}

const insertNewItemFormStyle = {
  display: 'flex',
  marginBottom: '-0.5em'
}

const insertNewItemInputStyle = {
  flex: '1',
  background: 'transparent',
  fontFamily: "'Indie Flower', cursive",
  fontSize: '1em',
  paddingLeft: '0.5em',
  outline: 'none',
  border: '1px solid transparent'
}

const insertButtonStyle = {
  // flex: '1',
  background: '#5dbc4f',
  color: 'white',
  border: '1px solid transparent',
  outline: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  marginRight: '1.5em',
  marginLeft: '0.5em',
  marginTop: '-1em',
  marginBottom: '0.8em',
  padding: '0.5em 0.85em',
  float: 'right'
}

export default AddItem;
