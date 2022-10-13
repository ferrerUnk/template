// ** React Imports
import { useState} from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import { ChevronDown } from 'react-feather'

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

const EducationDetail = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Education</CardTitle>
          <Button type='button' className='me-1' color='primary' onClick={toggle}>Add <ChevronDown size='15' /> </Button>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Collapse isOpen={isOpen} >
            <Form className='mt-2 pt-50'>
              <Row>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='schoolUniversity'>
                    School/University
                  </Label>
                  <Input id='schoolUniversity' name='schoolUniversity' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='degree'>
                    Degree
                  </Label>
                  <Input id='degree' name='degree' placeholder='' />
                </Col>
                <Col sm='6' className='mb-1'>
                  <Label className='form-label' for='yearCompleted'>
                    Degree
                  </Label>
                  <Input id='yearCompleted' name='yearCompleted' placeholder='' />
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

export default EducationDetail
