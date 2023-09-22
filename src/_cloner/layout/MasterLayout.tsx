import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HeaderWrapper } from './components/header'
import { ScrollTop } from './components/scroll-top'
import { Content } from './components/content'
import { Sidebar } from './components/sidebar'
import {
  DrawerMessenger,
  ActivityDrawer,
  ThemeModeProvider,
} from '../partials'
import { PageDataProvider } from './core'
import { reInitMenu } from '../helpers'
import { ToolbarWrapper } from './components/toolbar'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div style={{
          minHeight:"100vh",
          // width: "100%",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundOrigin: "cover",
          // backgroundImage: `url(${toAbsoluteUrl('/media/LOGOS/blob-scene-haikei.svg')})`
        }} className='d-flex flex-column flex-root app-root' id='kt_app_root'>
          <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
            <HeaderWrapper />
            <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
              <Sidebar />
              <div
                className='app-main flex-column flex-row-fluid' id='kt_app_main'>
                <div className='d-flex flex-column flex-column-fluid'>
                  <ToolbarWrapper />
                  <Content>
                    <Outlet />
                  </Content>
                </div>
                {/* <FooterWrapper /> */}
              </div>
            </div>
          </div>
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        <DrawerMessenger />
        {/* end:: Drawers */}

        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  )
}

export { MasterLayout }
