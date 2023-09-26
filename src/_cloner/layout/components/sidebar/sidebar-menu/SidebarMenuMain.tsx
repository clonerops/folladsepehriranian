/* eslint-disable react/jsx-no-target-blank */
// import React from 'react'
// import {KTSVG} from '../../../../helpers'
// import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
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
      {/* <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>سفارشات</span>
        </div>
      </div> */}
      <SidebarMenuItemWithSub
        to='/order'
        title='مدیریت سفارشات'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Finance/fin006.svg'
      >
        <SidebarMenuItem to='/dashboard/order/managment' title='ثبت سفارش' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/order/lists' title='لیست سفارشات' hasBullet={true} />

      </SidebarMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>پرداختها</span>
        </div>
      </div> */}
      <SidebarMenuItemWithSub
        to='/customer'
        title='مدیریت پرداخت ها'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Finance/fin010.svg'
      >
        <SidebarMenuItem to='/dashboard/payment/managment' title='دریافت و پرداخت' hasBullet={true} />
        <SidebarMenuItem to='/dashboard/payment/accounting' title='حسابداری دریافت پرداخت' hasBullet={true} />

      </SidebarMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>اعلام بار</span>
        </div>
      </div> */}
      <SidebarMenuItemWithSub
        to='/order'
        title='مدیریت اعلام بار'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Ecommerce/ecm006.svg'
      >
        <SidebarMenuItem to='/dashboard/cargo/managment' title='سفارشات اعلام بار نشده' hasBullet={true} />

      </SidebarMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>کاربران</span>
        </div>
      </div> */}
      <SidebarMenuItemWithSub
        to='/user'
        title='مدیریت کاربران'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Communication/com014.svg'
      >
        <SidebarMenuItem to='/dashboard/user/create' title='ایجاد کاربر جدید' hasBullet={true} />

      </SidebarMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>کالاها</span>
        </div>
      </div> */}
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
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>مشتریان</span>
        </div>
      </div> */}
      <SidebarMenuItemWithSub
        to='/customer'
        title='مدیریت مشتریان'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/Communication/com014.svg'
      >
        <SidebarMenuItem to='/dashboard/customer/managment' title='لیست مشتریان' hasBullet={true} />

      </SidebarMenuItemWithSub>


      {/* <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> */}
      {/* <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      {/* <SidebarMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      /> */}
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}

export { SidebarMenuMain }
