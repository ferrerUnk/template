// ** Icons Import
import { Circle, User, Users, UserPlus, Layers, UserCheck, Edit, Globe, Tool, BarChart, FileText, Briefcase, Archive, LogOut, Book} from 'react-feather'

export default [
  {
    header: 'TEAM MANAGEMENT'
  },
  {
    id: 'teams',
    title: 'Team Member',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/team-member/list'
        // parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/team-member/add/admin'
      }
    ]
  },
  {
    header: 'CLIENT MANAGEMENT'
  },
  {
    id: 'clients',
    title: 'Clients',
    icon: <Users size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/clients/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/clients/add'
      }
    ]
  },
  {
    id: 'prospects',
    title: 'Prospects',
    icon: <UserPlus size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/prospects/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/prospects/add'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <Layers size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/projects/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/projects/add'
      }
    ]
  },
  {
    id: 'candidates',
    title: 'Candidates',
    icon: <UserCheck size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/candidates/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/candidates/add'
      }
    ]
  },
  {
    id: 'contractors',
    title: 'Contractors',
    icon: <Users size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/contractors/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/contractors/add'
      }
    ]
  },
  {
    id: 'invoices',
    title: 'Invoices',
    icon: <Edit size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/invoices/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/invoices/add'
      }
    ]
  },
  {
    header: 'MASTER DATA MANAGEMENT'
  },
  {
    id: 'country',
    title: 'Country',
    icon: <Globe size={20} />,
    navLink: '/team/countries/list'
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: <Tool size={20} />,
    navLink: '/team/tools/list'
  },
  {
    id: 'key-skills',
    title: 'Key Skills',
    icon: <BarChart size={20} />,
    navLink: '/team/key-skills/list'
  },
  {
    id: 'master-data',
    title: 'Master Data',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/team/master-data/list'
      },
      {
        id: 'add',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/team/master-data/add'
      }
    ]
  },
  { 
    header: 'Miscellaneous'
  },
  {
    id: 'archives',
    title: 'Archives',
    icon: <Archive size={20} />,
    navLink: '/team/archives'
  },
  {
    id: 'support-tickets',
    title: 'Support Tickets',
    icon: <Book size={20} />,
    navLink: '/team/support-tickets'
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: <LogOut size={20} />,
    navLink: '#'
  }
]
