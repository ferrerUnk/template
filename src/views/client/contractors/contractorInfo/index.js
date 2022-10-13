import React from 'react'
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, CardImg, InputGroup, InputGroupText, Textarea } from 'reactstrap'
import Cleave from 'cleave.js/react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { File, FilePlus, Upload, UploadCloud } from 'react-feather'

const ContractorInfo = () => {

  const clientOptions = [
    { value: 'test 1', label: 'Test 1' },
    { value: 'test 2', label: 'Test 2' },
    { value: 'test 3', label: 'Test 3' },
    { value: 'test 4', label: 'Test 4' },
    { value: 'test 5', label: 'Test 5' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return <React.Fragment>
    <Form className='mb-3' onSubmit={handleSubmit} >
      <Row>
        <Col sm='12' className='mb-2' style={{height: 'auto'}}>
          <Label className='form-label mb-1' for='name'>
            Assign Contractor(s)
          </Label>
          <Select
            id='name'
            isClearable={false}
            isMulti={true}
            className='react-select'
            classNamePrefix='select'
            options={clientOptions}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null
            }}
            menuPortalTarget={document.body}
            menuPosition={"absolute"}
            theme={selectThemeColors}
            defaultValue={clientOptions[0]}
            placeholder='Select Contractors'
          />
        </Col>
        <Col sm='12' className='mb-1 d-flex align-items-center justify-content-end'>
            <button className="btn btn-outline-warning mx-2">No Go</button>
            <button className="btn btn-outline-primary" type="submit">Go</button>
        </Col>
      </Row>
    </Form>
  </React.Fragment>
}

export default ContractorInfo
