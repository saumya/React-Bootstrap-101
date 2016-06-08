// Component as pure function
import React from 'react'
import AppConstants from '../util/AppConstants'

const AppUserContainer = () => (
  <div>
    <div> User </div>
    <div> version {AppConstants.VERSION} </div>
    <div> by {AppConstants.AUTHOR} </div>
  </div>
)

export default AppUserContainer
