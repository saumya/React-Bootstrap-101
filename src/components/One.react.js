//
'use strict';
import React, {Component} from 'react'
class One extends Component {
  render(){
    return (
      <div>
        <div>One</div>
        { this.props.children }
      </div>
    );
  }
}
/*
One.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
*/
export default One;
