// ** React Imports
import { useState} from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import { ChevronDown, Upload, MoreVertical, Edit, Trash} from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { Editor } from 'react-draft-wysiwyg'

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
  Collapse,
  InputGroup,
  InputGroupText,
  Table, 
  UncontrolledDropdown, 
  DropdownMenu, 
  DropdownItem, 
  DropdownToggle
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/editor/editor.scss'

const JobHistory = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // ** State
  const [picker, setPicker] = useState(new Date())

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Job History</CardTitle>
          <Button type='button' className='me-1' color='primary' onClick={toggle}>Add <ChevronDown size='15' /> </Button>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Collapse isOpen={isOpen} >
            <Form className='mt-2 pt-50'>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='jobTitle'>
                    Job Title
                  </Label>
                  <Input id='jobTitle' name='jobTitle' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='accountHandeled'>
                    Account Handeled
                  </Label>
                  <Input id='accountHandeled' name='accountHandeled' placeholder='' />
                </Col>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='company'>
                    Company
                  </Label>
                  <Input id='company' name='company' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='startDate'>
                    Start Date
                  </Label>
                  <Flatpickr className='form-control' id='startDate' name='startDate' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='endDate'>
                    End Date
                  </Label>
                  <Flatpickr className='form-control' id='endDate' name='endDate' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                </Col>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='endDate'>
                    Outline your top 3 Job Responsibilties
                  </Label>
                  <Editor/>
                </Col>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='accomplishment'>
                    What was your biggest accomplishment in this role?
                  </Label>
                  <Input type='textarea' name='accomplishment' id='accomplishment' rows='3' placeholder='' />
                </Col>
                <Col sm='4' className='mb-1'>
                  <Label className='form-label' for='kpi1'>
                    KPI
                  </Label>
                  <InputGroup className='input-group-merge mb-2'>
                      <InputGroupText>1</InputGroupText>
                    <Input type='text' id='kpi1' name='kpi1' placeholder='' />
                  </InputGroup>
                </Col>
                <Col sm='4' className='mb-1'>
                  <Label className='form-label' for='kpi2'>
                    
                  </Label>
                  <InputGroup className='input-group-merge mb-2'>
                      <InputGroupText>2</InputGroupText>
                    <Input type='text' id='kpi2' name='kpi2' placeholder='' />
                  </InputGroup>
                </Col>
                <Col sm='4' className='mb-1'>
                  <Label className='form-label' for='kpi1'>
                    
                  </Label>
                  <InputGroup className='input-group-merge mb-2'>
                      <InputGroupText>3</InputGroupText>
                    <Input type='text' id='kpi3' name='kpi3' placeholder='' />
                  </InputGroup>
                </Col>
                <Col sm='6' className='mb-1'>
                  <div className='form-check form-switch'>
                    <Input type='switch' name='isCurrentlyEmployed' id='isCurrentlyEmployed' />
                    <Label for='isCurrentlyEmployed' className='form-check-label'>
                      Currently Employed
                    </Label>
                  </div>
                </Col>
                {/* <Col sm='6' className='mb-1' >
                  <Button tag={Label} className='me-1' size='md' outline>
                      <Upload size='15' /> Upload Resume
                      <Input type='file' hidden accept='image/*' />
                  </Button>
                </Col> */}
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

          <Table responsive>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accountant</td>
                <td>XYZ </td>
                <td>22/4/2020</td>
                <td>22/4/2021</td>
                <td>Status</td>
                <td>
                  <UncontrolledDropdown>
                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href='/' onClick={e => e.preventDefault()}>
                        <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                      </DropdownItem>
                      <DropdownItem href='/' onClick={e => e.preventDefault()}>
                        <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            </tbody>
           </Table>   
        </CardBody>
      </Card>
  )
}

export default JobHistory
