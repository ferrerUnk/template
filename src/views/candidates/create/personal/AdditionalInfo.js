// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import { ChevronDown } from 'react-feather'
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
  CardHeader,
  Collapse
} from 'reactstrap'

const hearAboutUsOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'insta', label: 'Instagram' },
  { value: 'indeed', label: 'Indeed' },
  { value: 'other', label: 'Other' }
]

const canYouStartOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-week', label: '1 Week' },
  { value: '2-week', label: '2 Week' },
  { value: '3-week', label: '3 Week' },
  { value: '30', label: '30 Days' },
  { value: 'more-30', label: 'More than 30days' }
]


const AdditionalInfo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Additional Information</CardTitle>
          <Button type='button' className='me-1' color='primary' onClick={toggle}>Add <ChevronDown size='15' /></Button>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Collapse isOpen={isOpen} >
            <Form className='mt-2 pt-50'>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='hearAboutUs'>
                    How did you hear about Us?
                  </Label>
                  <Select
                    id='hearAboutUs'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={hearAboutUsOptions}
                    theme={selectThemeColors}
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='willingToWorkUSHours'>
                    Are you willing to work US hours?
                  </Label>
                  <Select
                    id='willingToWorkUSHours'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={[
                              {value:'yes', label:'YES'},
                              {value:'no', label:'No'}
                            ]}
                    theme={selectThemeColors}
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='canYouStart'>
                    How soon can you start?
                  </Label>
                  <Select
                    id='canYouStart'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={canYouStartOptions}
                    theme={selectThemeColors}
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='40HoursPerWeek'>
                    Are you available to work 40Hours per week?
                  </Label>
                  <Select
                    id='40HoursPerWeek'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={[
                      {value:'20hours', label:'20 Hours'},
                      {value:'40hours', label:'40 Hours'}
                            ]}
                    theme={selectThemeColors}
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='agreeTimeTrackingTool'>
                    Do you agree to use time tracking tool?
                  </Label>
                  <Select
                    id='agreeTimeTrackingTool'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={[
                              {value:'yes', label:'Yes'},
                              {value:'no', label:'No'}
                            ]}
                    theme={selectThemeColors}
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                <Label className='form-label' for='expectedHourlySalary'>
                  Expected Hourly Salary
                </Label>
                <Input id='expectedHourlySalary' name='expectedHourlySalary' placeholder='' />
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
          </Collapse>
        </CardBody>
      </Card>
  )
}

export default AdditionalInfo
