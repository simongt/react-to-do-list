import React, { Component } from 'react';

export class ListItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="list-item">
        <li className="list-item-description">
          {item.description}
        </li>
      </div>
    );
  }
}

export default ListItem
