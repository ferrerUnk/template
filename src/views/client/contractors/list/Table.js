import React from "react"
import {Card} from "reactstrap"
import {columns} from "./columns"
import DataTable from 'react-data-table-component'
const Table = () => {


const data = [
    {
        id: 1,
        preferredName: "John Doe",
        fullName: "John Doe",
        country: "USA",
        project: "Project 1",
        startDate: "01/01/2020",
        csm: "John Doe",
        status: "Active"
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
          noDataComponent={<span className="text-secondary">No data available</span>}
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
