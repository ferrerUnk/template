import React from 'react'
import {Card, CardTitle, CardBody} from 'reactstrap'
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
import CandidateList from './list'
const index = () => {
  return (
    <React.Fragment>
      <Card className="p-0">
        <CardTitle
          tag="h4"
          className="mb-1 d-flex px-2 pt-2 justify-content-between align-items-center"
        >
          <span>Candidates</span>
        </CardTitle>
        <hr/>
        <CardBody className="px-2  m-0">
          <CandidateList/>
        </CardBody>
      </Card>
    </React.Fragment>
  )
  
}

export default index
