// ** Third Party Components
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { 
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader
} from 'reactstrap'

const toolsOptions = [
  { value: 'quickBooks', label: 'Quick Books' },
  { value: 'freshBooks', label: 'Fresh Books' },
  { value: 'hubspot', label: 'Hubspot' },
  { value: 'salesForce', label: 'Sales Force' }
]

const keySkillOptions = [
  { value: 'cold-calling', label: 'Cold Calling' },
  { value: 'email-support', label: 'Email Support' },
  { value: 'customer-service', label: 'Customer Service' },
  { value: 'chat-support', label: 'Chat Support' }
]


const WorkDetail = () => {

  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Work Details</CardTitle>
      </CardHeader>
      <CardBody className='py-2 my-25'>
          <Form className=' pt-50'>
            <Row>
              <Col sm='12' className='mb-1'>
                <Label className='form-label' for='tools'>
                  Tools
                </Label>
                <Select
                  id='tools'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={toolsOptions}
                  theme={selectThemeColors}
                  isMulti
                />
              </Col>
              <Col sm='12' className='mb-1'>
                <Label className='form-label' for='keySkill'>
                  Key Skills
                </Label>
                <Select
                  id='keySkill'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={keySkillOptions}
                  theme={selectThemeColors}
                  isMulti
                />
              </Col>
              <Col className='mt-2' sm='12'>
                <Button type='submit' className='me-1' color='primary'>
                  Save
                </Button>
                <Button color='secondary' outline>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
      </CardBody>
    </Card>
  )
}

export default WorkDetail
