import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Order from '../modules/order/Order'
import CreateUser from '../modules/user/CreateUser'
import Products from '../modules/product/Products'
import OrderList from '../modules/order/OrderList'

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
        <Route path='dashboard/order/lists' element={<OrderList />} />
        {/* Users */}
        <Route path='dashboard/user/create' element={<CreateUser />} />
        {/* Products */}
        <Route path='dashboard/product/managment' element={<Products />} />

        {/* Lazy Modules */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}


export {PrivateRoutes}
