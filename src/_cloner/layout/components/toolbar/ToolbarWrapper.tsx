import { useLayout} from '../../core'

const ToolbarWrapper = () => {
  const {config} = useLayout()
  if (!config.app?.toolbar?.display) {
    return null
  }

  return (
    <></>
   
  )
}

export {ToolbarWrapper}
