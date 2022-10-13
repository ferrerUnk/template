import React, {useState} from 'react'
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, CardImg, InputGroup, InputGroupText, Textarea } from 'reactstrap'
import Cleave from 'cleave.js/react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { File, FilePlus, Upload, UploadCloud } from 'react-feather'
import { useDropzone } from 'react-dropzone'
import Flatpickr from 'react-flatpickr'
import "flatpickr/dist/themes/material_green.css"
const ProjectInfo = () => {
  const [picker, setPicker] = useState(new Date())

  const clientOptions = [
    { label: 'John Doe 1', value: 'doe1' },
    { label: 'Jane Doe 2', value: 'doe2' }
  ]

  const csmOptions = [
    { value: 'Deja Vu - dabu@dev.test', label: 'Deja Vu - dabu@dev.test' },
    { value: 'Martinez Payne - jeru+success@crewBloom.com', label: 'Martinez Payne - jeru+success@crewBloom.com' }
  ]

  const departmentOptions = [
    { value: 'Sales(Voice)', label: 'Sales(Voice)' },
    { value: 'Sales(Non-Voice)', label: 'Sales(Non-Voice)' },
    { value: 'Support/Success(Voice)', label: 'Support/Success(Voice)' },
    { value: 'Support/Success(Non-Voice)', label: 'Support/Success(Non-Voice)' },
    { value: 'Others', label: 'Others' }
  ]

  const statusOptions = [
    { value: 'New', label: 'New' },
    { value: 'AccountGrowth', label: 'AccountGrowth' },
    { value: 'Prospect', label: 'Prospect' }
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

  const jobPostingOptions = []

  const communicationToolOptions = [
    { value: 'Slack', label: 'Slack' },
    { value: 'Skype', label: 'Skype' },
    { value: 'Google Hangouts', label: 'Google Hangouts' },
    { value: 'Zoom', label: 'Zoom' },
    { value: 'Other', label: 'Other' }
  ]

  const roleToolOptions = [
    { value: 'Quick Books', label: 'Quick Books' },
    { value: 'Fresh Books', label: 'Fresh Books' },
    { value: 'Sales Force', label: 'Sales Force' },
    { value: 'Hubspot', label: 'Hubspot' },
    { value: 'Microsoft Office Suit', label: 'Microsoft Office Suit' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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

  return <React.Fragment>
    <Form className='mb-3' onSubmit={handleSubmit}>
      <Row>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='clientName'>
            Select Client
          </Label>
          <Select
            id='clientName'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={clientOptions}
            theme={selectThemeColors}
            defaultValue={clientOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='csm'>
            Assign CSM
          </Label>
          <Select
            id='csm'
            isClearable={false}
            isMulti={true}
            className='react-select'
            classNamePrefix='select'
            options={csmOptions}
            theme={selectThemeColors}
            defaultValue={csmOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='projectTitle'>
            Project Title
          </Label>
          <Input id='projectTitle' name='projectTitle' placeholder='' />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='targetStartDate'>
            Target Start Date
          </Label>
          <Flatpickr className='form-control' id='targetStartDate' name='targetStartDate' value={picker} onChange={date => setPicker(date)} id="default-picker"/>

        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='csm'>
            Department
          </Label>
          <Select
            id='department'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={departmentOptions}
            theme={selectThemeColors}
            defaultValue={departmentOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='csm'>
            Status
          </Label>
          <Select
            id='status'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={statusOptions}
            theme={selectThemeColors}
            defaultValue={statusOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='requiredContractors'>
            Required Contractors
          </Label>
          <Input id='requiredContractors' type='number' name='requiredContractors' placeholder='' />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='requiredContractors'>
            Work Schedule
          </Label>
          <div className="d-flex align-items-center justify-content-start w-100">
            <button className="btn  text-uppercase text-sm-small">Mon</button>
            <button className="btn btn-primary text-uppercase">Tue</button>
            <button className="btn btn text-uppercase">Wed</button>
            <button className="btn btn text-uppercase">Thu</button>
            <button className="btn btn text-uppercase">Fri</button>
            <button className="btn btn text-uppercase">Sat</button>
          </div>
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='csm'>
            Time Zone
          </Label>
          <Select
            id='timeZone'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={timeZoneOptions}
            theme={selectThemeColors}
            defaultValue={timeZoneOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='csm'>
            Rate (USD/Hour)
          </Label>
          <InputGroup>
            <InputGroupText>$</InputGroupText>
            <Input id='rate' type='number' name='rate' placeholder="" />
          </InputGroup>
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='csm'>
            Link To Job Posting
          </Label>
          <Select
            id='jobPosting'
            isClearable={false}
            className='react-select'
            classNamePrefix='select'
            options={jobPostingOptions}
            theme={selectThemeColors}
            noOptionsMessage={() => "No Data Available"}
            onOptionB
            defaultValue={jobPostingOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-0'>
          <div className='form-check form-switch h-100 d-flex align-items-center'>
            <Input type='switch' name='isOpenConpensation' id='isOpenConpensation' />
            <Label for='isOpenConpensation' className='form-check-label'>
              Open To Additional Compensation
            </Label>
          </div>
        </Col>
        <Col sm='12' className='mb-1'>
          <Label className='form-label' for='projectKPI'>
            Project KPIs
          </Label>
          <Input id='projectKPI' type='textarea' name='projectKPI' placeholder='' />
        </Col>
        <Col sm='12' className='mb-1'>
          <Label className='form-label' for='compensationPlan'>
            Performance-Based Compensation Plan
          </Label>
          <Input id='compensationPlan' type='textarea' name='compensationPlan' placeholder='' />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='communicationTools'>
            Preferred Communication Tools
          </Label>
          <Select
            id='communicationTools'
            isClearable={false}
            isMulti={true}
            className='react-select'
            classNamePrefix='select'
            options={communicationToolOptions}
            theme={selectThemeColors}
            defaultValue={communicationToolOptions[0]}
          />
        </Col>
        <Col sm='6' className='mb-1'>
          <Label className='form-label' for='communicationTools'>
            Tools Required For Role
          </Label>
          <Select
            id='roleTools'
            isClearable={false}
            isMulti={true}
            className='react-select'
            classNamePrefix='select'
            options={roleToolOptions}
            theme={selectThemeColors}
            defaultValue={roleToolOptions[0]}
          />
        </Col>
        <Col sm='12' className='mb-1'>
          <Label className='form-label' for='idealCandidate'>
            Describe Your Ideal Candidate
          </Label>
          <Input id='idealCandidate' type='textarea' name='idealCandidate' placeholder='' />
        </Col>
        <Col sm='12' className='mb-1 py-3 border-1' >
          <Label className='form-label'>
          </Label>
          <div className=''  {...getRootProps({ className: 'dropzone' })}>
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
        <Col sm='12' className='mb-1 card'>
          <div className="d-flex align-items-center">
            <button className='btn btn-primary mr-2' type='submit'>Save</button>
            <button className='btn btn-outline-secondary mx-2'>Reset</button>
          </div>
        </Col>
      </Row>
    </Form>
  </React.Fragment>
}

export default ProjectInfo
