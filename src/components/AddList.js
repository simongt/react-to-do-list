import React, { Component } from 'react';

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
    const placeholder = '(Click here and enter a new list label.)';
    return (
      <div
        style={insertNewListStyle}
        className='insert-new-list'
      >
        <form
          onSubmit={this.onSubmit}
          style={insertNewListFormStyle}
        >
          <input
            type='text'
            style={insertNewListInputStyle}
            name='label'
            placeholder={placeholder}
            value={label}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='+'
            style={insertButtonStyle}
          />
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
  // flex: '1',
  background: '#854fbc',
  color: 'white',
  border: '1px solid transparent',
  outline: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  marginRight: '1.5em',
  marginLeft: '0.5em',
  marginTop: '-1em',
  marginBottom: '0.75em',
  padding: '0.5em 0.85em',
  float: 'right'
}

export default AddList;
