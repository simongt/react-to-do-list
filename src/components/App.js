import React, { Component } from "react";
import Lists from "./Lists";
import Header from "./layout/Header";
import "./App.css";

class App extends Component {
  state = {
    lists: [{
      id: 0,
      label: "Personal",
      items: [{
        id: 0,
        description: "Do laundry and fold clothes.",
        isComplete: false
      }, {
        id: 1,
        description: "Shovel snow off driveway and pour salt.",
        isComplete: false
      }, {
        id: 2,
        description: "Take car to get oil change and smog check.",
        isComplete: false
      }, {
        id: 3,
        description: "Prep lunch meals for week.",
        isComplete: false
      }]
    }, {
      id: 1,
      label: "Family",
      items: [{
        id: 0,
        description: "Send flowers to wife for Valentine's Day.",
        isComplete: false
      }, {
        id: 1,
        description: "Make appointment with son's teacher.",
        isComplete: false
      }]
    }, {
      id: 2,
      label: "Work",
      items: [{
        id: 0,
        description: "Respond to new emails.",
        isComplete: false
      }, {
        id: 1,
        description: "Follow up on existing tickets.",
        isComplete: false
      }, {
        id: 2,
        description: "Setup 1-on-1 meeting with manager.",
        isComplete: false
      }]
    }]
  }
  
  toggleItemCompletion = (listId, itemId) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if(list.id === listId) {
          list.items.map(item => {
            if(item.id === itemId) {
              item.isComplete = !item.isComplete;
            }
            return item;
          });
        }
        return list;
      })
    }));
  }

  deleteItem = (listId, itemId) => {
    this.setState(prevState => ({
      lists: prevState.lists.map(list => {
        if(list.id === listId) {
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
          // console.log('editing item: ' + list.items[itemId].description)
        }
        return list;
      })
    }));
  }

  render() {
    const { lists } = this.state;
    return (
      <div className="app">
        <Header />
        <Lists
          lists={lists}
          toggleItemCompletion={this.toggleItemCompletion}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

export default App;
