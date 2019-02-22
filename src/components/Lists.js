import React, { Component } from 'react';
import uuid from 'uuid';
import List from './List';
import AddList from './AddList';
import { seed } from './SeedList';

export class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
       lists: []
    }
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

  deleteList = listId => {
    this.setState(prevState => ({
      lists: [...prevState.lists.filter(list => list.id !== listId)]
    }));
  }

  addList = listLabel => {
    const newList = {
      id: uuid.v4(),
      label: listLabel,
      items: []
    }
    this.setState(prevState => ({
      lists: [...prevState.lists, newList]
    }));
  }

  editList = (listId, listLabel) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if (list.id === listId) {
          list.label = listLabel;
        }
        return list;
      })
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

  editItem = (listId, updatedItem) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if(list.id === listId) {
          list.items.forEach(item => {
            if(item.id === updatedItem.id) {
              item.description = updatedItem.description;
            }
          });
        }
        return list;
      })
    }))
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
                deleteItem={this.deleteItem}
                addItem={this.addItem}
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

  componentDidMount = () => {
    this.setState({ lists: seed }); // seed lists with sample data
  }
}

export default Lists;
