import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

class App extends Component {
  render() {
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      }
    ];

    return (
      <div>
        <div>
          <Header heading="Phone Directory" />

          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        <div>
          {subscribers.map(sub => {
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

export default App;
