// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import { Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'

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
  Table, 
  UncontrolledDropdown, 
  DropdownMenu, 
  DropdownItem, 
  DropdownToggle,
  Collapse
} from 'reactstrap'

import { MoreVertical, Edit, Trash, ChevronDown } from 'react-feather'


const ProfessionalReferences = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Professional References</CardTitle>
          <Button type='button' className='me-1' color='primary' onClick={toggle} >Add <ChevronDown size='15' /></Button>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Collapse isOpen={isOpen}  className='mb-4'>
            <Form className='mt-2 pt-50'>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='fullName'>
                    Full Name
                  </Label>
                  <Input type='text' id='fullName' name='fullName' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='emailInput'>
                    E-mail
                  </Label>
                  <Input id='emailInput' type='email' name='email' placeholder=''/>
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='mobile'>
                    Mobile Number
                  </Label>
                  <Cleave
                    id='mobile'
                    name='mobile'
                    className='form-control'
                    placeholder=''
                    options={{ phone: true, phoneRegionCode: 'US' }}
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='relationship'>
                    Relationship
                  </Label>
                  <Input id='relationship' name='relationship' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='companyAffiliation'>
                    Company Affiliation
                  </Label>
                  <Input type='text' id='companyAffiliation' name='companyAffiliation' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='type'>
                    Type
                  </Label>
                  <Select
                    id='tools'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={[
                        {value: 'work-reference', label: 'Work Reference'},
                        {value: 'hr-reference', label: 'HR Reference'}
                      ]}
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
          </Collapse>

          <Table responsive>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Relationship</th>
                <th>Company Affiliation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John XYZ</td>
                <td>abc@xyz.com</td>               
                <td>+91 8976543234</td>
                <td>Friend</td>
                <td>-- </td>
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

export default ProfessionalReferences
