// import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'

import { useLocation } from "react-router-dom"

export function MenuInner() {
  let title = "";
  const { pathname } = useLocation()

  switch (pathname) {
    case "/dashboard/product/price":
      title = "قیمت کالا"
      break;
    case "/dashboard/customer/managment":
      title = "مدیریت و لیست مشتریان"
      break;
    case "/dashboard/product/supplier":
      title = "مدیریت و لیست تامین کنندگان"
      break;
    case "/dashboard/product/managment":
      title = "مدیریت و لیست کالا"
      break;
    case "/dashboard/user/create":
      title = "مدیریت کاربران"
      break;
    case "/dashboard/cargo/managment":
      title = "مدیریت اعلام بار"
      break;
    case "/dashboard/payment/managment":
      title = "ثبت دریافت و پرداخت"
      break;
    case "/dashboard/payment/accounting":
      title = "ثبت حسابداری دریافت و پرداخت"
      break;
    case "/dashboard/order/lists":
      title = "لیست سفارشات و جزئیات"
      break;
    case "/dashboard/order/managment":
      title = "ثبت سفارش جدید"
      break;
    case "/dashboard/order/detail":
      title = "جزئیات سفارش"
      break;
  
    default:
      break;
  }

  return (
    <>
      <span className="menu-item me-lg-1 tw-font-bold tw-text-[#6601FB] tw-text-xl">{title}</span>
      {/* <MenuItem title="بازرگانی سپهر ایرانیان" to='/dashboard' /> */}
      {/* <MenuItem title="تست هدر" to='/dashboard' /> */}
      {/* <MenuItem title="داشبورد مدیریت امور مشتریان" to='/dashboard-esale' />
      <MenuItem title="داشبورد مدیریت حمل کالا" to='/dashboard-esale' /> */}
      {/* <MenuItem title='Layout Builder' to='/builder' /> */}

      {/* <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='left-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
        <MenuItem
          icon='/media/icons/duotune/general/gen051.svg'
          to='/apps/user-management/users'
          title='User management'
        />
      </MenuInnerWithSub> */}

      {/* <MenuInnerWithSub
        isMega={true}
        title='Mega menu'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub> */}
    </>
  )
}
