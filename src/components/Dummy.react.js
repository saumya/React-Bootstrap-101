//
// Why this is not working ?!
// bundle.js:22120 Uncaught ReferenceError: dispatch is not defined
//
import React, {Component} from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'

class Dummy extends Component{
  constructor(props){
    super(props)
  }
  render(){
    var uName,uPassword ;
    var that = this ;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()

          console.group("Dummy : '%s'", 'Dummy');
          console.log('Dummy');
          console.log(dispatch); //Uncaught ReferenceError: dispatch is not defined
          console.log('Dummy : Submit : uName', uName.value.trim());
          console.log('Dummy : Submit : uPassword', uPassword.value.trim());
          console.groupEnd();

          if (!uName.value.trim() || !uPassword.value.trim() ) {
            return
          }

          //dispatch(addTodo(uName.value,uPassword.value))
          //uName.value = uPassword.value = ''
        }}>
          <input ref={node1 => { uName = node1 }} />
          <input ref={node2 => { uPassword = node2 }} />
          <button type="submit"> Dummy </button>
        </form>
      </div>
    )
  }
}

Dummy = connect()(Dummy)
export default Dummy
