import React from "react"
import {Card} from "reactstrap"
import {columns} from "./columns"
import DataTable from 'react-data-table-component'
const Table = () => {

const data = [
    {
        id: 1,
        preferredName: "John Doe",
        applyingFor: "XYZ",
        country: "Phillipines",
        countryCode: "PH",
        video: true
    },
    {
        id: 2,
        preferredName: "Favour William",
        applyingFor: "XYZ",
        country: "India",
        countryCode: "IN",
        video: false
    },
    {
        id: 3,
        preferredName: "John Doe",
        applyingFor: "XYZ",
        country: "USA",
        countryCode: "US",
        video: false
    }
]

  return (
    <Card className="overflow-hidden">
      <div className="react-dataTable">
        <DataTable
          responsive
          padEnd={"20px"}
          fixedHeader
          paginationServer
          columns={columns}
          data={data}
          noDataHeader="No data found"
          noDataComponent={<div className="text-secondary">No data available</div>}
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
