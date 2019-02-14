import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
  crossOutCompletedItems = () => {
    const { item } = this.props;
    return item.isComplete ? scribbleOutItem : unscribbleOutItem;
  }

  render() {
    const { toggleItemCompletion, deleteItem, editItem } = this.props;
    const { id, description } = this.props.item;
    return (
      <div className='list-item'>
        <li
          className='item-description'
          style={this.crossOutCompletedItems()}
        >
          <input
            type='checkbox'
            style={checkboxStyle}
            onChange={toggleItemCompletion.bind(this, id)}
          />
          {' ' + description}
          <button
            onClick={deleteItem.bind(this, id)}
            style={deleteButtonStyle}
          >delete</button>
          <button
            onClick={editItem.bind(this, id)}
            style={editButtonStyle}
          >edit</button>
        </li>
      </div>
    );
  }
}

// PropTypes
ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

const scribbleOutItem = {
  textDecoration: 'line-through',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'orangered',
  transition: 'all 0.25s linear'
}

const unscribbleOutItem = {
  textDecoration: 'line-through',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'transparent',
  transition: 'all 0.25s linear'
}

const checkboxStyle = {
  marginTop: '-.25em',
  marginLeft: '.5em',
  float: 'left'
}

const editButtonStyle = {
  background: '#4370db',
  color: 'white',
  border: 'none',
  outline: 'none',
  borderRadius: '10%',
  cursor: 'pointer',
  marginTop: '-1.5em',
  marginRight: '0.5em',
  padding: '.5em .85em',
  float: 'right'
}

const deleteButtonStyle = {
  background: '#db4343',
  color: 'white',
  border: 'none',
  outline: 'none',
  borderRadius: '10%',
  cursor: 'pointer',
  marginTop: '-1.5em',
  marginRight: '1.5em',
  padding: '.5em .85em',
  float: 'right'
}


export default ListItem;
