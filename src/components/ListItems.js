import React, { Component } from 'react';
import ListItem from './ListItem';

export class ListItems extends Component {
  render() {
    const {list} = this.props;
    return (
      <div className="list">
        <h2 className="list-label">{list.label}</h2>
        <div className="list-items">
          <ul>
            {list.items.map(item => {
              return (
                <ListItem key={item.id} item={item} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListItems;