import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link } from "react-router-dom";
class AddSusbscriber extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: ""
    };
    this.props.history.push("/");
  }

  inputChangedHandler = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render() {
    const { name, phone } = this.state;
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <Link to="/">
            <button className="custom-btn">Back</button>
          </Link>
          <form
            className="subscriber-form"
            onSubmit={this.onFormSubmitted.bind(this)}
          >
            <label htmlFor="name" className="label-control">
              Name:{" "}
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
              onChange={this.inputChangedHandler}
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
              onChange={this.inputChangedHandler}
            />
            <br />
            <br />

            <div className="subscriber-info-container"></div>
            <span className="subscriber-to-add-heading">
              Subscriber to be added:{" "}
            </span>
            <br />
            <span className="subscriber-info">Name: {name}</span>
            <br />
            <span className="subscriber-info">Phone: {phone}</span>
            <br />

            <button type="submit" className="custom-btn add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSusbscriber;
