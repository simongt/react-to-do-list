import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
  crossOutCompletedItems = () => {
    const { item } = this.props;
    return item.isComplete ? scribbleOutItem : unscribbleOutItem;
  }

  render() {
    const { toggleItemCompletion } = this.props;
    const { id, description } = this.props.item;
    const itemId = id;
    return (
      <div className="list-item">
        <li
          className="item-description"
          style={this.crossOutCompletedItems()}
        >
          <input
            type="checkbox"
            onChange={toggleItemCompletion.bind(this, itemId)}
          />
          {' '}
          {description}
        </li>
      </div>
    );
  }
}

// PropTypes
ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

const scribbleOutItem = {
  textDecoration: 'line-through',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'orangered'
}

const unscribbleOutItem = {
  textDecoration: 'none',
  textDecorationStyle: 'none',
  textDecorationColor: 'none'
}

export default ListItem;
