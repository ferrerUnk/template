import React, {useState} from 'react'
import {Card, CardTitle, CardBody, Collapse} from 'reactstrap'
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
import ProjectInfo from './projectInfomation'
import ProjectTable from "./list/Table"
const index = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Card className="p-0">
        <CardTitle
          tag="h4"
          className="mb-1 d-flex px-2 pt-2 justify-content-between align-items-center"
        >
          <span>Projects</span>
          <button onClick={toggle} className="btn  btn-primary ml-auto">
            Add Project <ChevronDown size={18} className="ms-50" />{" "}
          </button>
        </CardTitle>
        <hr/>
        <CardBody className="px-0  m-0">
        <Collapse isOpen={isOpen} >
          <ProjectInfo/>
        </Collapse>
        <ProjectTable/>
        </CardBody>
      </Card>
    </React.Fragment>
  )
  
}

export default index
