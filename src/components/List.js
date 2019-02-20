import React, { Component } from 'react'; // TO-DO: add createRef API
import PropTypes from 'prop-types';
// import { css } from 'emotion';
import ListItem from './ListItem';
import AddItem from './AddItem';
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
      <label style={{
        display: 'flex'
      }}>
        {/* input field to update list label */}
        <input
          type="text"
          defaultValue={listLabel}
          ref="listLabel"
          autoFocus={true}
          style={{
            flex: '1',
            border: '1px solid transparent',
            outline: 'none',
            background: 'transparent',
            fontFamily: "'Indie Flower', cursive",
            fontSize: '1em',
            paddingLeft: '0.2em',
            paddingBottom: '0.1em',
            marginTop: '-1em',
            marginBottom: '-1.1em',
            marginLeft: '-0.04em'
          }}
          onKeyPress={event => this.handleKeyPress(event)}
        />
        {/* submit icon */}
        <button
          style={{
            background: 'transparent',
            border: '1px solid transparent',
            outline: 'none',
            cursor: 'pointer',
            marginTop: '-1em',
            marginRight: '0.4em'
          }}
          onClick={event => this.updateListLabel(event)}
        >
          <SVGIcon name="checkmark" width={20} fill="#333" />
        </button>
        {/* cancel icon */}
        <button
          style={{
            background: 'transparent',
            border: '1px solid transparent',
            outline: 'none',
            cursor: 'pointer',
            marginTop: '-1em',
            marginRight: '4.1em',
            float: 'right'
          }}
          onClick={this.toggleInputMode}
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
      <div className='list' style={{
        margin: '0',
        padding: '0',
        lineHeight: '2em'
      }}>
        <ul style={{
          border: '1px solid transparent',
          listStyle: 'none',
          margin: '0',
          padding: '0',
          borderBottom: '1px solid lightblue'
        }}>
          <li className='list-label' style={{
            borderBottom: '1px solid lightblue',
            color: '#444',
            fontSize: '1.5em',
            textIndent: '0.2em',
            paddingTop: '0.6em',
            lineHeight: '0.7em'
          }}>
            {inputModeEnabled ? 
              this.renderListLabelInputMode() :
              this.renderListLabel()
            }
            {/* delete icon to remove list and its items */}
            {inputModeEnabled ? (
              <button
                style={{
                  background: 'transparent',
                  border: '1px solid transparent',
                  outline: 'none',
                  cursor: 'pointer',
                  marginTop: '-2.6em',
                  marginRight: '1.5em',
                  float: 'right'
                }}
                onClick={event => deleteList(id, event)}
              >
                <SVGIcon name="trash" width={25} fill="#333" />
              </button>
            ) : (
              <button
                  style={{
                    background: 'transparent',
                    border: '1px solid transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    marginTop: '-1.2em',
                    marginRight: '1.5em',
                    float: 'right'
                  }}
                onClick={event => deleteList(id, event)}
              >
                <SVGIcon name="trash" width={25} fill="#333" />
              </button>
            )}
            {/* edit icon to enter input mode for updating list label */}
            {inputModeEnabled ? (<></>) : (
              <button
                style={{
                  background: 'transparent',
                  border: '1px solid transparent',
                  outline: 'none',
                  cursor: 'pointer',
                  marginTop: '-1em',
                  marginRight: '0em',
                  float: 'right'
                }}
                onClick={this.toggleInputMode}
              >
                <SVGIcon name="pencil" width={23} fill="#333" />
              </button>
            )}
          </li>
          <div className='list-items'>
            <ul style={{
              listStyle: 'none'
            }}>
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
              addItem={event => addItem(id, event)}
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

export default List;