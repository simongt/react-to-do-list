import React, { Component } from "react";
import Lists from "./Lists";
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
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.id === listId) {
          list.items.map(item => {
            if(item.id === itemId) {
              item.isComplete = !item.isComplete;
            }
            return item;
          })
        }
        return list;
      })
    });
  }

  render() {
    const { lists } = this.state;
    return (
      <div className="app">
        <div style={verticalRedLines} />
        <p style={appTitleStyle}>To-Do List Manager</p>
        <Lists
          lists={lists}
          toggleItemCompletion={this.toggleItemCompletion}
        />
      </div>
    );
  }
}

// left set of red lines to imitate the appearance of paper
const verticalRedLines = {
  borderLeft: `0.5px solid #ffaa9f`,
  borderRight: `0.5px solid #ffaa9f`,
  width: `0.2em`,
  height: `100vh`,
  float: `left`,
  marginLeft: `4em`
}

// add styling to app title so that it appears above paper's 1st line
const appTitleStyle = {
  color: `#666`,
  fontSize: `3em`,
  margin: `0`,
  padding: `0`,
  textIndent: `0.1em`,
  paddingTop: `0.8em`,
  lineHeight: `0.8em`,
  borderBottom: `1px solid lightblue`
}

export default App;
