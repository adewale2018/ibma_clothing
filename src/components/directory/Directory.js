import React, { Component } from "react";

import "./Directory.css";
import { sections } from "./section";
import MenuItem from "../menu-item/MenuItem";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
