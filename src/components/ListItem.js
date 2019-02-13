import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
  crossOutCompletedItems = () => {
    const { item } = this.props;
    if(item.isComplete) {
      return ({
        textDecoration: 'line-through',
        textDecorationStyle: 'wavy',
        textDecorationColor: 'orangered',
        transition: '1s'
      });
    } else {
      return ({
        textDecoration: 'none'
      });
    }
  }
  render() {
    const { item } = this.props;
    return (
      <div className="list-item">
        <li
          className="item-description"
          style={this.crossOutCompletedItems()}
        >
          {item.description}
        </li>
      </div>
    );
  }
}

// PropTypes
ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ListItem
