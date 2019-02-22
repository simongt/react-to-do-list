import React, { Component } from 'react';
import SVGIcon from "./SVGIcon";

export class AddItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      description: ''
    }
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
    addItem(description, event);
    this.setState({
      description: ''
    });
  }

  render() {
    const { description } = this.state;
    const { label } = this.props.list;
    const placeholder = 'Add a to-do item to the ' + label + ' list.';
    return (
      <div
        style={insertNewItemStyle}
      >
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
          <label>
            <input type='submit' value='+' />
            <SVGIcon
              name="add"
              width={25}
              fill="#333"
              style={insertButtonStyle}
            />
          </label>
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
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-0.6em',
  marginRight: '1.05em',
  marginLeft: '0.5em',
  float: 'right'
}

export default AddItem;