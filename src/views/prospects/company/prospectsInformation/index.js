import React, { useState, useEffect } from "react" 
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
  CardImg
} from "reactstrap" 
import Avatar from "@components/avatar" 
import GoogleMapReact from 'google-map-react'

// ** Third Party Components
import Select from "react-select" 
import Cleave from "cleave.js/react" 
import "cleave.js/dist/addons/cleave-phone.us" 
import { selectThemeColors } from "@utils" 
import ReactCountryFlag from "react-country-flag" 
const CompanyInformation = () => {
  const avatarImage = require("@src/assets/images/avatars/avatar-blank.png").default 
  const [avatar, setAvatar] = useState(avatarImage ? avatarImage : "") 
  const [position, setPosition] = useState({lat:59.955413, lng:30.337844})

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files 
    reader.onload = function () {
      setAvatar(reader.result) 
    } 
    reader.readAsDataURL(files[0]) 
  } 

  const handleImgReset = () => {
    setAvatar(require("@src/assets/images/avatars/avatar-blank.png").default) 
  } 

  const statusOptions = [
    { value: "1", label: "Active" },
    { value: "2", label: "Inactive" },
    { value: "3", label: "Prospect" },
    { value: "4", label: "Paid" }
  ] 

  const classificationOptions = [
    { value: "1", label: "Gold" },
    { value: "2", label: "Silver" }
  ] 

  const countryOptions = [
    {
      value: "uk",
      label: (
        <>
          <ReactCountryFlag countryCode="GB" />
          <span className="ms-2">UK</span>
        </>
      )
    },
    {
      value: "us",
      label: (
        <>
          <ReactCountryFlag countryCode="US" />
          <span className="ms-2">USA</span>
        </>
      )
    },
    {
      value: "fr",
      label: (
        <>
          <ReactCountryFlag countryCode="FR" />
          <span className="ms-2">France</span>
        </>
      )
    },
    {
      value: "ry",
      label: (
        <>
          <ReactCountryFlag countryCode="RU" />
          <span className="ms-2">Russia</span>
        </>
      )
    },
    {
      value: "in",
      label: (
        <>
          <ReactCountryFlag countryCode="IN" />
          <span className="ms-2">India</span>
        </>
      )
    }
  ] 

  const AnyReactComponent = ({ text }) => <div>{text}</div>
 

  const handleSubmit = (e) => {
    e.preventDefault() 
  } 

  useEffect(() => {
    setPosition(position)
  }, [])
  return (
    <React.Fragment>
      <Card>
        <CardTitle
          tag="h4"
          className="d-flex p-2 justify-content-between align-items-center"
        >
          <span>Company</span>
        </CardTitle>
        <hr className="my-0" />
        <CardBody>
          <div className="d-flex">
            <div className="me-25">
              <img
                className="rounded me-50"
                src={avatar}
                alt="Generic placeholder image"
                height="100"
                width="100"
              />
            </div>
            <div className="d-flex align-items-end mt-75 ms-1">
              <div>
                <Button
                  tag={Label}
                  className="mb-75 me-75"
                  size="sm"
                  color="primary"
                >
                  Upload
                  <Input
                    type="file"
                    onChange={onChange}
                    hidden
                    accept="image/*"
                  />
                </Button>
                <Button
                  className="mb-75"
                  color="secondary"
                  size="sm"
                  outline
                  onClick={handleImgReset}
                >
                  Reset
                </Button>
                <p className="mb-0">
                  Allowed JPG, GIF or PNG. Max size of 800kB
                </p>
              </div>
            </div>
          </div>
          <Form className="mt-0 pt-5" onSubmit={handleSubmit}>
            <Row>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="name">
                  Name
                </Label>
                <Input id="name" name="name" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="website">
                  Website
                </Label>
                <Input id="website" name="website" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="status">
                  Status
                </Label>
                <Select
                  id="status"
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={statusOptions}
                  theme={selectThemeColors}
                  defaultValue={statusOptions[0]}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="status">
                  Classification
                </Label>
                <Select
                  id="classificationOptions"
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={classificationOptions}
                  theme={selectThemeColors}
                  defaultValue={classificationOptions[0]}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="address1">
                  Address 1
                </Label>
                <Input id="address1" name="address1" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="address2">
                  Address 2
                </Label>
                <Input id="address2" name="address2" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="city">
                  City
                </Label>
                <Input id="city" name="city" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="State">
                  State
                </Label>
                <Input id="State" name="State" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="zipcode">
                  ZipCode
                </Label>
                <Input
                  id="zipcode"
                  type="number"
                  maxLength={6}
                  name="zipcode"
                  placeholder=""
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="country">
                  Country
                </Label>
                <Select
                  id="status"
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={countryOptions}
                  theme={selectThemeColors}
                  defaultValue={countryOptions[0]}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="empCount">
                  Employee Count
                </Label>
                <Input
                  id="empCount"
                  type="number"
                  name="empCount"
                  placeholder=""
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="facebook">
                  Facebook
                </Label>
                <Input id="facebook" name="facebook" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="linkedIn">
                  LinkedIn
                </Label>
                <Input id="linkedIn" name="linkedIn" placeholder="" />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="instagram">
                  Instagram
                </Label>
                <Input id="instagram" name="instagram" placeholder="" />
              </Col>
              <Col className="mt-2" sm="12">
                <Button type="submit" className="me-1" color="primary">
                  Save
                </Button>
                <Button color="secondary" outline>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <Card>
      <CardTitle tag="h5"className="d-flex p-2 justify-content-between align-items-center">
          <span>Geo Location</span>
          <button className="btn btn-primary">Find Address</button>
        </CardTitle>
        <CardBody style={{height:"400px", width:"100%" }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            className="col-12"
            style={{ height: "100%", width: "100%", position:"relative" }}
            defaultCenter={position}
            defaultZoom={11}
          >
            <AnyReactComponent
              lat={position.lat}
              lng={position.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </CardBody>
      </Card>
    </React.Fragment>
  ) 
} 

export default CompanyInformation 
