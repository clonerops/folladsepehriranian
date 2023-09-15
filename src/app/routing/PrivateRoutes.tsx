import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Order from '../modules/order/Order'
import CreateUser from '../modules/user/CreateUser'
import Products from '../modules/product/Products'
import OrderList from '../modules/order/OrderList'
import Customer from '../modules/customer/Customer'
import Suppliers from '../modules/product/Suppliers'
import Cargo from '../modules/cargo/Cargo'
import Confirm from '../modules/cargo/components/Confirm'
import RecievePayment from '../modules/payment/RecievePayment'
import PaymentAccounting from '../modules/payment/PaymentAccounting'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<Dashboard />} />
        {/* Orders */}
        <Route path='dashboard/order/managment' element={<Order />} />
        <Route path='dashboard/order/lists' element={<OrderList />} />
        <Route path='dashboard/cargo/managment' element={<Cargo />} />
        <Route path='dashboard/order/Cargo/:id' element={<Confirm />} />
        {/* Users */}
        <Route path='dashboard/user/create' element={<CreateUser />} />
        {/* Products */}
        <Route path='dashboard/product/managment' element={<Products />} />
        <Route path='dashboard/product/supplier' element={<Suppliers />} />
        {/* Customer */}
        <Route path='dashboard/customer/managment' element={<Customer />} />
        {/* Payment */}
        <Route path='dashboard/payment/managment' element={<RecievePayment />} />
        <Route path='dashboard/payment/accounting' element={<PaymentAccounting />} />


        {/* Lazy Modules */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}


export {PrivateRoutes}
