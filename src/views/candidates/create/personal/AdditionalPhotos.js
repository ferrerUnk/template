// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import { useDropzone } from 'react-dropzone'
import { X, UploadCloud, ChevronDown } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardImg, CardText, Table, CardHeader, CardTitle, Input, Label, Button, Collapse} from 'reactstrap'

// ** Styles
import '@styles/react/libs/file-uploader/file-uploader.scss'

const AdditionalPhotos = () => {

  const [avatar, setAvatar] = useState('')

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

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const avatarImage = require('@src/assets/images/avatars/avatar-blank.png').default

  return (
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Additional Photos</CardTitle>
          <Button type='button' className='me-1' color='primary' onClick={toggle}>Add <ChevronDown size='15' /> </Button>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <Collapse isOpen={isOpen} className='mb-3'>
            <Row>
              <Col sm='12'>
              <img src={avatar} />
              </Col>
              <Col sm='12'>
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
            </Row>
          </Collapse>
          <Row >
            <Col xl='2' md='3' outline>
              <Card className='bg-primary border-primary shadow'>
                <CardImg top src={avatarImage} alt='card-top' width='100' />
                <CardBody>
                  <CardText tag='h6' className='text-white' >Image1</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xl='2' md='3' outline>
              <Card className='bg-primary border-primary shadow'>
                <CardImg top src={avatarImage} alt='card-top' width='100' />
                <CardBody>
                  <CardText tag='h6' className='text-white'>Image2</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
  )
}

export default AdditionalPhotos
