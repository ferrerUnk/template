// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import PersonalInfo from './PersonalInfo'
import EmergencyContacts from './EmergencyContacts'
import EducationDetail from './EducationDetail'
import AdditionalInfo from './AdditionalInfo'
import AdditionalPhotos from './AdditionalPhotos'


const PersonalTabs = () => {
  return (
    <Fragment>
      <PersonalInfo />
      <EmergencyContacts />
      <EducationDetail />
      <AdditionalInfo />
      <AdditionalPhotos />
    </Fragment>
  )
}

export default PersonalTabs
