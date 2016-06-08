//
'use strict';
import React, {Component} from 'react'
class Two extends Component {
  render(){
    return (
      <div>
        <div>Two</div>
        { this.props.children }
      </div>
    );
  }
}
export default Two;
