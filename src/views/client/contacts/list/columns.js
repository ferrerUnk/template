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
    name: 'Name',
    headerStyle: { backgroundColor: '#f5f5f5'},
    sortable: false,
    minWidth: '200px',
    sortField: 'name',
    selector: row => row.name,
    cell: row => <span className='text-capitalize'>{row.name}</span>
  },
  {
    name: 'role',
    sortable: false,
    minWidth: '120px',
    sortField: 'role',
    selector: row => row.role,
    cell: row => <span className='text-capitalize'>{row.role}</span>
  },
  {
    name: 'Email',
    minWidth: '100px',
    sortable: false,
    sortField: 'email',
    cell: (row) => <span className='text-capitalize'>{row.email}</span>
  },
  {
    name: 'Mobile',
    minWidth: '120px',
    sortable: false,
    sortField: 'mobile',
    cell: (row) => <span className='text-capitalize'>{row.mobile}</span>
  },
  {
    name: 'Type',
    minWidth: '120px',
    sortable: false,
    sortField: 'type',
    selector: row => row.type,
    cell: row => <span className='text-capitalize'>{row.type}</span>
  },
  {
    name: 'Action',
    minWidth: '120px',
    sortable: false,
    sortField: 'status',
    cell: () => (
          <div className='column-action'>
            <UncontrolledDropdown>
              <DropdownToggle tag='div' className='btn btn-sm'>
                <MoreVertical size={14} className='cursor-pointer' />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag='a' href='#' className='w-100'>
                  <Archive size={14} className='me-50' />
                  <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem
                  tag='a'
                  href='#'
                  className='w-100'
                >
                  <Trash2 size={14} className='me-50' />
                  <span className='align-middle'>Remove</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
    )
  }
]
