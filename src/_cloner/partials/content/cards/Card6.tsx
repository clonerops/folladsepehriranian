/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  image: string
  title: string
  children?: React.ReactNode
}

const Card6: FC<Props> = ({title, children}) => {
  return (
    <div className='card h-100'>
      <div className='card-header flex-nowrap border-0 pt-9'>
        <div className='card-title m-0'>
          <div className='symbol symbol-45px w-45px bg-light me-5'>
            <img src={toAbsoluteUrl('/media/logos/saipa-logo.png')} alt='saipa' className='p-3' />
          </div>

          <a href='#' className='fs-4 fw-semibold text-hover-primary text-gray-600 m-0'>
            {title}
          </a>
        </div>
      </div>

      <div className='card-body d-flex flex-column px-9 pt-6 pb-8'>
        {/* <div className='d-flex align-items-center flex-wrap mb-5 mt-auto fs-6'> */}
        <div className=''>
          {children}
        </div>
      </div>
    </div>
  )
}

export {Card6}
