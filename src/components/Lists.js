import React, { Component } from 'react';
import List from './List';
import AddList from './AddList';
import PropTypes from 'prop-types';

export class Lists extends Component {

  render() {
    const {
      lists,
      toggleItemCompletion,
      addItem,
      deleteItem,
      editItem,
      addList,
      deleteList,
      editList
    } = this.props;
    return (
      <div>
        <AddList addList={addList} />
        <div className='lists'>
          {lists.map(list => {
            return (
              <List
                key={list.id}
                list={list}
                toggleItemCompletion={toggleItemCompletion}
                addItem={addItem}
                deleteItem={deleteItem}
                editItem={editItem}
                deleteList={deleteList}
                editList={editList}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

// PropTypes
Lists.propTypes = {
  lists: PropTypes.array.isRequired
}

export default Lists;
