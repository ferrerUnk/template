// ** React Imports
import { Fragment, useState} from 'react'
// import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabs'
import Breadcrumbs from '@src/navigation/breadcrumbs'
import PersonalTabContent from './personal'
import WorkTabContent from './work'
import SystemTabContent from './system'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const AccountSettings = ({data}) => {
  // ** States
  const [activeTab, setActiveTab] = useState('1')

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  // const {role} = useParams()
  const title = "Contractors"
  // const title = role.charAt(0).toUpperCase() + role.slice(1)

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle={`Add ${title}`} breadCrumbActive={`Add ${title}`} />

      {data !== null ? (
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />

            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <PersonalTabContent />
              </TabPane>
              <TabPane tabId='2'>
                <WorkTabContent />
              </TabPane>
              <TabPane tabId='3'>
                <SystemTabContent />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default AccountSettings
