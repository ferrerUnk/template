// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, CardImg } from 'reactstrap'

// ** Utils
import { selectThemeColors } from '@utils'

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]


const currencyOptions = [
  { value: 'usd', label: 'USD' },
  { value: 'euro', label: 'Euro' },
  { value: 'pound', label: 'Pound' },
  { value: 'bitcoin', label: 'Bitcoin' }
]

const timeZoneOptions = [
  { value: '(GMT-12:00) International Date Line West', label: '(GMT-12:00) International Date Line West' },
  { value: '(GMT-11:00) Midway Island, Samoa', label: '(GMT-11:00) Midway Island, Samoa' },
  { value: '(GMT-10:00) Hawaii', label: '(GMT-10:00) Hawaii' },
  { value: '(GMT-09:00) Alaska', label: '(GMT-09:00) Alaska' },
  { value: '(GMT-08:00) Pacific Time (US & Canada)', label: '(GMT-08:00) Pacific Time (US & Canada)' },
  { value: '(GMT-08:00) Tijuana, Baja California', label: '(GMT-08:00) Tijuana, Baja California' },
  { value: '(GMT-07:00) Arizona', label: '(GMT-07:00) Arizona' },
  { value: '(GMT-07:00) Chihuahua, La Paz, Mazatlan', label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan' },
  { value: '(GMT-07:00) Mountain Time (US & Canada)', label: '(GMT-07:00) Mountain Time (US & Canada)' },
  { value: '(GMT-06:00) Central America', label: '(GMT-06:00) Central America' },
  { value: '(GMT-06:00) Central Time (US & Canada)', label: '(GMT-06:00) Central Time (US & Canada)' },
  {
    value: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
    label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey'
  },
  { value: '(GMT-06:00) Saskatchewan', label: '(GMT-06:00) Saskatchewan' },
  { value: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco', label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco' },
  { value: '(GMT-05:00) Eastern Time (US & Canada)', label: '(GMT-05:00) Eastern Time (US & Canada)' },
  { value: '(GMT-05:00) Indiana (East)', label: '(GMT-05:00) Indiana (East)' },
  { value: '(GMT-04:00) Atlantic Time (Canada)', label: '(GMT-04:00) Atlantic Time (Canada)' },
  { value: '(GMT-04:00) Caracas, La Paz', label: '(GMT-04:00) Caracas, La Paz' },
  { value: '(GMT-04:00) Manaus', label: '(GMT-04:00) Manaus' },
  { value: '(GMT-04:00) Santiago', label: '(GMT-04:00) Santiago' },
  { value: '(GMT-03:30) Newfoundland', label: '(GMT-03:30) Newfoundland' }
]

const PersonalInfo = () => {
  // ** States
  const avatarImage = require('@src/assets/images/avatars/avatar-blank.png').default
  const [avatar, setAvatar] = useState(avatarImage ? avatarImage : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }


  const handleImgReset = () => {
    setAvatar(require('@src/assets/images/avatars/avatar-blank.png').default)
  }

  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Personal Details</CardTitle>
      </CardHeader>
      <CardBody className='py-2 my-25'>
        <div className='d-flex'>
          <div className='me-25'>
            <img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100' />
          </div>
          <div className='d-flex align-items-end mt-75 ms-1'>
            <div>
              <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                Upload
                <Input type='file' onChange={onChange} hidden accept='image/*' />
              </Button>
              <Button className='mb-75' color='secondary' size='sm' outline onClick={handleImgReset}>
                Reset
              </Button>
              <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
            </div>
          </div>
        </div>
        <Form className='mt-2 pt-50'>
          <Row>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='firstName'>
                First Name
              </Label>
              <Input id='firstName' name='firstName' placeholder='' />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='lastName'>
                Last Name
              </Label>
              <Input id='lastName' name='lastName' placeholder='' />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='emailInput'>
                E-mail
              </Label>
              <Input id='emailInput' type='email' name='email' placeholder=''/>
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='mobile'>
                Mobile No.
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
              <Label className='form-label' for='address'>
                Address
              </Label>
              <Input id='address' name='address' placeholder='' />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='zipCode'>
                Zip Code
              </Label>
              <Input id='zipCode' name='zipCode' placeholder='' maxLength='6' />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='accountState'>
                State
              </Label>
              <Input id='accountState' name='state' placeholder='' />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='country'>
                Country
              </Label>
              <Select
                id='country'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                defaultValue={countryOptions[0]}
              />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='timeZone'>
                Timezone
              </Label>
              <Select
                id='timeZone'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={timeZoneOptions}
                theme={selectThemeColors}
              />
            </Col>
            <Col sm='6' className='mb-1'>
              <Label className='form-label' for='currency'>
                Currency
              </Label>
              <Select
                id='currency'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={currencyOptions}
                theme={selectThemeColors}
                defaultValue={currencyOptions[0]}
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

export default PersonalInfo
