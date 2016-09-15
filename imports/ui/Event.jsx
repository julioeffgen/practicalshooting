import React, { Component, PropTypes } from 'react';
 
import { Events } from '../api/events.js';
 
// Event component - represents a single event
export default class Event extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
      Events.update(this.props.event._id, {
      $set: { checked: !this.props.event.checked },
    });
  }
 
  deleteThisEvent() {
    Events.remove(this.props.event._id);
  }
 
  render() {
    // Give events a different className when they are checked off,
    // so that we can style them nicely in CSS
    const eventClassName = this.props.event.checked ? 'checked' : '';
 
    return (
      <li className={eventClassName}>
        <button className="delete" onClick={this.deleteThisEvent.bind(this)}>
          &times;
        </button>
 
        <input
          type="checkbox"
          readOnly
          checked={this.props.event.checked}
          onClick={this.toggleChecked.bind(this)}
        />
 
          <span className="text">{this.props.event.date}</span>
          <span className="text">{this.props.event.category}</span>
          <span className="text">{this.props.event.name}</span>
          <span className="text">{this.props.event.place}</span>
      </li>
    );
  }
}