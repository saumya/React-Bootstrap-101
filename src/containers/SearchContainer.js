// SearchContainer
import React, { Component } from "react"
import { connect } from "react-redux"
import { loginAction, dummyAPIAction, searchAction } from "../actions"

class SearchContainer extends Component {
    render(){
				var searchTextField ;
        return(
            <div>
							<form onSubmit={e => {
									e.preventDefault()
									console.log("Search Submit : TODO");
									console.log("searchTextField",searchTextField);
									
									if(!searchTextField.value.trim()){
										return
									}
									this.props.onClick(searchTextField.value);
									searchTextField.value = '' // Reset the values to blank
									
								}}>
								
								<input ref={searchText => { searchTextField = searchText }} />
								<button type="submit"> Search </button>
							</form>
            </div>
        )
    }
}

// ask for `router` from context
SearchContainer.contextTypes = {router: React.PropTypes.object}

// Bind to the events of the Store
const mapStateToProps = (state, ownProps) => {
  console.log('SearchContainer : mapStateToProps');
  // This allows the Component to acces the following return as its props
  return {
    loginStatus : state.LoginStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('SearchContainer : mapDispatchToProps');
  return {
    onClick: (searchTextValue) => {
      //dispatch(setVisibilityFilter(ownProps.filter))
      console.log('SearchContainer : onClick : ',searchTextValue);
      //dispatch(dummyAPIAction(name,pass))
			dispatch(searchAction(searchTextValue))
    }
  }
}

SearchContainer = connect(mapStateToProps,mapDispatchToProps)(SearchContainer)
export default SearchContainer