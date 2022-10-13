import React from "react"
import {Card} from "reactstrap"
import {columns} from "./columns"
import DataTable from 'react-data-table-component'
const Table = () => {


const data = [
    {
        id: 1,
        name: "India",
        countryCode: "+91",
        shortName: "IN",
        status: "Active"
    },
    {
      id: 2,
        name: "United States Of America",
        countryCode: "+1",
        shortName: "US",
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
