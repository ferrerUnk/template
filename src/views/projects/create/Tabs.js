// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Link, Bell, Briefcase, Server, Home, Phone, Layers, Users} from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className='mb-2'>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <Layers size={18} className='me-50' />
          <span className='fw-bold'>Project</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
          <User size={18} className='me-50' />
          <span className='fw-bold'>Candidates</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
