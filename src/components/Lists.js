import React, { Component } from 'react';
import ListItems from './ListItems';

export class Lists extends Component {
  render() {
    const {lists} = this.props;
    return (
      <div className="lists">
        {lists.map(list => {
          return (
            <ListItems key={list.id} list={list} />
          );
        })}
      </div>
    )
  }
}

export default Lists;
