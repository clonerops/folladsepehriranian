/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'

type Props = {
  className: string
  data?: any
  isLoading?: boolean
  isError?: boolean
}

const SaleTotalDetailTable: React.FC<Props> = ({className, data, isLoading, isError}) => {
//   const [dataset, setDataset] = useState([])
//   useEffect(() => {
//         const newObject = {
//       caR_TYPE_DESC: 'جمع کل',
//       calltopaY_CNT: data?.reduce((accumulator: any, currentValue: any) => {
//         return accumulator + currentValue.calltopaY_CNT
//       }, 0),
//     //   paymentwaitinG_CNT: data?.reduce((accumulator: any, currentValue: any) => {
//     //     return accumulator + currentValue.paymentwaitinG_CNT
//     //   }, 0),
//     //   unverifiedapplicanT_CNT: data.reduce((accumulator: any, currentValue: any) => {
//     //     return accumulator + currentValue.unverifiedapplicanT_CNT
//     //   }, 0),
//     //   payedcount: data.reduce((accumulator: any, currentValue: any) => {
//     //     return accumulator + currentValue.payedcount
//     //   }, 0),
//     //   counT_ALL: data.reduce((accumulator: any, currentValue: any) => {
//     //     return accumulator + currentValue.counT_ALL
//     //   }, 0),
//     }
//     // const dataObject: any = [...data]
//     // data.unshift(newObject)
//     // setDataset(dataObject)

//   }, [data])

  if (isLoading) {
    return <div>درحال بارگزاری...</div>
  }

  if (isError) {
    return <div>Error fetching chart data</div>
  }
 
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='text-start'>طرح</th>
                <th className='text-start'>فراخوان واریز</th>
                <th className='text-start'>منتظر فراخوان</th>
                <th className='text-start'>غیر مجاز</th>
                <th className='text-start'>جمع</th>
                <th className='text-start'>واریز شده</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data?.map((item: any) => {
                return (
                  <>
                    <tr>
                      <td>
                        <a
                          href='#'
                          className='text-start text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {item.saletotaldesc}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-start text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {item.calltopaY_CNT}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-start text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {item.paymentwaitinG_CNT}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-start text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {item.unverifiedapplicanT_CNT}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-start text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {item.payedcount}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-start text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {item.counT_ALL}
                        </a>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {SaleTotalDetailTable}
