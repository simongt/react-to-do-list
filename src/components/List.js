import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon';

export class List extends Component {
  render() {
    const {
      list,
      toggleItemCompletion, 
      addItem,
      deleteItem, 
      editItem,
      deleteList,
      editList
    } = this.props;
    const { id, label, items } = this.props.list;
    return (
      <div className='list'>
        <ul>
          <li className='list-label'>
            {label}
            <button
              onClick={event => deleteList(id, event)}
              style={deleteButtonStyle}
            >
              <SVGIcon name="trash" width={25} fill="#333" />
            </button>
            <button
              onClick={event => editList(id, event)}
              style={editButtonStyle}
            >
              <SVGIcon name="pencil" width={25} fill="#333" />
            </button>
          </li>
          <div className='list-items'>
            <ul>
              {items.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    toggleItemCompletion={event => toggleItemCompletion(id, event)}
                    deleteItem={event => deleteItem(id, event)}
                    editItem={event => editItem(id, event)}
                  />
                );
              })}
            </ul>
          </div>
          <li>
            <AddItem
              list={list}
              addItem={(event) => addItem(id, event)}
            />
          </li>
        </ul>
      </div>
    );
  }
}

// PropTypes
List.propTypes = {
  list: PropTypes.object.isRequired
}

const editButtonStyle = {
  visibility: 'hidden',
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.1em',
  marginRight: '0.5em',
  float: 'right'
}

const deleteButtonStyle = {
  // visibility: 'hidden',
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.1em',
  marginRight: '1.55em',
  float: 'right'
}

export default List;