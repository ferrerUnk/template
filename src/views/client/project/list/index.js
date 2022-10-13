import React from "react"
// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import {Card, CardBody, CardTitle } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { ChevronRight, Home, Phone, UserCheck, Users, ChevronDown, Layers } from 'react-feather'
import { Link, useHistory } from 'react-router-dom'
// ** Styles
import '@styles/react/apps/app-users.scss'
const ProjectList = () => {
  const history = useHistory()
  return (
    <React.Fragment>
      <Card className="p-0">
        <CardTitle
          tag="h4"
          className="mb-1 d-flex p-2 justify-content-between align-items-center"
        >
          <span>Projects</span>
          <button onClick={() => history.push("/team/clients/projects/add")} className="btn  btn-primary ml-auto">
            Add Project <ChevronDown size={18} className="ms-50" />{" "}
          </button>
        </CardTitle>
        <CardBody className="p-0 m-0">
          <Table/>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default ProjectList
