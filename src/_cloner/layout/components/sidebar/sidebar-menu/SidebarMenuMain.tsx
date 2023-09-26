/* eslint-disable react/jsx-no-target-blank */
import { SidebarMenuItem } from './SidebarMenuItem'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'

const SidebarMenuMain = () => {
  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/General/gen025.svg'
        title={'صفحه نخست'}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItemWithSub
        to='/order'
        title='مدیریت سفارشات'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Finance/fin006.svg'
      >
        <SidebarMenuItem to='/dashboard/order/managment' title='ثبت سفارش' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/order/lists' title='لیست سفارشات' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/order/confirm' title='تایید سفارشات' hasBullet={true} />
      </SidebarMenuItemWithSub>
        <SidebarMenuItemWithSub
        to='/user'
        title='مدیریت پرداخت ها'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Finance/fin010.svg'
      >
        <SidebarMenuItem to='/dashboard/payment/managment' title='دریافت و پرداخت' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/payment/accounting' title='حسابداری دریافت پرداخت' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/user'
        title='مدیریت کاربران'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Communication/com014.svg'
      >
        <SidebarMenuItem to='/dashboard/user/create' title='ایجاد کاربر جدید' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/user'
        title='مدیریت اعلام بار'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Ecommerce/ecm006.svg'
      >
        <SidebarMenuItem to='/dashboard/cargo/managment' title='سفارشات اعلام بار نشده' hasBullet={true} />

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/product'
        title='مدیریت کالاها'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Ecommerce/ecm006.svg'
      >
        <SidebarMenuItem to='/dashboard/product/managment' title='لیست کالاها' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/product/price' title='قیمت کالاها' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/product/supplier' title='لیست تامین کنندگان' hasBullet={true} />

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/customer'
        title='مدیریت مشتریان'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Communication/com014.svg'
      >
        <SidebarMenuItem to='/dashboard/customer/managment' title='لیست مشتریان' hasBullet={true} />

      </SidebarMenuItemWithSub>


    </>
  )
}

export { SidebarMenuMain }
