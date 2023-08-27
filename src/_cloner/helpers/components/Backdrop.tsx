import React, { FC } from 'react'
import { toAbsoluteUrl } from '../AssetHelpers';
// import BounceLoader from "react-spinners/BounceLoader";

interface IProps {
    loading: boolean
}

const Backdrop:FC<IProps> = () => {
    return (
        <section className='tw-flex tw-justify-center tw-items-center tw-fixed tw-w-full tw-h-full tw-top-0 tw-right-0 tw-bg-slate-400 tw-transition tw-z-[9999] tw-ease-out tw-bg-opacity-70'>
            <div className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
                <img alt='saipa-logo' className='tw-mb-20 tw-animate-ping' src={toAbsoluteUrl('/media/logos/folladlogo.png')} width={80} height={80} />
            </div>
        </section>
    )
}

export default React.memo(Backdrop)