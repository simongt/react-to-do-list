import React, { Component } from 'react';
import ToDoListItems from './ToDoListItems';

export class ToDoLists extends Component {
  render() {
    const {lists} = this.props;
    return (
      <div className="lists">
        {lists.map(list => {
          return (
            <ToDoListItems key={list.id} list={list} />
          );
        })}
      </div>
    )
  }
}

export default ToDoLists;
