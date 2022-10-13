// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


export const columns = [
  {
    name: 'Preferred Name',
    headerStyle: { backgroundColor: '#f5f5f5'},
    sortable: false,
    minWidth: '200px',
    sortField: 'preferredName',
    selector: row => row.preferredName,
    cell: row => <span className='text-capitalize'>{row.preferredName}</span>
  },
  {
    name: 'Full Name',
    sortable: false,
    minWidth: '120px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: row => <span className='text-capitalize'>{row.fullName}</span>
  },
  {
    name: 'Country',
    minWidth: '100px',
    sortable: false,
    sortField: 'country',
    cell: (row) => <span className='text-capitalize'>{row.country}</span>
  },
  {
    name: 'Project',
    minWidth: '120px',
    sortable: false,
    sortField: 'project',
    cell: (row) => <span className='text-capitalize'>{row.project}</span>
  },
  {
    name: 'Start Date',
    minWidth: '120px',
    sortable: false,
    sortField: 'startDate',
    selector: row => row.startDate,
    cell: row => <span className='text-capitalize'>{row.startDate}</span>
  },
  {
    name: 'CSM',
    minWidth: '120px',
    sortable: false,
    sortField: 'csm',
    cell: (row) => <span className='text-capitalize'>{row.csm}</span>
  },
  {
    name: 'Status',
    minWidth: '120px',
    sortable: false,
    sortField: 'status',
    cell: (row) => <span className='text-capitalize'>{row.status}</span>
  }
]
