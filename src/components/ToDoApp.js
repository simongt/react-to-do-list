import React, { Component } from "react";
import "./ToDoApp.css";
import ToDoLists from "./ToDoLists";

class ToDoApp extends Component {
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
      <div className="app">
        <h1>To-Do App</h1>
        <ToDoLists lists={lists} />
      </div>
    );
  }
}

export default ToDoApp;
