import React, { Component } from 'react'; // TO-DO: add createRef API
import PropTypes from 'prop-types';
import SVGIcon from "./SVGIcon";

export class ListItem extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      itemDescription: '',
      inputModeEnabled: false       
    }
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

    // TO-DO: update string refs to use either callback refs or createRef API

    this.setState({
      itemDescription: value
    });
    
    this.toggleInputMode();
    
    let updatedItem = {
      id: id,
      description: value,
      isComplete: false
    }

    // only seems to pass first arg but this method call is somehow allowed
    // this is preventing state update in Lists component
    // editItem(id, value, event);

    // bundled the args into an object (hackish way to pass everything together)
    editItem(updatedItem, event);
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

    // TO-DO: update string refs to use either callback refs or createRef API

    return (
      <label style={{
        display: 'flex',
        paddingTop: '0.6em',
        paddingLeft: '0.38em',
        paddingBottom: '0.07em'
      }}>
      
        {/* input field to update item description */}
        <input
          type="text"
          defaultValue={itemDescription}
          ref="itemDescription"
          autoFocus={true}
          style={{
            flex: '1',
            border: '1px solid transparent',
            outline: 'none',
            background: 'transparent',
            fontFamily: "'Indie Flower', cursive",
            fontSize: '1em',
            marginTop: '-1.4em',
            marginBottom: '-0.8em',
            marginLeft: '-0.04em',
            marginRight: '-0.1em'
          }}
          onKeyPress={this.handleKeyPress}
        />

        {/* submit icon to confirm update */}
        <button
          style={{
            // visibility: 'hidden',
            background: 'transparent',
            border: '1px solid transparent',
            outline: 'none',
            cursor: 'pointer',
            marginTop: '-2.3em',
            marginRight: '0.5em'
          }}
          onClick={this.updateItemDescription}
        >
          <SVGIcon name="checkmark" width={21} fill="#333" />
        </button>

        {/* cancel icon to end input mode */}
        <button
          style={{
            // visibility: 'hidden',
            background: 'transparent',
            border: '1px solid transparent',
            outline: 'none',
            cursor: 'pointer',
            marginTop: '-2.4em',
            marginRight: '4em'
          }}
          onClick={this.toggleInputMode}
        >
          <SVGIcon name="x" width={20} fill="#333" />
        </button>
      </label>
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
              style={{
                marginTop: '-.25em',
                marginLeft: '.5em',
                float: 'left'
              }}
              disabled={true}
            />
          ) : (
            <input
              type='checkbox'
                style={{
                  marginTop: '-.25em',
                  marginLeft: '.5em',
                  float: 'left'
                }}
              onChange={event => toggleItemCompletion(id, event)}
            />
          )}
          {/* toggle between editing and non-editing mode views */}
          {inputModeEnabled ?
            this.renderItemDescriptionInputMode() :
            this.renderItemDescription()
          }
          {/* load clickable SVG icon to delete item */}
          {inputModeEnabled ? (
            <button
              style={{
                // visibility: 'hidden',
                background: 'transparent',
                border: '1px solid transparent',
                outline: 'none',
                cursor: 'pointer',
                marginTop: '-2.6em',
                marginRight: '1.44em',
                float: 'right'
              }}
              onClick={event => deleteItem(id, event)}
            >
              <SVGIcon name="trash" width={25} fill="#333" />
            </button>
          ) : (
            <button
              style={{
                // visibility: 'hidden',
                background: 'transparent',
                border: '1px solid transparent',
                outline: 'none',
                cursor: 'pointer',
                marginTop: '-1.6em',
                marginRight: '1.5em',
                float: 'right'
              }}
              onClick={event => deleteItem(id, event)}
            >
              <SVGIcon name="trash" width={25} fill="#333" />
            </button>
          )}
          {/* load clickable SVG icon to toggle editing mode views */}
          {inputModeEnabled ? (<></>) : (
            <button
              style={{
                // visibility: 'hidden',
                background: 'transparent',
                border: '1px solid transparent',
                outline: 'none',
                cursor: 'pointer',
                marginTop: '-1.35em',
                marginRight: '0.1em',
                float: 'right'
              }}
              onClick={this.toggleInputMode}
            >
              <SVGIcon name="pencil" width={20} fill="#333" />
            </button>
          )}
        </li>
      </div>
    );
  }

  componentDidMount = () => {
    let { description } = this.props.item;
    description = (
      description === '' ?
        'This to-do item is blank... click to update.' :
        description
    ).trim();
    this.setState({
      itemDescription: description
    });
  }
}

// PropTypes
ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

const scribbleOutItem = {
  borderBottom: '1px solid lightblue',
  color: '#222',
  fontSize: '1em',
  textIndent: '0.4em',
  paddingTop: '1.2em',
  lineHeight: '0.7em',
  textDecoration: 'line-through',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'orangered',
  transition: 'all 0.25s linear'
}

const unscribbleOutItem = {
  borderBottom: '1px solid lightblue',
  color: '#222',
  fontSize: '1em',
  textIndent: '0.4em',
  paddingTop: '1.2em',
  lineHeight: '0.7em',
  textDecoration: 'line-through',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'transparent',
  transition: 'all 0.25s linear'
}

export default ListItem;