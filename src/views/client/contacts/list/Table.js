import React from "react"
import {Card} from "reactstrap"
import {columns} from "./columns"
import DataTable from 'react-data-table-component'
const Table = () => {


const data = [
    {
        id: 1,
        name: "XYZ",
        role: "xyz",
        email: "xyz@gmail.com",
        mobile: "+91 9999999999",
        type: "Secondary"
    },
    {
        id: 2,
        name: "XYZ",
        role: "xyz",
        email: "xyz@gmail.com",
        mobile: "+91 9999999999",
        type: "Primary"
    },
    {
        id: 3,
        name: "XYZ",
        role: "xyz",
        email: "xyz@gmail.com",
        mobile: "+91 9999999999",
        type: "Tertiary"
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
