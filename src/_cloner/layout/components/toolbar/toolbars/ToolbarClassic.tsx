/* eslint-disable jsx-a11y/anchor-is-valid */
import {useLayout} from '../../../core'

const ToolbarClassic = () => {
  const {config} = useLayout()
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? 'btn-light'
    : 'bg-body btn-color-gray-700 btn-active-color-primary'

  return (
    <div className='d-flex align-items-center gap-2 gap-lg-3'>
      
    </div>
  )
}

export {ToolbarClassic}
