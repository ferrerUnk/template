// ** Routes Imports
import AppRoutes from './Apps'
import AuthRoutes from './Auth'
import DashboardRoutes from './Dashboards'

// ** Document title
const TemplateTitle = '%s - CrewBloom'

// ** Default Route
const DefaultRoute = '/team/dashboard'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...AuthRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
