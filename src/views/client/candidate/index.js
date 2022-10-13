import React from 'react'
import {Card, CardTitle, CardBody} from 'reactstrap'
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
import CandidateList from './list'
const index = () => {
  return (
    <React.Fragment>
      <CandidateList/>
    </React.Fragment>
  )
  
}

export default index
