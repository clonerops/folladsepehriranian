import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Order from '../pages/dashboard/Order'
import CreateUser from '../pages/dashboard/CreateUser'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<Dashboard />} />
        {/* Orders */}
        <Route path='dashboard/order' element={<Order />} />
        {/* Users */}
        <Route path='dashboard/create-user' element={<CreateUser />} />
        {/* Lazy Modules */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}


export {PrivateRoutes}
