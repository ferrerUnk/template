import React, {useState} from 'react'
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, CardImg, InputGroup, InputGroupText, Textarea } from 'reactstrap'
import Cleave from 'cleave.js/react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { File, FilePlus, Upload, UploadCloud } from 'react-feather'
import ReactCountryFlag from 'react-country-flag'
import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_green.css"
import 'cleave.js/dist/addons/cleave-phone.us'
const ContactInfo = () => {

    const [picker, setPicker] = useState(new Date())
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const contactTypeOptions = [
        { value: '1', label: 'Primary' },
        { value: '2', label: 'Secondary' },
        { value: '3', label: 'Tertiary' },
        { value: '4', label: 'Invoicing' },
        { value: '5', label: 'Prospect' }
    ]
    const countryOptions = [
        {value: "uk", label: (<><ReactCountryFlag countryCode="GB" /><span className="ms-2">UK</span></>)},
        {value: "us", label: (<><ReactCountryFlag countryCode="US" /><span className="ms-2">USA</span></>)},
        {value: "fr", label: (<><ReactCountryFlag countryCode="FR" /><span className="ms-2">France</span></>)},
        {value: "ru", label: (<><ReactCountryFlag countryCode="RU" /><span className="ms-2">Russia</span></>)},
        {value: "in", label: (<><ReactCountryFlag countryCode="IN" /><span className="ms-2">India</span></>)}
        
    ]
   

    return <React.Fragment>
        <Form className='mb-3' onSubmit={handleSubmit} style={{ minHeight: '300px' }}>
            <Row>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='firstName'>
                        First Name
                    </Label>
                    <Input id='firstName' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='lastName'>
                        Last Name
                    </Label>
                    <Input id='lastName' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='role'>
                        Role
                    </Label>
                    <Input id='role' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='dateOfBirth'>
                        Date Of Birth
                    </Label>
                    <Flatpickr className='form-control' id='dateOfBirth' name='dateOfBirth' value={picker} onChange={date => setPicker(date)} id="default-picker"/>
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='contactType'>
                        Contact Type
                    </Label>
                    <Select
                        id='contactType'
                        isClearable={false}
                        isMulti={false}
                        className='react-select'
                        classNamePrefix='select'
                        options={contactTypeOptions}
                        theme={selectThemeColors}
                        defaultValue={contactTypeOptions[0]}
                        placeholder='Select Contractors'
                    />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='email'>
                        Email Address
                    </Label>
                    <Input id='email' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='state'>
                        State
                    </Label>
                    <Input id='state' type='text' placeholder='' />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='country'>
                        Country
                    </Label>
                    <Select
                        id='country'
                        isClearable={false}
                        isMulti={false}
                        className='react-select '
                        classNamePrefix='select'
                        options={countryOptions}
                        theme={selectThemeColors}
                        defaultValue={countryOptions[0]}
                        placeholder='Select Contractors'
                    />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='workNumber'>
                        Work Number
                    </Label>
                    <Cleave
                        id='workNumber'
                        name='workNumber'
                        className='form-control'
                        placeholder=''
                        options={{ phone: true, phoneRegionCode: 'US' }}
                    />
                </Col>
                <Col sm='6' className='mb-2' style={{ height: 'auto' }}>
                    <Label className='form-label mb-1' for='mobileNumber'>
                        Mobile Number
                    </Label>
                    <Cleave
                        id='mobileNumber'
                        name='mobileNumber'
                        className='form-control'
                        placeholder=''
                        options={{ phone: true, phoneRegionCode: 'US' }}
                    />
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
