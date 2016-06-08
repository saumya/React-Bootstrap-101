//
'use strict';

import React, {Component} from 'react'
import MenuItem from './MenuItem.react'
import MenuItemLink from './MenuItemLink.react'
import Nav from './Nav.react'

class Menu extends Component {
  render(){
    return (
      <Nav>
        <MenuItem onItemClick={this._onHomeClick.bind(this)} itemName="Home MenuItem" />
        <MenuItem onItemClick={this._onLoginClick} itemName="Login MenuItem" />
        <MenuItem onItemClick={this._onRegisterClick} itemName="Register MenuItem" />
        <MenuItemLink to="/one" itemName="One" />
        <MenuItemLink to="/two" itemName="Two" />
        <MenuItemLink to="/three" itemName="Three" />
        <MenuItemLink isIndex={true} to="/" itemName="Home" />
      </Nav>
    );
  }
  _onHomeClick(e){
    debugger;
    console.log('Menu:_onHomeClick: synthetic event:',e);
    console.log('Menu:_onHomeClick: native event:',e.nativeEvent);
    console.log('Menu: FIX THIS : Its not routing !');
    console.info("Menu: I hope it should change the STATE from the STORE side, not here.");
    //this.context.router.push('/');
    //this.props.history.push('/');
  }
  _onLoginClick(){
    console.log('Menu:_onLoginClick');
  }
  _onRegisterClick(){
    console.log('Menu:_onRegisterClick');
  }
}
 export default Menu;
