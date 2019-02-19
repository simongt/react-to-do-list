import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";
// import AutosizeInput from 'react-input-autosize';

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
    const { editItem } = this.props;
    const { id } = this.props.item;
    const { value } = this.refs.itemDescription;

    this.setState({
      itemDescription: value
    });
    
    this.toggleInputMode();
    
    editItem(id, value, event);
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.updateItemDescription();
    }
    if (event.key === 'Escape') {
      this.toggleInputMode();
    }
  }

  // render view (to edit item description) when input mode is enabled
  renderItemDescriptionInputMode = () => {
    const { itemDescription } = this.state;
    return (
      <>
        {/* <AutosizeInput
        type="text"
        defaultValue={this.state.itemDescription}
        ref="itemDescription"
        autoFocus
        inputStyle={editItemDescriptionInputStyle}
        onKeyPress={event => this.handleKeyPress(event)}
        /> */}
        <input
          type="text"
          defaultValue={itemDescription}
          ref="itemDescription"
          autoFocus={true}
          style={editItemDescriptionInputStyle}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={this.updateItemDescription}
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
  }
  
  // render default view whenever input mode isn't enabled
  renderItemDescription = () => (
    <span onClick={this.toggleInputMode}>
      {' ' + this.state.itemDescription}
    </span>
  );

  render() {
    const { inputModeEnabled } = this.state;
    const {
      toggleItemCompletion,
      deleteItem
    } = this.props;
    const { id } = this.props.item;
    return (
      <div className='list-item'>
        {/* cross out completed items */}
        <li
          className='item-description'
          style={this.crossOutCompletedItems()}
        >
          {/* load checkbox to mark items complete / incomplete */}
          {inputModeEnabled ? (  
            <input
              type='checkbox'
              style={checkboxStyle}
              disabled={true}
            />
          ) : (
            <input
              type='checkbox'
              style={checkboxStyle}
              onChange={event => toggleItemCompletion(id, event)}
            />
          )}
          {/* toggle between editing and non-editing mode views */}
          {inputModeEnabled ?
            this.renderItemDescriptionInputMode() :
            this.renderItemDescription()
          }
          {/* load clickable SVG icon to delete item */}
          <button
            onClick={event => deleteItem(id, event)}
            style={deleteButtonStyle}
          >
            <SVGIcon name="trash" width={25} fill="#333" />
          </button>
          {/* load clickable SVG icon to toggle editing mode views */}
          {inputModeEnabled ? (<></>) : (
            <button
              onClick={this.toggleInputMode}
              style={editButtonStyle}
            >
              <SVGIcon name="pencil" width={25} fill="#333" />
            </button>
          )}
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

// const submitAndCancelButtonStyle = {
//   background: 'transparent',
//   border: '1px solid transparent',
//   outline: 'none',
//   cursor: 'pointer',
//   marginTop: '-1.4em',
//   marginBottom: '-0.8em',
//   marginLeft: '0.1em'
// }

// const editItemDescriptionInputStyle = {
//   border: '1px solid transparent',
//   outline: 'none',
//   background: 'transparent',
//   fontFamily: "'Indie Flower', cursive",
//   fontSize: '1em',
//   marginTop: '-1.4em',
//   marginBottom: '-0.8em',
//   marginLeft: '-0.47em'
// }

const submitAndCancelButtonStyle = {
  background: 'transparent',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '-1.4em',
  marginBottom: '-0.8em',
  marginLeft: '-0.04em'
}

const editItemDescriptionInputStyle = {
  border: '1px solid transparent',
  outline: 'none',
  background: 'transparent',
  fontFamily: "'Indie Flower', cursive",
  fontSize: '1em',
  marginTop: '-1.4em',
  marginBottom: '-0.8em',
  marginLeft: '-0.04em'
}

const editButtonStyle = {
  // visibility: 'hidden',
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
