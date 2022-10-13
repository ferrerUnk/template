// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Send, Eye, Home } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export const columns = [
  {
    name: 'Company Name',
    sortable: true,
    minWidth: '200px',
    sortField: 'companyName',
    selector: row => row.companyName,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
          <Home size={16}/>
        <span className='ms-1'>{row.companyName}</span>
      </div>
    )
  },
  {
    name: 'Project',
    sortable: true,
    minWidth: '150px',
    sortField: 'project',
    selector: row => row.role,
    cell: row => <span className='text-capitalize'>{row.project}</span>
  },
  {
    name: 'Type',
    minWidth: '120px',
    sortable: true,
    sortField: 'type',
    cell: (row) => <span className='text-capitalize'>{row.type}</span>
  },
  {
    name: 'Target Start Date',
    minWidth: '230px',
    sortable: true,
    sortField: 'targetStartDate',
    cell: (row) => (<span className='text-capitalize '>{row.targetStartDate}</span>
        )
  },
  {
    name: 'Dept',
    minWidth: '150px',
    sortable: true,
    sortField: 'dept',
    selector: row => row.dept,
    cell: row => <span className='text-capitalize'>{row.dept}</span>
  },
  {
    name: 'Work Hours',
    minWidth: '170px',
    sortable: true,
    sortField: 'workHours',
    cell: (row) => <span className='text-capitalize'>{row.workHours}</span>
  },
  {
    name: 'Rate',
    minWidth: '120px',
    sortable: true,
    sortField: 'rate',
    cell: (row) => <span className='text-capitalize'>{row.rate}</span>
  },
  {
    name: 'Number Req',
    minWidth: '120px',
    sortable: true,
    sortField: 'reqNumber',
    cell: (row) => <span className='text-capitalize'>{row.reqNumber}</span>
  },
  {
    name: 'Actions',
    minWidth: '200px',
    cell: () => (
      <div className='column-action d-flex align-items-center justify-content-between'>
        <Send role='button' size={15}/>
        <Eye role='button' size={15} className='mx-1'/>
        <MoreVertical role='button' size={15} />
      </div>
    )
  }
]
