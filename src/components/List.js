import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

export class List extends Component {
  render() {
    const { toggleItemCompletion } = this.props;
    const { id, label, items } = this.props.list;
    const listId = id;
    return (
      <div className="list">
        <ul>
          <li className="list-label">{label}</li>
          <div className="list-items">
            <ul>
              {items.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    toggleItemCompletion={toggleItemCompletion.bind(this, listId)}
                  />
                );
              })}
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}

// PropTypes
List.propTypes = {
  list: PropTypes.object.isRequired
}

export default List;