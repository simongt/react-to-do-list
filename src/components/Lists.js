import React, { Component } from 'react';
import uuid from 'uuid';

import List from './List';
import AddList from './AddList';

export class Lists extends Component {

  state = {
    lists: [{
      id: uuid.v4(),
      label: 'Personal',
      items: [{
        id: uuid.v4(),
        description: 'Do laundry and fold clothes.',
        isComplete: false
      }, {
        id: uuid.v4(),
        description: 'Shovel snow off driveway and pour salt.',
        isComplete: false
      }, {
        id: uuid.v4(),
        description: 'Take car to get oil change and smog check.',
        isComplete: false
      }, {
        id: uuid.v4(),
        description: 'Prep lunch meals for week.',
        isComplete: false
      }]
    }, {
      id: uuid.v4(),
      label: 'Family',
      items: [{
        id: uuid.v4(),
        description: "Send flowers to wife for Valentine's Day.",
        isComplete: false
      }, {
        id: uuid.v4(),
        description: "Make appointment with son's teacher.",
        isComplete: false
      }]
    }, {
      id: uuid.v4(),
      label: 'Work',
      items: [{
        id: uuid.v4(),
        description: 'Respond to new emails.',
        isComplete: false
      }, {
        id: uuid.v4(),
        description: 'Follow up on existing tickets.',
        isComplete: false
      }, {
        id: uuid.v4(),
        description: 'Setup 1-on-1 meeting with manager.',
        isComplete: false
      }]
    }]
  }

  toggleItemCompletion = (listId, itemId) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if (list.id === listId) {
          list.items.map(item => {
            if (item.id === itemId) {
              item.isComplete = !item.isComplete;
            }
            return item;
          });
        }
        return list;
      })
    }));
  }

  addList = (listLabel) => {
    const newList = {
      id: uuid.v4(),
      label: listLabel,
      items: []
    }
    this.setState(prevState => ({
      lists: [...prevState.lists, newList]
    }));
  }

  deleteItem = (listId, itemId) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if (list.id === listId) {
          list.items = [...list.items.filter(item => item.id !== itemId)];
        }
        return list;
      })
    }));
  }

  editItem = (listId, itemId) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if (list.id === listId) {
          console.log('edit item: ' + list.items[itemId].description)
        }
        return list;
      })
    }));
  }

  addItem = (listId, itemDescription) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if (list.id === listId) {
          const newItem = {
            id: uuid.v4(),
            description: itemDescription,
            isComplete: false
          }
          list.items.push(newItem);
        }
        return list;
      })
    }));
  }

  deleteList = (listId) => {
    console.log('delete list: ' + listId);
    // TO-DO
  }

  editList = (listId) => {
    console.log('edit list: ' + listId);
    // TO-DO
  }

  render() {
    const { lists } = this.state;
    return (
      <div>
        <AddList addList={this.addList} />
        <div className='lists'>
          {lists.map(list => {
            return (
              <List
                key={list.id}
                list={list}
                toggleItemCompletion={this.toggleItemCompletion}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                deleteList={this.deleteList}
                editList={this.editList}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default Lists;