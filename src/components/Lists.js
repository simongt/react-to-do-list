import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';

export class Lists extends Component {

  render() {
    const { lists, toggleItemCompletion, deleteItem, editItem } = this.props;
    return (
      <div className="lists">
        {lists.map(list => {
          return (
            <List
              key={list.id}
              list={list}
              toggleItemCompletion={toggleItemCompletion}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
      </div>
    )
  }
}

// PropTypes
Lists.propTypes = {
  lists: PropTypes.array.isRequired
}

export default Lists;
