import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

class Showsubcribers extends Component {
  render() {
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <button className="custom-btn">Back</button>

          <form className="subscriber-form">
            <label htmlFor="name" className="label-control">
              Name:{" "}
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
            />
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone:{" "}
            </label>
            <br />
            <input
              id="phone"
              type="text"
              className="input-control"
              name="phone"
            />
            <br />
            <br />

            <div className="subscriber-info-container">
              <span className="subscriber-to-add-heading">
                Subscriber to be added:{" "}
              </span>
              <br />
              <span className="subscriber-info">Name: </span>
              <br />
              <span className="subscriber-info">Phone: </span>
              <br />
            </div>

            <button type="submit" className="custom-btn add-btn">
              Add
            </button>
          </form>
          <div>
            {this.props.subscribersList.map(sub => {
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
      </div>
    );
  }
}

export default Showsubcribers;
