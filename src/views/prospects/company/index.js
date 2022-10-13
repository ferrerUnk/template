import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
// import Header from '../../header'
import ProspectsInformation from './prospectsInformation'
const index = () => {
  return (
    <React.Fragment>
        <ProspectsInformation/>
    </React.Fragment>
  )

}

export default index
