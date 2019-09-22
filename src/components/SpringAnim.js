import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
export default class SpringAnim extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -100 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div className="App" style={props}>
            <div>
              <h1>hello</h1>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
