// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import SystemInformation from './SystemInformation'
import BroadbandSpeedInfo from './BroadbandSpeedInfo'


const SystemTabs = () => {
  return (
    <Fragment>
      <SystemInformation />
      <BroadbandSpeedInfo />
    </Fragment>
  )
}

export default SystemTabs
