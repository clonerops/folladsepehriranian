import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {LayoutProvider, LayoutSplashScreen} from '../_cloner/layout/core'
import {MasterInit} from '../_cloner/layout/MasterInit'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
        <LayoutProvider>
            <Outlet />
            <MasterInit />
        </LayoutProvider>
    </Suspense>
  )
}

export {App}
