// ** React Imports
import { useState} from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import { ChevronDown, Upload, MoreVertical, Edit, Trash} from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { Editor } from 'react-draft-wysiwyg'
import Avatar from '@components/avatar'
import { useDropzone } from 'react-dropzone'

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
import '@styles/react/libs/file-uploader/file-uploader.scss'

const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // ** State
  const [picker, setPicker] = useState(new Date())

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: e => {
      const reader = new FileReader(),
      files = e.target.files
      reader.onload = function () {
        setAvatar(reader.result)
      }
      reader.readAsDataURL(files[0])
    }
  })

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Certifications</CardTitle>
          <Button type='button' className='me-1' color='primary' onClick={toggle}>Add <ChevronDown size='15' /> </Button>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Collapse isOpen={isOpen} className='mb-2'>
            <Form className='mt-2 pt-50'>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='name'>
                    Name
                  </Label>
                  <Input type='text' id='name' name='name' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='issuingOrganization'>
                    Issuing Organization
                  </Label>
                  <Input type='text' id='issuingOrganization' name='issuingOrganization' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='credentialID'>
                    Credential ID
                  </Label>
                  <Input type='text' id='credentialID' name='credentialID' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='credentialUrl'>
                    Credential URL
                  </Label>
                  <Input type='text' id='credentialUrl' name='credentialUrl' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='issuedDate'>
                    Date issue
                  </Label>
                  <Flatpickr className='form-control' id='issuedDate' name='issuedDate' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='expiryDate'>
                    Date Expiration
                  </Label>
                  <Flatpickr className='form-control' id='expiryDate' name='expiryDate' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <h5>Drop your certificate or <a href='/' onClick={e => e.preventDefault()}> Browse</a>{' '}</h5>
                    </div>
                  </div>
                </Col>
                <Col sm='6' className='mb-1 form-check'>
                    <Input type='checkbox' defaultChecked id='basic-cb-checked' />
                    <Label for='basic-cb-checked' className='form-check-label'>
                      This credential does not expire.
                    </Label>
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
                <th>Name</th>
                <th>Issuing Organization</th>
                <th>Date of Issue</th>
                <th>Date of Expiration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jhon X</td>
                <td>Google </td>
                <td>22/4/2020</td>
                <td>22/4/2025</td>
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

export default Certifications
