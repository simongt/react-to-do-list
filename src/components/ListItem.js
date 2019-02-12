import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="list-item">
        <li className="item-description">{item.description}</li>
      </div>
    );
  }
}

// PropTypes
ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ListItem
