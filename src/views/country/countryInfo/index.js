import React from 'react'
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, CardImg, InputGroup, InputGroupText, Textarea } from 'reactstrap'
import Cleave from 'cleave.js/react'
import Select from 'react-select'
import { File, FilePlus, Upload, UploadCloud } from 'react-feather'
import ReactCountryFlag from 'react-country-flag'
import Flatpickr from 'react-flatpickr'
const ContactInfo = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return <React.Fragment>
        <Form className='mb-3 px-2' onSubmit={handleSubmit} style={{ minHeight: '300px' }}>
            <Row>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='name'>
                        Name
                    </Label>
                    <Input id='firstName' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='countryCode'>
                        Country Code
                    </Label>
                    <InputGroup className='input-group-merge mb-2'>
                        <InputGroupText>+</InputGroupText>
                        <Input placeholder=''  type='number'/>
                    </InputGroup>
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='shortName'>
                        Short Name
                    </Label>
                    <Input id='shortName' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='dateOfBirth'>
                        Status
                    </Label>
                    <Input type='select' name='select' id='select-basic'>
                        <option>Active</option>
                        <option>InActive</option>
                    </Input>
                </Col>
                <Col sm='12' className='mb-1 d-flex align-items-center justify-content-start'>
                    <button className="btn btn-primary" type="submit">Save</button>
                    <button className="btn btn-outline-secondary ms-1" >Reset</button>
                </Col>
            </Row>
        </Form>
    </React.Fragment>
}

export default ContactInfo
