import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css";

class AddSusbscriber extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    };
  }

  inputChangedHandler = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render() {
    return (
      <div>
        <div>
          <Header heading="Phone Directory" />

          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        <div>
          {this.state.subscribersListToShow.map(sub => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AddSusbscriber;
