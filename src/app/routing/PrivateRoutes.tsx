import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import { DashboardEsale } from '../pages/dashboard/DashboardEsale'
import Dashboard from '../pages/dashboard/Dashboard'
import { DashboardTransfer } from '../pages/dashboard/DashboardTransfer'
import { DashboardCrm } from '../pages/dashboard/DashboardCrm'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard/esale' />} />
        {/* Pages */}
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/esale' element={<DashboardEsale />} />
        <Route path='dashboard/transfer' element={<DashboardTransfer />} />
        <Route path='dashboard/crm' element={<DashboardCrm />} />
        {/* Lazy Modules */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}


export {PrivateRoutes}
