import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon';

export class List extends Component {

  state = {
    listLabel: this.props.list.label,
    inputModeEnabled: false
  }

  toggleInputMode = () => {
    this.setState(prevState => ({
      inputModeEnabled: !prevState.inputModeEnabled
    }));
  }

  updateListLabel = () => {
    this.setState(prevState => ({
      listLabel: this.refs.listLabel.value
    }));
    this.toggleInputMode();
  }

  // render view (to edit list label) when input mode is enabled
  renderListLabelInputMode = () => {
    return (
      <label>
        <input
          type="text"
          defaultValue={this.state.listLabel}
          ref="listLabel"
          autoFocus={true}
          style={editListLabelInputStyle}
        />
        <button
          onClick={this.updateListLabel}
          style={submitAndCancelButtonStyle}
        >
          <SVGIcon name="checkmark" width={20} fill="#333" />
        </button>
        <button
          onClick={this.toggleInputMode}
          style={submitAndCancelButtonStyle}
        >
          <SVGIcon name="x" width={20} fill="#333" />
        </button>
      </label>
    );
  }

  // render default view whenever input mode isn't enable
  renderListLabel = () => {
    return (
      <span onClick={this.toggleInputMode}>{this.state.listLabel}</span>
    );
  }

  render() {
    const {
      list,
      toggleItemCompletion,
      addItem,
      deleteItem,
      editItem,
      deleteList
    } = this.props;
    const { inputModeEnabled } = this.state;
    const { id, items } = this.props.list;
    return (
      <div className='list'>
        <ul>
          <li className='list-label'>
            {inputModeEnabled ? 
              this.renderListLabelInputMode() :
              this.renderListLabel()
            }
            <button
              onClick={event => deleteList(id, event)}
              style={deleteButtonStyle}
            >
              <SVGIcon name="trash" width={25} fill="#333" />
            </button>
            {/* <button
              onClick={event => editList(id, event)}
              style={editButtonStyle}
            > */}
            {inputModeEnabled ? (<></>) :
              (
                <button
                  onClick={this.toggleInputMode}
                  style={editButtonStyle}
                >
                  <SVGIcon name="pencil" width={25} fill="#333" />
                </button>
              )
            }
          </li>
          <div className='list-items'>
            <ul>
              {items.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    toggleItemCompletion={event => toggleItemCompletion(id, event)}
                    deleteItem={event => deleteItem(id, event)}
                    editItem={event => editItem(id, event)}
                  />
                );
              })}
            </ul>
          </div>
          <li>
            <AddItem
              list={list}
              addItem={(event) => addItem(id, event)}
            />
          </li>
        </ul>
      </div>
    );
  }
}

// PropTypes
List.propTypes = {
  list: PropTypes.object.isRequired
}

const editListLabelInputStyle = {
  border: '1px solid transparent',
  outline: 'none',
  background: 'transparent',
  fontFamily: "'Indie Flower', cursive",
  fontSize: '1em',
  marginTop: '-1em',
  marginBottom: '-0.8em',
  marginLeft: '-0.04em'
}

const submitAndCancelButtonStyle = {
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1em',
  marginBottom: '-0.8em',
  marginLeft: '-0.04em'
}

const editButtonStyle = {
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.1em',
  marginRight: '0.5em',
  float: 'right'
}

const deleteButtonStyle = {
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.1em',
  marginRight: '1.55em',
  float: 'right'
}

export default List;