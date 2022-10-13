// ** React Imports
import { Fragment, useState} from 'react'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabs'
import Breadcrumbs from '@src/navigation/breadcrumbs'
import Company from "../company/index"
import Contact from '../contacts/index'
import Project from '../project/index'
import Candidate from "../candidate/index"
import Contractors from "../contractors/index"
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const AccountSettings = ({data}) => {
  // ** States
  const [activeTab, setActiveTab] = useState('1')

  const toggleTab = tab => {
    setActiveTab(tab)
  }

    // ** Params
  const title = "Prospect"

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle={`Add ${title}`} breadCrumbActive={`Add ${title}`} />

      {data !== null ? (
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Company />
              </TabPane>
              <TabPane tabId='2'>
                <Contact />
              </TabPane>
              <TabPane tabId='3'>
                <Project />
              </TabPane>
              <TabPane tabId='4'>
                <Candidate />
              </TabPane>
              <TabPane tabId='5'>
                <Contractors />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default AccountSettings
