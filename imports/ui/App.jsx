import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/collections.js';

import Event from './Event.jsx';

// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const date = ReactDOM.findDOMNode(this.refs.dateInput).value.trim();
    const category = ReactDOM.findDOMNode(this.refs.categoryInput).value.trim();
    const name = ReactDOM.findDOMNode(this.refs.eventNameInput).value.trim();
    const place = ReactDOM.findDOMNode(this.refs.placeInput).value.trim();
 
    Events.insert({
      date,
      category,
      name,
      place,
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.dateInput).value = '';
    ReactDOM.findDOMNode(this.refs.categoryInput).value = '';
    ReactDOM.findDOMNode(this.refs.eventNameInput).value = '';
    ReactDOM.findDOMNode(this.refs.placeInput).value = '';
  }
 
  renderEvents() {
    return this.props.events.map((event) => (
      <Event key={event._id} event={event} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Events List</h1>
 
          <form className="new-event" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="date"
              ref="dateInput"
              placeholder="Date"
            />
            <input
                type="text"
                ref="categoryInput"
                placeholder="Category"
            />
            <input
                type="text"
                ref="eventNameInput"
                placeholder="Event Name"
            />
            <input
                type="text"
                ref="placeInput"
                placeholder="Place"
            />
            <input type="submit" value="Add"/>
          </form>
        </header>

        <ul>
          {this.renderEvents()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  events: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    events: Events.find({}, { sort: { date: -1 } }).fetch(),
  };
}, App);