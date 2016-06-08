//
import React, {Component} from "react"
import LoginContainer from "../containers/LoginContainer"
import SearchContainer from "../containers/SearchContainer"
import LoginView from "./LoginView.react"
//
class Home extends Component {
  render(){
    return (
      <div>
        <div>Home</div>
        <LoginContainer />
        <SearchContainer />
        <LoginView />
      </div>
    );
  }
}
export default Home
