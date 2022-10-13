// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import ReactCountryFlag from 'react-country-flag'


export const columns = [
  {
    name: 'Name',
    headerStyle: { backgroundColor: '#f5f5f5'},
    sortable: false,
    minWidth: '200px',
    sortField: 'name',
    selector: row => row.name,
    cell: row => <span className='text-capitalize d-flex align-items-center'>
        <ReactCountryFlag countryCode={row.shortName}/>
        <span className="ms-1">{row.name}</span>
      </span>
  },
  {
    name: 'Country Code',
    sortable: false,
    minWidth: '120px',
    sortField: 'countryCode',
    selector: row => row.countryCode,
    cell: row => <span className='text-capitalize'>{row.countryCode}</span>
  },
  {
    name: 'Short Name',
    sortable: false,
    minWidth: '120px',
    sortField: 'shortName',
    selector: row => row.shortName,
    cell: row => <span className='text-capitalize'>{row.shortName}</span>
  },
  {
    name: 'Status',
    minWidth: '100px',
    sortable: false,
    sortField: 'status',
    cell: (row) => <span className='text-capitalize'>{row.status}</span>
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
