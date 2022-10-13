// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import WorkDetail from './WorkDetail'
import JobHistory from './JobHistory'
import Certifications from './Certifications'
import ProfessionalReferences from './ProfessionalReferences'
import ElevatorPitch from './ElevatorPitch'
import VideoIntro from './VideoIntro'

const WorkTabs = () => {

  return (
    <Fragment>
      <WorkDetail />
      <JobHistory />
      <Certifications />
      <ProfessionalReferences />
      <ElevatorPitch />
      <VideoIntro />
    </Fragment>
  )
}

export default WorkTabs
