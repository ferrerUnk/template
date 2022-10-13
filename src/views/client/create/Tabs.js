// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Link, Bell, Briefcase, Server, Home, Phone, Layers, Users} from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className='mb-2'>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <Home size={18} className='me-50' />
          <span className='fw-bold'>Company</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
          <Phone size={18} className='me-50' />
          <span className='fw-bold'>Contact</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '3'} onClick={() => toggleTab('3')}>
          <Layers size={18} className='me-50' />
          <span className='fw-bold'>Project</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '4'} onClick={() => toggleTab('4')}>
          <User size={18} className='me-50' />
          <span className='fw-bold'>Candidates</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
          <Users size={18} className='me-50' />
          <span className='fw-bold'>Contractors</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
