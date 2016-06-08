//
'use strict';
import React, {Component} from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <li onClick={this.props.onItemClick}>{this.props.itemName}</li>
    )
  }
}

export default MenuItem
