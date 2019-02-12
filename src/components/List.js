import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

export class List extends Component {
  render() {
    const {list} = this.props;
    return (
      <div className="list">
        <ul>
          <li className="list-label">{list.label}</li>
          <div className="list-items">
            <ul>
              {list.items.map(item => {
                return (
                  <ListItem key={item.id} item={item} />
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
  list: PropTypes.array.isRequired
}

export default List;