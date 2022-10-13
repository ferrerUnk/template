// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/team/team-member/list',
    component: lazy(() => import('../../views/teamMember/list'))
  },
  {
    path: '/team/team-member/view',
    exact: true,
    component: () => <Redirect to='/team-member/view/1' />
  },
  {
    path: '/team/team-member/view/:id',
    component: lazy(() => import('../../views/teamMember/view')),
    meta: {
      navLink: 'team/team-member/view'
    }
  },
  {
    path: '/team/team-member/add',
    component: lazy(() => import('../../views/teamMember/create')),
    exact: true
  },
  {
    path: '/team/team-member/add/:role',
    component: lazy(() => import('../../views/teamMember/create')),
    exact: true,
    meta: {
      navLink: 'team/team-member/add'
    }
  },

  // ** Client Routes
  {
    path: '/team/clients/list',
    component: lazy(() => import('../../views/client/list'))
  },
  {
    path: '/team/clients/add',
    component: lazy(() => import('../../views/client/create'))
  },
  {
    path: '/team/prospects/list',
    component: lazy(() => import('../../views/prospects/list'))
  },
  {
    path: '/team/prospects/add',
    component: lazy(() => import('../../views/prospects/create'))
  },
  {
    path: '/team/jobs/list',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/jobs/add',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/projects/list',
    component: lazy(() => import('../../views/projects/list'))
  },
  {
    path: '/team/projects/add',
    component: lazy(() => import('../../views/projects/create'))
  },
  {
    path: '/team/candidates/list',
    component: lazy(() => import('../../views/candidates/list'))
  },
  {
    path: '/team/candidates/add',
    component: lazy(() => import('../../views/candidates/create'))
  },
  {
    path: '/team/contractors/list',
    component: lazy(() => import('../../views/contractors/list'))
  },
  {
    path: '/team/contractors/add',
    component: lazy(() => import('../../views/contractors/create'))
  },
  {
    path: '/team/invoices/list',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/invoices/add',
    component: lazy(() => import('../../views/blank'))
  },

  // **Master Data Routes
  {
    path: '/team/countries/list',
    component: lazy(() => import('../../views/country'))
  },
  {
    path: '/team/tools/list',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/key-skills/list',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/master-data/list',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/master-data/add',
    component: lazy(() => import('../../views/blank'))
  },

  // **Miscellaneous Routes
  {
    path: '/team/archive',
    component: lazy(() => import('../../views/blank'))
  },
  {
    path: '/team/support-tickets',
    component: lazy(() => import('../../views/blank'))
  }
  
]

export default AppRoutes
