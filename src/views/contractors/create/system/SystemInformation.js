// ** Third Party Components
import { ChevronDown, UploadCloud, MoreVertical, Edit, Trash} from 'react-feather'
import { useDropzone } from 'react-dropzone'
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

const SystemInformation = () => {

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
          <CardTitle tag='h4'>System Information</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
            <Form className='pt-50'>
              <CardTitle tag='h6'>Main</CardTitle>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='unitType'>
                    System Unit Type
                  </Label>
                  <Select
                    id='tools'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={[
                        {value: 'pc', label: 'PC'},
                        {value: 'laptop', label: 'Laptop'}
                      ]}
                    theme={selectThemeColors}
                    isMulti
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='unitModel'>
                    Unit Model
                  </Label>
                  <Input type='text' id='unitModel' name='unitModel' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='cpuProcessor'>
                    CPU/Processor
                  </Label>
                  <Input type='text' id='cpuProcessor' name='cpuProcessor' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='ram'>
                    RAM GB
                  </Label>
                  <Input type='text' id='ram' name='ram' placeholder='' />
                </Col>
              </Row>
              <CardTitle tag='h6'>Backup</CardTitle>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='unitType'>
                    System Unit Type
                  </Label>
                  <Select
                    id='tools'
                    isClearable={false}
                    className='react-select'
                    classNamePrefix='select'
                    options={[
                        {value: 'pc', label: 'PC'},
                        {value: 'laptop', label: 'Laptop'}
                      ]}
                    theme={selectThemeColors}
                    isMulti
                  />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='unitModel'>
                    Unit Model
                  </Label>
                  <Input type='text' id='unitModel' name='unitModel' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='cpuProcessor'>
                    CPU/Processor
                  </Label>
                  <Input type='text' id='cpuProcessor' name='cpuProcessor' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='ram'>
                    RAM GB
                  </Label>
                  <Input type='text' id='ram' name='ram' placeholder='' />
                </Col>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='summary'>
                    Plans in case of Power Outages (Both Computer Devices & Internet Connection)
                  </Label>
                  <Input type='text' id='summary' name='summary' placeholder='' />
                </Col>
              </Row>
              <CardTitle tag='h4' className='m-1'>
                    Operationg System Screenshots and Work Station Images
              </CardTitle>
              <Row>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='summary'>
                    Please provide actual screenshot of your pc/laptop specs espicially processor and RAM for both Main and Backup Device
                  </Label>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <UploadCloud size={64} />
                      <h5>Drop Files here or click to upload</h5>
                      <p className='text-secondary'>
                        Click 
                        <a href='/' onClick={e => e.preventDefault()}> icon</a>{' '}
                        to add
                      </p>
                    </div>
                  </div>
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

export default SystemInformation
