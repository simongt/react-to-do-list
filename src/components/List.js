import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon';
// import AutosizeInput from 'react-input-autosize';

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

  updateListLabel = event => {
    const { editList } = this.props;
    const { id } = this.props.list;
    const { value } = this.refs.listLabel;

    this.setState({
      listLabel: value
    });
    
    this.toggleInputMode();
    
    editList(id, value, event);
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.updateListLabel(event);
    }
    if (event.key === 'Escape') {
      this.toggleInputMode();
    }
  }

  // render view (to edit list label) when input mode is enabled
  renderListLabelInputMode = () => {
    const { listLabel } = this.state;
    return (
      <label>
        {/* <AutosizeInput
          type="text"
          defaultValue={this.state.listLabel}
          ref="listLabel"
          autoFocus={true}
          inputStyle={editListLabelInputStyle}
          onKeyPress={event => this.handleKeyPress(event)}
        /> */}
        <input
          type="text"
          defaultValue={listLabel}
          ref="listLabel"
          autoFocus={true}
          style={editListLabelInputStyle}
          onKeyPress={event => this.handleKeyPress(event)}
        />
        <button
          onClick={event => this.updateListLabel(event)}
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

  // render default view whenever input mode isn't enabled
  renderListLabel = () => (
    <span onClick={this.toggleInputMode}>
      {this.state.listLabel}
    </span>
  );

  render() {
    const {
      list,
      toggleItemCompletion,
      addItem,
      deleteItem,
      editItem,
      deleteList,
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
  // visibility: 'hidden',
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