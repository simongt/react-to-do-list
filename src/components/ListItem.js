import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";

export class ListItem extends Component {
  crossOutCompletedItems = () => {
    const { item } = this.props;
    return item.isComplete ? scribbleOutItem : unscribbleOutItem;
  }

  render() {
    const {
      toggleItemCompletion,
      deleteItem,
      editItem
    } = this.props;
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
            onChange={(event) => toggleItemCompletion(id, event)}
          />
          {' ' + description}
          <button
            onClick={(event) => deleteItem(id, event)}
            style={deleteButtonStyle}
          >
            <SVGIcon name="trash" width={25} fill={"#333"} />
          </button>
          <button
            onClick={(event) => editItem(id, event)}
            style={editButtonStyle}
          >
            <SVGIcon name="pencil" width={25} fill={"#333"} />
          </button>
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
  visibility: 'hidden',
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.5em',
  marginRight: '0.5em',
  float: 'right'
}

const deleteButtonStyle = {
  // visibility: 'hidden',
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.5em',
  marginRight: '1.5em',
  float: 'right'
}


export default ListItem;
