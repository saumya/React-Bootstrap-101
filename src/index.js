// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import AllInOneReducer from './reducers'

import ApplicationContainer from './containers/ApplicationContainer'
import AppAdminContainer from './containers/AppAdminContainer'
import AppUserContainer from './containers/AppUserContainer'

import ApplicationControllerView from './components/ApplicationControllerView.react'
import One from './components/One.react'
import Two from './components/Two.react'
import Three from './components/Three.react'
import Home from './components/Home.react'

import Menu from './components/Menu.react'

import initialStateUtil, {getInitialState} from './util/initialStateUtil'

let store = createStore(AllInOneReducer,getInitialState(),applyMiddleware(thunk))
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const rootEL = document.getElementById('react-app');
render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={ApplicationControllerView}>
        <IndexRoute component={Home} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
        <Route path="/three" component={Three} />
      </Route>
    </Router>
  </Provider>,
  rootEL
)
