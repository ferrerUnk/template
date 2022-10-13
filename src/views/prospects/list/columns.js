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
    name: 'Primary Contact',
    sortable: true,
    minWidth: '200px',
    sortField: 'primaryContact',
    selector: row => row.role,
    cell: row => <span className='text-capitalize'>{row.primaryContact}</span>
  },
  {
    name: 'CSM',
    minWidth: '120px',
    sortable: true,
    sortField: 'csm',
    cell: (row) => <span className='text-capitalize'>{row.csm}</span>
  },
  {
    name: 'Classification',
    minWidth: '200px',
    sortable: true,
    sortField: 'classification',
    cell: (row) => (
        <>
            {row.classification === '1' && <span className='text-capitalize font-weight-bold text-warning p-1 bg-light rounded'>{'Gold'}</span>}
            {row.classification === '2' && <span className='text-capitalize font-weight-bold text-secondary p-1 bg-light rounded'>{'Silver'}</span>}
        </>
        )
  },
  {
    name: 'Total Projects',
    minWidth: '200px',
    sortable: true,
    sortField: 'totalProjects',
    selector: row => row.status,
    cell: row => <span className='text-capitalize'>{row.totalProjects}</span>
  },
  {
    name: 'Total Contractors',
    minWidth: '250px',
    sortable: true,
    sortField: 'totalContractors',
    cell: (row) => <span className='text-capitalize'>{row.totalContractors}</span>
  },
  {
    name: 'Status',
    minWidth: '150px',
    sortable: true,
    sortField: 'status',
    cell: (row) => (
        <>
            {row.status === '1' && <span className='text-capitalize font-weight-bold text-danger p-1 bg-light rounded'>{'Inactive'}</span>}
            {row.status === '2' && <span className='text-capitalize font-weight-bold text-success p-1 bg-light rounded'>{'Paid'}</span>}
            {row.status === '3' && <span className='text-capitalize font-weight-bold text-primary p-1 bg-light rounded'>{'Active'}</span>}
        </>
        )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: () => (
      <div className='column-action d-flex align-items-center justify-content-between'>
        <Send role='button' size={15}/>
        <Eye role='button' size={15} className='mx-1'/>
        <MoreVertical role='button' size={15} />
      </div>
    )
  }
]
