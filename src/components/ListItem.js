import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
  crossOutCompletedItems = () => {
    const { item } = this.props;
    return item.isComplete ? scribbleOutItem : unscribbleOutItem;
  }

  render() {
    const { toggleItemCompletion } = this.props;
    const { id, description } = this.props.item;
    const itemId = id;
    return (
      <div className="list-item">
        <li
          className="item-description"
          style={this.crossOutCompletedItems()}
        >
          <input
            type="checkbox"
            style={checkboxStyle}
            onChange={toggleItemCompletion.bind(this, itemId)}
          />
          {' '}
          <span>{description}</span>
          <button style={deleteButtonStyle}>delete</button>
          <button style={editButtonStyle}>edit</button>
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
  transition: 'all 2s linear'
}

const unscribbleOutItem = {
  textDecoration: 'none',
  textDecorationStyle: 'none',
  textDecorationColor: 'none',
  transition: 'all 2s linear'
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
