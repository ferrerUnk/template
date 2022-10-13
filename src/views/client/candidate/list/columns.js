// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Video } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import ReactCountryFlag from "react-country-flag"

const ProfileImage = ({name}) => {
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]
    return (
        <div className="d-flex align-items-center">
            <small className="ml-2 rounded-circle bg-light p-1 text-uppercase">
                {firstName.charAt(0)}{lastName.charAt(0)}
            </small>
        </div>
    )
}
export const columns = [
  {
    name: 'Preferred Name',
    headerStyle: { backgroundColor: '#f5f5f5'},
    sortable: false,
    minWidth: '240px',
    sortField: 'preferredName',
    selector: row => row.preferredName,
    cell: row => <span className='text-capitalize d-flex align-items-center'>
             {row.Avatar ? <Avatar src={row.Avatar} size={40} /> : <ProfileImage name={row.preferredName} />}
             <span className="mx-1">{row.preferredName}</span>
        </span>
  },
  {
    name: 'Role Applying For',
    sortable: false,
    minWidth: '230px',
    sortField: 'applyingFor',
    selector: row => row.applyingFor,
    cell: row => <span className='text-capitalize'>{row.applyingFor}</span>
  },
  {
    name: 'country',
    minWidth: '170px',
    sortable: false,
    sortField: 'country',
    cell: (row) => <span className='d-flex align-items-center'>
            <ReactCountryFlag style={{fontSize: '1.3rem'}} countryCode={row.countryCode} />
            <span className='mx-1'>{row.country}</span>
        </span>
  },
  {
    name: 'Video',
    minWidth: '240px',
    sortable: false,
    sortField: 'video',
    cell: (row) => <span className='text-capitalize'>{row.video === true ? <Video color='#43A06F' fontStyle="bold"/> : <Video color='gray'/>}</span>
  },
  {
    name: 'Action',
    minWidth: '140px',
    sortable: false,
    sortField: 'action',
    selector: row => row.action,
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
