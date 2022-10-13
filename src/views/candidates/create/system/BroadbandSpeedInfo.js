// ** React Imports
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
  Table
} from 'reactstrap'

const BroadbandSpeedInfo = () => {

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Broadband Speed Test</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Table responsive>
            <thead>
              <tr>
                <th>Type</th>
                <th>Download Speed</th>
                <th>Upload Speed</th>
                <th>Internet Service Provider</th>
                <th>Data Tested</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan='5'>No data available</td>
              </tr>
            </tbody>
          </Table>   
        </CardBody>
      </Card>
  )
}

export default BroadbandSpeedInfo
