import {MenuItem} from './MenuItem'
// import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'

export function MenuInner() {
  return (
    <>
      <MenuItem title="داشبورد فروش اینتزنتی" to='/dashboard/esale' />
      {/* <MenuItem title="داشبورد مدیریت امور مشتریان" to='/dashboard-esale' />
      <MenuItem title="داشبورد مدیریت حمل محصول" to='/dashboard-esale' /> */}
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
