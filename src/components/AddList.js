import React, { Component } from 'react';
import SVGIcon from "./SVGIcon";

export class AddList extends Component {
  state = {
    label: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const { addList } = this.props;
    const { label } = this.state;
    addList(label);
    this.setState({
      label: ''
    });
  }

  render() {
    const { label } = this.state;
    const placeholder = 'Click here to enter a new to-do list category.';
    return (
      <div
        style={insertNewListStyle}
      >
        <form
          onSubmit={this.onSubmit}
          style={insertNewListFormStyle}
          className='insert-new-list'
        >
          <input
            type='text'
            style={insertNewListInputStyle}
            name='label'
            placeholder={placeholder}
            value={label}
            onChange={this.onChange}
          />
          <label>
            <input
              type='submit'
              value='+'
            />
            <SVGIcon
              name="add"
              width={25}
              fill="#333"
              style={insertButtonStyle}
            />
          </label>
        </form>
      </div>
    );
  }
}

const insertNewListStyle = {
  paddingTop: '.75em',
  paddingBottom: '0.1em',
  borderBottom: '1px solid lightblue'
}

const insertNewListFormStyle = {
  display: 'flex',
  marginBottom: '-0.5em'
}

const insertNewListInputStyle = {
  flex: '1',
  background: 'transparent',
  fontFamily: "'Indie Flower', cursive",
  fontSize: '1em',
  paddingLeft: '0.5em',
  outline: 'none',
  border: 'none'
}

const insertButtonStyle = {
  // visibility: 'hidden',
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1em',
  marginRight: '1.1em',
  marginLeft: '0.5em'
}

export default AddList;
