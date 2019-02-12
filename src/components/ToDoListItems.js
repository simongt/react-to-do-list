import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem';

export class ToDoListItems extends Component {
  render() {
    const {list} = this.props;
    return (
      <div className="list">
        <h2 className="list-label">{list.label}</h2>
        <div className="list-items">
          <ul>
            {list.items.map(item => {
              return (
                <ToDoListItem key={item.id} item={item} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoListItems;