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

const ElevatorPitch = () => {

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Elevator Pitch</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
            <Form className='pt-50'>
              <Row>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='aboutMe'>
                    About Me
                  </Label>
                  <Input type='textarea' name='aboutMe' id='aboutMe' rows='3' placeholder='' />
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

export default ElevatorPitch
