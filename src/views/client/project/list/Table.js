import React from "react"
import {Card} from "reactstrap"
import {columns} from "./columns"
import DataTable from 'react-data-table-component'
const Table = () => {

const data = [
    {
      id: 1,
      projectName: "Project 1",
      projectType: "Type 1",
      targetStartDate: "01/01/2020",
      workHours: "10",
      rate: "10",
      csm:"John Doe"
    } 
]
// const data = []

  return (
    <Card className="overflow-hidden">
      <div className="react-dataTable">
        <DataTable
          responsive
          fixedHeader
          paginationServer
          columns={columns}
          data={data}
          sortable={false}
          sortIcon={false}
          bSortable={false}
          className="react-dataTable"
        />
      </div>
    </Card>
  )
}

export default Table
