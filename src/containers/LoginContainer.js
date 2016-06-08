//
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { loginAction, dummyAPIAction } from '../actions'
/*
let LoginContainer = ({ onClick, loginStatus }) => {
  var uName,uPassword ;
  //var that = this ;
  return (
    <div>
      <div>Status : { loginStatus }</div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!uName.value.trim() || !uPassword.value.trim() ) {
          return
        }

        //dispatch(loginAction(uName.value,uPassword.value))
        //dispatch(dummyAPIAction(uName.value,uPassword.value))
        onClick(uName.value,uPassword.value);
        uName.value = uPassword.value = '' // Reset the values to blank
      }}>
        <input ref={node1 => { uName = node1 }} />
        <input ref={node2 => { uPassword = node2 }} />
        <button type="submit"> Login </button>
      </form>
    </div>
  )
}
*/
class LoginContainer extends Component {
  render(){
    var uName,uPassword ;
    return(
      <div>
        <div>Status : { this.props.loginStatus }</div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!uName.value.trim() || !uPassword.value.trim() ) {
            return
          }
          this.props.onClick(uName.value,uPassword.value);
          uName.value = uPassword.value = '' // Reset the values to blank
        }}>
          <input ref={node1 => { uName = node1 }} />
          <input ref={node2 => { uPassword = node2 }} />
          <button type="submit"> Login </button>
        </form>
      </div>
    )
  }
  componentDidUpdate (prevProps, prevState){
    this.context.router.push('/two')
  }
}
// ask for `router` from context
LoginContainer.contextTypes = {router: React.PropTypes.object}

// Bind to the events of the Store
const mapStateToProps = (state, ownProps) => {
  console.log('LoginContainer : mapStateToProps');
  // This allows the Component to acces the following return as its props
  return {
    loginStatus : state.LoginStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('LoginContainer : mapDispatchToProps');
  return {
    onClick: (name,pass) => {
      //dispatch(setVisibilityFilter(ownProps.filter))
      console.log('LoginContainer : onClick');
      dispatch(dummyAPIAction(name,pass))
    }
  }
}

LoginContainer = connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
export default LoginContainer
