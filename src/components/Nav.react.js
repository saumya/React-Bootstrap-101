//
'user strict';
import React,{Component} from 'react'
class Nav extends Component {
  render(){
    return(
      <nav>
        <ul>{this.props.children}</ul>
      </nav>
    )
  }
}
export default Nav
