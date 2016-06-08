//
'use strict';
import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router'
class MenuItemLink extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var a = '';
    if(this.props.isIndex){
      a = <li><IndexLink to={this.props.to}>Home</IndexLink></li>
    }else{
      a = <li><Link to={this.props.to}> {this.props.itemName} </Link></li>
    }
    return( a )
  }
}

export default MenuItemLink
