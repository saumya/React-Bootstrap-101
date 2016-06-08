// Component as pure function
import React from 'react'
import AppConstants from '../util/AppConstants'

const AppAdminContainer = () => (
  <div>
    <div> Admin : version {AppConstants.VERSION} : by {AppConstants.AUTHOR} </div>
  </div>
)

export default AppAdminContainer
