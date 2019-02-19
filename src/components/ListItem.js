import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";
import AutosizeInput from 'react-input-autosize';

export class ListItem extends Component {

  state = {
    itemDescription: this.props.item.description,
    inputModeEnabled: false
  }

  crossOutCompletedItems = () => {
    const { item } = this.props;
    return item.isComplete ? scribbleOutItem : unscribbleOutItem;
  }

  toggleInputMode = () => {
    this.setState(prevState => ({
      inputModeEnabled: !prevState.inputModeEnabled
    }));
  }

  updateItemDescription = event => {
    this.setState({
      itemDescription: this.refs.itemDescription.value
    });
    this.toggleInputMode();
    this.props.editItem(
      this.props.item.id,
      this.refs.itemDescription.value,
      event
    );
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.updateItemDescription(event);
    }
    if (event.key === 'Escape') {
      this.toggleInputMode();
    }
  }

  // render view (to edit item description) when input mode is enabled
  renderItemDescriptionInputMode = () => (
    <>
      <input
        disabled
        type='checkbox'
        style={checkboxStyle}
        onChange={event => this.props.toggleItemCompletion(this.props.item.id, event)}
      />
      <AutosizeInput
        type="text"
        defaultValue={this.state.itemDescription}
        placeholder={this.state.itemDescription}
        placeholderIsMinWidth={true}
        ref="itemDescription"
        autoFocus={true}
        inputStyle={editItemDescriptionInputStyle}
        onKeyPress={event => this.handleKeyPress(event)}
      />
      <button
        onClick={event => this.updateItemDescription(event)}
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
    </>
  );
  
  // render default view whenever input mode isn't enabled
  renderItemDescription = () => (
    <>
      <input
        type='checkbox'
        style={checkboxStyle}
        onChange={event => this.props.toggleItemCompletion(this.props.item.id, event)}
      />
      <span onClick={this.toggleInputMode}>
        {' ' + this.state.itemDescription}
      </span>
    </>
  );

  render() {
    const { itemDescription, inputModeEnabled } = this.state;
    const {
      toggleItemCompletion,
      deleteItem,
      editItem
    } = this.props;
    const { id, description } = this.props.item;
    return (
      <div className='list-item'>
        <li
          className='item-description'
          style={this.crossOutCompletedItems()}
        >
          {inputModeEnabled ?
            this.renderItemDescriptionInputMode() :
            this.renderItemDescription()
          }
          <button
            onClick={event => deleteItem(id, event)}
            style={deleteButtonStyle}
          >
            <SVGIcon name="trash" width={25} fill="#333" />
          </button>
          <button
            onClick={event => editItem(id, event)}
            style={editButtonStyle}
          >
            <SVGIcon name="pencil" width={25} fill="#333" />
          </button>
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
  textDecorationColor: 'orangered',
  transition: 'all 0.25s linear'
}

const unscribbleOutItem = {
  textDecoration: 'line-through',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'transparent',
  transition: 'all 0.25s linear'
}

const checkboxStyle = {
  marginTop: '-.25em',
  marginLeft: '.5em',
  float: 'left'
}

const submitAndCancelButtonStyle = {
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.4em',
  marginBottom: '-0.8em',
  marginLeft: '0.1em'
}

const editItemDescriptionInputStyle = {
  border: '1px solid transparent',
  outline: 'none',
  background: 'transparent',
  fontFamily: "'Indie Flower', cursive",
  fontSize: '1em',
  marginTop: '-1.4em',
  marginBottom: '-0.8em',
  marginLeft: '-0.47em'
}

const editButtonStyle = {
  visibility: 'hidden',
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.5em',
  marginRight: '0.5em',
  float: 'right'
}

const deleteButtonStyle = {
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.6em',
  marginRight: '1.5em',
  float: 'right'
}


export default ListItem;
