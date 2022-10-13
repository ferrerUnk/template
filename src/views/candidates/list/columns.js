// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Video, Send, Eye, CheckCircle, Minus, Lock } from 'react-feather'

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
    name: 'name',
    headerStyle: { backgroundColor: '#f5f5f5'},
    sortable: false,
    minWidth: '200px',
    sortField: 'name',
    selector: row => row.name,
    cell: row => <span className='text-capitalize d-flex align-items-center'>
             {row.Avatar ? <Avatar src={row.Avatar} size={40} /> : <ProfileImage name={row.name} />}
             <span className="mx-1">{row.name}</span>
        </span>
  },
  {
    name: 'Email',
    sortable: false,
    minWidth: '200px',
    sortField: 'email',
    selector: row => row.email,
    cell: row => <span className='text-capitalize'>{row.email}</span>
  },
  {
    name: 'Endorosement Date',
    minWidth: '170px',
    sortable: false,
    sortField: 'endorosementDate',
    cell: (row) => <span className='d-flex align-items-center'>{row.endorosementDate}</span>
  },
  {
    name: 'Refrences',
    minWidth: '150px',
    sortable: false,
    sortField: 'refrences',
    cell: (row) => <span className='text-capitalize'>{row.refrences}</span>
  },
  {
    name: 'Progress',
    minWidth: '150px',
    sortable: false,
    sortField: 'progress',
    cell: (row) => <span className='text-capitalize'>{row.progress}</span>
  },
  {
    name: 'Assesed',
    minWidth: '150px',
    sortable: false,
    sortField: 'assesed',
    cell: (row) => <span className='text-capitalize'>{row.assesed === true ? <CheckCircle  className="text-primary"/> : <Minus/>}</span>
  },
  {
    name: 'Profile Locked',
    minWidth: '150px',
    sortable: false,
    sortField: 'profileLocked',
    cell: (row) => <span className='text-capitalize'>{row.profileLocked === true ? <Lock className="text-warning"/>  : <Minus/> }</span>
  },
  {
    name: 'Status',
    minWidth: '240px',
    sortable: false,
    sortField: 'status',
    cell: (row) => <span className='text-capitalize'>
        {row.status === '1' && <span className="text-success bg-light p-1 rounded">Active</span>}
        {row.status === '2' && <span className="text-warning bg-light p-1 rounded">InComplete</span>}
      </span>
  },
  {
    name: 'Action',
    minWidth: '140px',
    sortable: false,
    sortField: 'action',
    selector: row => row.action,
    cell: () => (
        <div className='column-action'>
        <Send size={15} className='me-1'/>
        <Eye size={15} className='me-1'/>
        <MoreVertical size={15} className='me-1'/>
      </div>
    )
  }
]
