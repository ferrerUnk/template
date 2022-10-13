import React from 'react'
import { Card, CardTitle, CardBody, Collapse } from 'reactstrap'
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
import ContactInfo from './contactInfo'
import ContactTable from "./list/Table"
const index = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Card className="p-0">
        <CardTitle
          tag="h4"
          className="mb-0 d-flex p-2 justify-content-between align-items-center"
        >
          <span>Contact</span>
          <button onClick={toggle} className="btn  btn-primary ml-auto">
            Add Contact <ChevronDown size={18} className="ms-50" />{" "}
          </button>
        </CardTitle>
        <hr className="my-0"/>
        <CardBody className="px-2  m-0">
          <Collapse isOpen={isOpen} >

          <ContactInfo/>
          </Collapse>
          <ContactTable/>
        </CardBody>
      </Card>
    </React.Fragment>
  )

}

export default index
