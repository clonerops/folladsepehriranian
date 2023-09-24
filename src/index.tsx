import { createRoot } from 'react-dom/client'
// Axios
import { Chart, registerables } from 'chart.js'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';

// Apps
import './_cloner/assets/sass/style.react.scss'
import './_cloner/assets/css/style.rtl.css'
import './_cloner/assets/css/tailwindcss.css'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'react-toastify/dist/ReactToastify.css';


import { AppRoutes } from './app/routing/AppRoutes'
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
