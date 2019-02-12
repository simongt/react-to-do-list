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
        description: "Do laundry.",
        isComplete: false
      }, {
        id: 1,
        description: "Shovel snow off driveway, pour salt.",
        isComplete: false
      }, {
        id: 2,
        description: "Get oil change.",
        isComplete: false
      }]
    }, {
      id: 1,
      label: "Family",
      items: [{
        id: 0,
        description: "Send flowers to wife.",
        isComplete: false
      }, {
        id: 1,
        description: "Make appointment with son's teacher.",
        isComplete: false
      }, {
        id: 2,
        description: "Prep lunch meals for week.",
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

  render() {
    const {lists} = this.state;
    return (
      // <App> renders out the app title and <Lists>
      // <Lists> renders out an array of <List>
      // <List> renders out a list label and an array of <ListItem>
      // <ListItem> renders out an item description
      <div className="app">
        <div className="vertical-red-lines"/>
        <p className="app-title">To-Do List</p>
        <Lists lists={lists} />
      </div>
    );
  }
}

export default App;
