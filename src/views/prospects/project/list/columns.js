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
    name: 'Project',
    headerStyle: { backgroundColor: '#f5f5f5'},
    sortable: false,
    minWidth: '200px',
    sortField: 'projectName',
    selector: row => row.projectName,
    cell: row => <span className='text-capitalize'>{row.projectName}</span>
  },
  {
    name: 'Type',
    sortable: false,
    minWidth: '120px',
    sortField: 'projectType',
    selector: row => row.projectType,
    cell: row => <span className='text-capitalize'>{row.projectType}</span>
  },
  {
    name: 'Target Start Date',
    minWidth: '230px',
    sortable: false,
    sortField: 'targetStartDate',
    cell: (row) => <span className='text-capitalize'>{row.targetStartDate}</span>
  },
  {
    name: 'Work Hours',
    minWidth: '200px',
    sortable: false,
    sortField: 'workHours',
    cell: (row) => <span className='text-capitalize'>{row.workHours}</span>
  },
  {
    name: 'Rate',
    minWidth: '120px',
    sortable: false,
    sortField: 'rate',
    selector: row => row.rate,
    cell: row => <span className='text-capitalize'>{row.rate}</span>
  },
  {
    name: 'CSM',
    minWidth: '120px',
    sortable: false,
    sortField: 'csm',
    cell: (row) => <span className='text-capitalize'>{row.csm}</span>
  }
]
