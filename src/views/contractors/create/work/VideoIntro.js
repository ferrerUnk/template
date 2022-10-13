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

const VideoIntro = () => {

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Video Introduction</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
            <Form className='pt-50'>
              <Row>
                <Col sm='12' className='mb-1'>
                  <Label className='form-label' for='aboutMe'>
                    No data Avaialble
                  </Label>
                </Col>
              </Row>
            </Form>
        </CardBody>
      </Card>
  )
}

export default VideoIntro
