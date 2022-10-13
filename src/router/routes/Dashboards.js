import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/team/dashboard',
    component: lazy(() => import('../../views/dashboard'))
  }
]

export default DashboardRoutes
