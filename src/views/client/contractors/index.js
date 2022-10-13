import React, {useState} from 'react'
import { Card, CardTitle, CardBody, Collapse } from 'reactstrap'
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
import ContractorInfo from './contractorInfo'
import ContractsTable from "./list/Table"
const index = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Card className="p-0">
        <CardTitle
          tag="h4"
          className="mb-1 d-flex p-2 justify-content-between align-items-center"
        >
          <span>Contractors</span>
          <button onClick={toggle} className="btn  btn-primary ml-auto">
            Assign Contractor(s) <ChevronDown size={18} className="ms-50" />{" "}
          </button>
        </CardTitle>
        <hr className="my-0 py-0"/>
        <CardBody className="px-0  m-0">
        <Collapse isOpen={isOpen} >
          <ContractorInfo />
        </Collapse>
          <ContractsTable />
        </CardBody>
      </Card>
    </React.Fragment>
  )

}

export default index
