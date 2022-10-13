import React from "react"
// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import {Card, CardBody, CardTitle } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link } from 'react-router-dom'
// ** Styles
import '@styles/react/apps/app-users.scss'
const ProjectList = () => {
  return (
    <React.Fragment>
      <Table/>
    </React.Fragment>
  )
}

export default ProjectList
