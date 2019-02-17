import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import PropTypes from 'prop-types';

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
              onClick={deleteList.bind(this, id)}
              style={deleteButtonStyle}
            >x</button>
            <button
              onClick={editList.bind(this, id)}
              style={editButtonStyle}
            >edit</button>
          </li>
          <div className='list-items'>
            <ul>
              {items.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    toggleItemCompletion={toggleItemCompletion.bind(this, id)}
                    deleteItem={deleteItem.bind(this, id)}
                    editItem={editItem.bind(this, id)}
                  />
                );
              })}
            </ul>
          </div>
          <li>
            <AddItem
              list={list}
              addItem={addItem.bind(this, id)}
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
  background: '#4370db',
  color: 'white',
  border: '1px solid transparent',
  outline: 'none',
  borderRadius: '0.5em',
  cursor: 'pointer',
  marginTop: '-1.1em',
  marginRight: '0.5em',
  padding: '.5em .85em',
  float: 'right'
}

const deleteButtonStyle = {
  visibility: 'hidden',
  background: '#db4343',
  color: 'white',
  border: '1px solid transparent',
  outline: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  marginTop: '-1.1em',
  marginRight: '1.5em',
  padding: '.5em .85em',
  float: 'right'
}

export default List;